import { Component, OnInit, Input } from '@angular/core';
import { QueryService } from '../services/query.service';
import { Router } from '@angular/router';
import { ThfTableColumn } from '@totvs/thf-ui';

@Component({
  selector: 'bqa-execplan',
  templateUrl: './execplan.component.html',
  styleUrls: ['./execplan.component.css']
})
export class ExecplanComponent implements OnInit {

  @Input() idquery: any
  dbresult$ : any

  columns: Array<ThfTableColumn> = this.getColumns();
  items: Array<any>;

  constructor(private service: QueryService, private router: Router) {}

  ngOnInit() {
    this.service.getDBResult(this.idquery)
    .subscribe(
      data => {
        this.dbresult$ = data;
        this.insertItemColumns()
    });
  }

  insertItemColumns(){
    this.items = this.dbresult$
    for (let i = 0; i < this.dbresult$.length; i++) {
      this.items[i].isapproved = (this.dbresult$[i].isapproved) ? 'true' : 'false';
    }
  }

  isUndelivered(row, index: number) {
    return (!row.isapproved) ? true : false;
  }
  getColumns(): Array<ThfTableColumn> {
    return [
      { property: 'sgbd_name', label: 'Banco de Dados', width: '8%'},
      { property: 'dbresult_message', label: 'Mensagem' },
      { property: 'date_test', label: 'Data do teste', type: 'dateTime', width: '10%' },
      { property: 'isapproved', label:'Status', type: 'label', width: '8%', labels: [
        { value: 'true', color: 'success', label: 'Aprovado' },
        { value: 'false', color: 'danger', label: 'Reprovado'}
      ]}
    ];
  }

  

}
