import { Component, OnInit, Query} from '@angular/core';
import { QueryService } from '../common/services/query.service';
import { ThfInfoOrientation } from '@totvs/thf-ui';
import { Observable } from 'rxjs';
import { Filter } from '../common/services/filter';
import { Router } from '@angular/router';
import { Project } from './projects.model';

@Component({
  selector: 'bqa-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  showMoreDisabled = false;
  orientation : ThfInfoOrientation = ThfInfoOrientation.Horizontal;
  item : Object;
  
  showproject: Array<any> = [{ 'label': 'Detalhes', 'function': 'showDetail' }];

  data$: Observable<Query[]>;
  projects: any //Array<Project>;
  
  activeFilter: Boolean = false;
  filter: Filter;
  
  constructor(private service: QueryService, private router: Router) { }

  ngOnInit() { 
    this.service.getPorjects().subscribe(
      dados => {
        //console.log('getData -valueCount')
        //console.log(dados.result)
        this.projects = dados.result;
      });
  }

  showDetail(i){
    console.log(this.projects[i].id_squad);
    this.router.navigate([
      '/project-detail', 
      {
        squad: this.projects[i].id_squad
      }
    ]);
  }
  ngOnDestroy(){
    //unsubscribe
  }
  showFilter(){
    
  }
}