import { Component, OnInit, Input } from '@angular/core';
import { QueryService } from '../services/query.service';
import { Router } from '@angular/router';
import { ResultAdvpl } from './result-advpl.model';

import { ThfTableColumn } from '@totvs/thf-ui/components/thf-table';

@Component({
  selector: 'bqa-result-advpl',
  templateUrl: './result-advpl.component.html',
  styleUrls: ['./result-advpl.component.css']
})
export class ResultAdvplComponent implements OnInit {

  @Input() idquery: any
  advplresult$ : Array<ResultAdvpl>;
  advpl : Array<any>;

  columns: Array<ThfTableColumn> = this.getColumns();
  items: Array<any>;

  constructor(private service: QueryService, private router: Router) {}

   ngOnInit() {
    this.service.getAdvplResult(this.idquery)
    .subscribe(
      data => {
        this.advplresult$ = data;
        //this.advplToObj()
        this.insertItemColumns()
    });
  }
  
  advplToObj() {
    this.advpl = []
    for (let i = 0; i < this.advplresult$.length; i++) {
      const element = this.advplresult$[i].advpl;
      this.advpl.push(element);
    }
  }

  insertItemColumns(){
    this.items = this.advplresult$
    for (let i = 0; i < this.advplresult$.length; i++) {
      this.items[i].isapproved = (this.advplresult$[i].isapproved) ? 'true' : 'false';
    }
  }

  isUndelivered(row, index: number) {
    return (row.isapproved) ? true : false;
  }

  getColumns(): Array<ThfTableColumn> {
    return [
      { property: 'name', label: 'Banco de Dados', width: '8%'},
      { property: 'message', label: 'Mensagem' },
      { property: 'date', label: 'Data do teste', type: 'dateTime', width: '10%' },
      { property: 'isapproved', label:'Status', type: 'label', width: '8%', labels: [
        { value: 'true', color: 'success', label: 'Aprovado' },
        { value: 'false', color: 'danger', label: 'Reprovado'}
      ]}
    ];
  }
}

