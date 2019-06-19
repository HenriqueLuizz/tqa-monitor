import { Component, OnInit, Input } from '@angular/core';
import { QueryService } from '../common/services/query.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bqa-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css'],
  providers: [QueryService]
})
export class SourceComponent implements OnInit {

  @Input() squad: any
  sources: any

  eventsObject: Array<any> = [{ 'label': 'Detail', 'function': 'detailSource' }];


  constructor( private service : QueryService, private router: Router) {}

  ngOnInit() {
    //console.log(this.sources);
    this.service.getSources(this.squad)
    .subscribe(
      dados => {
        //console.log('getData -valueCount')
        //console.log(dados.result)
        this.sources = dados.result;
        console.log(this.sources)
      });
  }

  detailSource(i){
    //console.log(this.sources[i])
    //console.log(this.sources[i].id_source)
    //console.log(this.sources[i].id_squad)
    this.router.navigate([
      '/source-detail', 
      { 
        source: this.sources[i].source_id,
        squad: this.sources[i].squad_id
      }]);
  }  
}