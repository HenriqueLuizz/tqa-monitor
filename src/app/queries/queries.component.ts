import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { QueryService } from '../common/services/query.service';
import { Router } from '@angular/router';
import { ThfTagOrientation } from '@totvs/thf-ui';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'bqa-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
export class QueriesComponent implements OnInit {

  @Input() idSource;
  @Input() filterQuery : Array<boolean>;
  queries: any;

  eventsObject: Array<any> = [{ 'label': 'Detail', 'function': 'detailQuery' }];
  orientation: ThfTagOrientation = ThfTagOrientation.Horizontal;
  filter : EventEmitter<any> = new EventEmitter();
  
  constructor(private service: QueryService, private router: Router) {
    console.log(this.filterQuery);
  }

  ngOnInit() {
    this.service.getQueries(this.idSource)
    .subscribe(
      data => {
        this.queries = data.result.result
        this.statusQuery();
        console.log(this.queries);
      })
  }

  detailQuery(i){
    this.router.navigate([
      '/query-detail', 
      { 
        source: this.idSource,
        query: this.queries[i].id_query
      }]);
  }

  statusQuery() {
    for (let i = 0; i < this.queries.length; i++) {
      this.queries[i].advpl_fail = (this.queries[i].advpl_fail == 0) ? true : false;
      this.queries[i].db_fail = (this.queries[i].db_fail == 0) ? true : false;
      this.queries[i].status = (this.queries[i].advpl_fail && this.queries[i].db_fail) ? true : false
    }
  }

  needHidde(status){
    return status
  }
    
  isSuccess(status){
    return status ? 'success' : 'danger'
  }
  valueTag(status){
    return status ? 'OK' : 'ERRO'
  }
}
