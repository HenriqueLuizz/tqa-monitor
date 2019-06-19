import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bqa-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  @Input() queryOk
  @Input() queryFail
  @Input() totalQuery
  @Input() title

  @Output() filter : EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  needFilter(type){
    (type == 'ALL') ? this.filter.emit('ALL') : (type == 'OK') ? this.filter.emit('OK') : this.filter.emit('FAIL');
  }

}
