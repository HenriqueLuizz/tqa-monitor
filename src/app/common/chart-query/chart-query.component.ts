import { Component, OnInit } from '@angular/core';
import { QueryService } from '../services/query.service';
import { Observable, Subscription, timer } from 'rxjs';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'bqa-chart-query',
  templateUrl: './chart-query.component.html',
  styleUrls: ['./chart-query.component.css']
})
export class ChartQueryComponent implements OnInit {

  valueOracle: number;
  valueMssql: number;
  valuePost: number;
  valueCount: number;

  chartOracle : Array<Object>;
  chartMssql : Array<Object>;
  chartPost : Array<Object>;

  protected subscription: Subscription;

  constructor(private service: QueryService) {
    this.pooling();
  }

  ngOnInit() { }

  public setValues(value){
    if(!this.valueCount){
      //console.log('this.valueCount - value - if')
      //console.log(this.valueCount - value)
      return [{ category: 'Ok', value: 0 }, { category: 'Falha', value: 0 }]
    }else{
      //console.log('this.valueCount - value - else')
      //console.log(this.valueCount - value)
      return [{ category: 'Ok', value: value }, { category: 'Falha', value: (this.valueCount - value) }]
    }
  }


  //---------------------------------------------

  ngOnDestroy(){
    this.subscription.unsubscribe();

  }

  private pooling(): void{
    let myTimer = timer(0, 15000);
      this.subscription = myTimer.subscribe(sequency => {
            //var data = new Date();
            //console.log(data.getSeconds());
            // sequency é o numero de vezes que ja foi executado o timer
            this.getData();
        });
  }

  protected getData(): void{
    this.service.count()
    .subscribe(
      dados => {
        //console.log('getData -valueCount')
        //console.log(dados.value)
        this.valueCount = dados.value;
      });

    this.service.countOracle()
    .subscribe(
      data => {
        if (this.dataIsModified(this.valueOracle, data.value)){
          //console.log('getData -valueOracle')
          //console.log(data.value)
          this.valueOracle = data.value;
          this.chartOracle = this.setValues(this.valueOracle);
        }
      },
      erro => console.log(erro)
    );
    this.service.countMssql()
    .subscribe(
      data => {
        if (this.dataIsModified(this.valueMssql, data.value)){
          //console.log('getData -valueMssql')
          //console.log(data.value)
          this.valueMssql = data.value;
          this.chartMssql = this.setValues(this.valueMssql);
        }
      },
      erro => console.log(erro)
    );
    this.service.countPost()
    .subscribe(
      data => {
        if (this.dataIsModified(this.valuePost, data.value)){
          //console.log('getData -valuePost')
          //console.log(data.value)
          this.valuePost = data.value;
          this.chartPost = this.setValues(this.valuePost);
        }
      },
      erro => console.log(erro)
    );

    //this.service.countOracle()
    //.subscribe(dados => this.valueOracle = dados.value);
    //this.service.countMssql()
    //.subscribe(dados => this.valueMssql = dados.value);
    //this.service.countPost()
    //.subscribe(dados => this.valuePost = dados.value);
    
  }

  protected dataIsModified(dataOld: any, dataNew: any): boolean{

    let md5Old = Md5.hashStr(String(dataOld));
    let md5New = Md5.hashStr(String(dataNew));

    if (md5Old == md5New){
      return false;
    }else{
      return true;
    }
  }

  /*
   protected getCircularSeries(data): Array<any> {
     let dataPie = [];
     for (let item of this.valueOracle) {
       dataPie.push({category: item.serie, value: item.value});
      }
      return [{data: dataPie}];
    }
  */
    



}
