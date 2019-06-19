import { Component, OnInit } from '@angular/core';
import { ListQueryComponent } from '../common/list-query/list-query.component';

import { ThfTagModule, ThfTagOrientation } from '@totvs/thf-ui/components/thf-tag';
import { HomeService } from '../common/services/home.service';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'bqa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  orientation: ThfTagOrientation = ThfTagOrientation.Vertical ;
  datas: any

  protected subscription: Subscription;

  constructor( private Service : HomeService ) { 
    this.pooling();
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();

  }

  public readonly orientationOptions: Array<any> = [
    { label: 'Horizontal', value: ThfTagOrientation.Horizontal },
    { label: 'Vertical', value: ThfTagOrientation.Vertical }
  ];

  private pooling(): void{
    let myTimer = timer(0, 5000);
    this.subscription = myTimer.subscribe(sequency => {
      //var data = new Date();
      //console.log(data.getSeconds());
      // sequency é o numero de vezes que ja foi executado o timer
      this.getData();
    });
  }

  protected getData(): void{
    this.Service.statusBackend()
    .subscribe(
      data => {
        this.datas = data
      },
      erro => console.log(erro)
    );
  }

  isSuccess(status){
    return status ? 'success' : 'danger'
  }
  valueTag(status){
    return status ? 'CONECTADO' : 'DESCONECTADO'
  }
}