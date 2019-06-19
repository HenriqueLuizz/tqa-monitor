import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QueryService } from '../common/services/query.service';

@Component({
  selector: 'bqa-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  id_squad: any
  project: any
  starts: Number

  constructor(
    private route: ActivatedRoute,
    private service: QueryService
    ){
      this.route.params.subscribe(res => this.id_squad = res.squad);
  }

  ngOnInit() {
    //console.log(this.id_squad)
    this.service.getPorject(this.id_squad)
    .subscribe(
      dados => {
        //console.log('getData -valueCount')
        //console.log(dados.result)
        this.project = dados.result;
        //console.log(this.project)
        this.starts = this.ratingToStars(this.project.rating)
        //console.log(this.starts)
      });
  }

  ratingToStars(rating){
    if (rating <= 0.20) {
      return 1      
    } else if(rating >= 0.80){
      return 5
    } else if(rating >= 0.20 && rating <= 0.40){
      return 2
    } else if (rating >= 0.40 && rating <= 0.60){
      return 4
    } else {
      //rating > 60 && rating < 80
      return 3
    }
  }
}
