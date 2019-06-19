import { Component, OnInit, Input } from '@angular/core';
import { convertToBoolean } from '@totvs/thf-ui/utils/util';

@Component({
  selector: 'bqa-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() checked
  @Input() disable
  @Input() hiddenLabel

  star1: boolean = false
  star2: boolean = false
  star3: boolean = false
  star4: boolean = false
  star5: boolean = false

  constructor() { }

  ngOnInit() {
    this.disable = this.disable == undefined ? false : this.disable;
    this.checked = this.checked == undefined ? 0 : this.checked;
    this.isChecked()
    this.isHiddenLabel()
  }

  isHiddenLabel(){
    this.hiddenLabel = this.hiddenLabel == undefined ? false : this.hiddenLabel == "true" ? true : false;
    convertToBoolean(this.hiddenLabel)
  }

  isChecked(){
    if (this.checked == 1){
      this.star5 = true;
    }else if (this.checked < 0.26) {
      this.star1 = true;
    }else if (this.checked > 0.76) {
      this.star4 = true;
    }else if (this.checked < 0.50) {
      this.star2 = true;
    }else{
      this.star3 = true;
    }
  }
}
