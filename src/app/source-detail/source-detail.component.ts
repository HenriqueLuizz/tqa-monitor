import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { QueryService } from '../common/services/query.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bqa-source-detail',
  templateUrl: './source-detail.component.html',
  styleUrls: ['./source-detail.component.css']
})
export class SourceDetailComponent implements OnInit {

  source: any
  queries: any
  id_source
  showQuery : Array<boolean>;

  //@Output() filter : EventEmitter<any> = new EventEmitter();

  constructor( private route: ActivatedRoute, private service: QueryService){
    this.route.params.subscribe(res => {
      //console.log(res)
      this.id_source = res.source
    });
    this.showQuery = [true, false];
  }

  ngOnInit() {
    this.service.getSource(this.id_source)
    .subscribe(
        dados => {
          this.source = dados.result;
        }); 
  }

  filterQuery(element, index, array) {
    return (element.showQuery == false)
  }

  needFilter(type){
    console.log(type);
      if (type == 'ALL') {
        this.showQuery = [true, false]
      } else if (type == 'OK') {
        this.showQuery = [true]
      } else {
        this.showQuery = [false]
      }
  }
}