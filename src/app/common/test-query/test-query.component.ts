import { Component, OnInit } from '@angular/core';
import { ThfMultiselectOption, ThfTagOrientation, ThfInfoOrientation, ThfTableColumn } from '@totvs/thf-ui';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { TestQuery } from '../services/testQuery';
import { QueryService } from '../services/query.service';


@Component({
  selector: 'bqa-test-query',
  templateUrl: './test-query.component.html',
  styleUrls: ['./test-query.component.css']
})
export class TestQueryComponent implements OnInit{
  
  orientation : ThfInfoOrientation = ThfInfoOrientation.Horizontal;

  data$: Observable<TestQuery>;
  
  data: any;
  dbresult: any;
  advpl: any;
  
  objQuery : TestQuery;
  isRunning: Boolean;

  //Modal-TestQuery
  modelDatabase: Array<string>;
  modelTypeExec: Array<string>;

  optDatabase: Array<ThfMultiselectOption> = [
    { value: 'ORACLE', label: 'ORACLE' },
    { value: 'MSSQL', label: 'MSSQL' },
    { value: 'POSTGRES', label: 'POSTGRES' }
  ]
  optTypeExec: Array<ThfMultiselectOption> = [
    { value: 'ADVPL', label: 'ADVPL' },
    { value: 'DATABASE', label: 'DATABASE' }
  ]

  //btn-TestQuery
  statusTest: String;
  btnTypeTest: String;
  btnLoading: Boolean;

  //Tag-TestQuery
  tagOrientation: ThfTagOrientation = ThfTagOrientation.Horizontal;
  statusTestType: String;
  statusTestName: String;

  //input-TestQuery
  testQuery: string = '';

  PgPlan: String;
  MssqlPlan: String;
  OraPlan: String;

  columnsDB: Array<ThfTableColumn> = this.getColumnsDB();
  columnsAdvpl: Array<ThfTableColumn> = this.getColumnsAdvpl();

  items: Array<any>;

  constructor(private service: QueryService) { 
    this.statusTest = 'Testar Query';
    this.btnTypeTest = 'default';
    this.modelDatabase = ['ORACLE', 'MSSQL', 'POSTGRES' ]
    this.modelTypeExec = ['ADVPL', 'DATABASE']
  }

  ngOnInit() {
    this.btnLoading = false;
  }

  async btnTest(){
    this.btnLoading = true;
    this.objQuery = {
      query: this.testQuery,
      sgbds: {
        oracle: this.modelDatabase.includes('ORACLE'),
        mssql: this.modelDatabase.includes('MSSQL'),
        postgres: this.modelDatabase.includes('POSTGRES')
      },
      method:{
        advpl: this.modelTypeExec.includes('ADVPL'),
        database: this.modelTypeExec.includes('DATABASE')
      }
    }

    this.service.sendQuery(this.objQuery)
    .pipe(
      //tap(console.log)
      tap(async (result) => {
        this.dbresult = result.db
        this.advpl = result.advpl.advpl
        this.data = result
        //this.dbresult.forEach(element => {
        //  (element.sgbd == 'MSSQL') ? this.mntSqlPlan(element) : (element.sgbd == 'ORACLE') ? this.mntOraTable(element) : (element.sgbd == 'POSTGRESQL') ? this.mntPgPlan(element) : '';
        //});
      })
      )
    .subscribe(()=>{
      this.btnLoading = false;
      this.insertItemColumns()
    });
  }
  
  isSuccess(status){
    return status ? 'success' : 'danger'
  }
  valueTag(status){
    return status ? 'OK' : 'ERRO'
  }

  mntOraTable(element){
    this.OraPlan = ''
    element.execPlan.forEach(element => {
      this.OraPlan += `${element['PLAN_TABLE_OUTPUT']} \n` || ''
    });
    return this.OraPlan
  }
  mntPgPlan(element){
    this.PgPlan = ''
    element.execPlan.forEach(element => {
      this.PgPlan += `${element['QUERY PLAN']} \n`
    });
    return this.PgPlan
  }
  mntSqlPlan(element){
    this.MssqlPlan = ''
    this.MssqlPlan = JSON.stringify(element.execPlan)
    return this.MssqlPlan
  }

  insertItemColumns(){
    //console.log(this.dbresult);
    //console.log(this.advpl);
    for (let i = 0; i < this.dbresult.length; i++) {
      this.dbresult[i].status = (this.dbresult[i].isApproved) ? 'true' : 'false';
      (this.dbresult[i].sgbd == 'MSSQL') 
        ? this.dbresult[i].plan = this.mntSqlPlan(this.dbresult[i]) : 
          (this.dbresult[i].sgbd == 'ORACLE') 
            ? this.dbresult[i].plan = this.mntOraTable(this.dbresult[i]) : 
              (this.dbresult[i].sgbd == 'POSTGRESQL') 
                ? this.dbresult[i].plan = this.mntPgPlan(this.dbresult[i]) : '';
    }
    
    for (let i = 0; i < this.advpl.length; i++) {
      this.advpl[i].status = (this.advpl[i].BRETMSP) ? 'true' : 'false';
    }
    console.log(this.dbresult);
  }


  isUndelivered(row, index: number) {
    return (row.status) ? true : false;
  }

  getColumnsAdvpl(): Array<ThfTableColumn> {
    return [
      { property: 'CSGBD', label: 'Banco de Dados', width: '8%'},
      { property: 'CRETMSP', label: 'Mensagem' },
      { property: 'date', label: 'Data do teste', type: 'dateTime', width: '10%' },
      { property: 'status', label:'Status', type: 'label', width: '8%', labels: [
        { value: 'true', color: 'success', label: 'Aprovado' },
        { value: 'false', color: 'danger', label: 'Reprovado'}
      ]}
    ];
  }
  getColumnsDB(): Array<ThfTableColumn> {
    return [
      { property: 'sgbd', label: 'Banco de Dados', width: '8%'},
      { property: 'message', label: 'Mensagem' },
      { property: 'date', label: 'Data do teste', type: 'dateTime', width: '10%' },
      { property: 'status', label:'Status', type: 'label', width: '8%', labels: [
        { value: 'true', color: 'success', label: 'Aprovado' },
        { value: 'false', color: 'danger', label: 'Reprovado'}
      ]}
    ];
  }

  cliclSetting(){ }
}