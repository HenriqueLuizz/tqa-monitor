import { Component, OnInit } from '@angular/core';

import { ThfMultiselectOption } from '@totvs/thf-ui/components/thf-field';
import { ThfTagOrientation } from '@totvs/thf-ui/components/thf-tag';
import { HomeService } from '../common/services/home.service';


@Component({
  selector: 'bqa-test-manager',
  templateUrl: './test-manager.component.html',
  styleUrls: ['./test-manager.component.css']
})
export class TestManagerComponent implements OnInit {

  statusTest: String;
  isRunning: Boolean;

  statusTestName: String;
  statusTestType: String;
  tagOrientation: ThfTagOrientation = ThfTagOrientation.Horizontal;
  
  btnTypeTest: String;
  btnLoading: Boolean;

  dbTest: Array<string>;

  options: Array<ThfMultiselectOption> = [
    { value: 'ORACLE', label: 'ORACLE' },
    { value: 'MSSQL', label: 'MSSQL' },
    { value: 'POSTGRES', label: 'POSTGRES' }
  ]

  constructor(private Service : HomeService) {
    this.Service.status().subscribe(
      data => {
        this.isRunning = data.status
        this.setStatus()
      },
      erro => console.log(erro)
    );
    
  }

  ngOnInit() {
    this.btnLoading =  false;    
  }

  btnTest() {
    this.Service.startStop().subscribe(
      data => {
        this.isRunning = data.status
        this.setStatus()  
      },
      erro => console.log(erro)
    );
  }

  cliclSetting(){
    console.log('Clicou em configurações')
  }

  setStatus(){
    if (this.isRunning){
      this.statusTest = "Stop Test";
      this.btnTypeTest = 'danger'
      this.statusTestName = 'Start';
      this.statusTestType = 'success';
    } else {
      this.statusTest = "Start Test";
      this.btnTypeTest = 'default'
      this.statusTestName = 'Stop';
      this.statusTestType = 'danger';
    }
  }
}
