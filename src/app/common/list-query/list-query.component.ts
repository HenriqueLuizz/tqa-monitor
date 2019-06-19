import { Component, OnInit } from '@angular/core';
import { QueryService } from '../services/query.service';

@Component({
  selector: 'bqa-list-query',
  templateUrl: './list-query.component.html',
  styleUrls: ['./list-query.component.css']
})
export class ListQueryComponent implements OnInit {

  detail: any
  
  constructor(private service: QueryService) { }

  ngOnInit() { 
    
  }

  
}