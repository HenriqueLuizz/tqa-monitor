import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { QueryService } from '../common/services/query.service';
import { QueryDetail }  from './query-detail.model';

import { parseQuery } from '../common/utils';

@Component({
  selector: 'bqa-query-detail',
  templateUrl: './query-detail.component.html',
  styleUrls: ['./query-detail.component.css']
})
export class QueryDetailComponent implements OnInit {
  detail$ : QueryDetail
  id_query
  id_source

  constructor(
    private route: ActivatedRoute,
    private service: QueryService
    ){
      this.detail$ = this.resetQuery
      this.route.params.subscribe(res => {
      this.id_query = res.query
    });
  }

  ngOnInit() {
    this.service.getQuery(this.id_query)
    .subscribe(
      data => {
        this.detail$ = data.result.result[0];
        console.log(this.detail$);
        this.detail$.description = parseQuery(this.detail$.description);
      });
  }

  resetQuery = { application_name: "", date: "",
  description: "",
  environment: "",
  file: "",
  func: "",
  hashquery: "",
  hits: 0,
  hostip: "",
  hostname: "",
  id_query: 0,
  id_sgbd: 0,
  id_source: 0,
  line: "",
  message: "",
  rating: 0
}
}
