import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly API = environment.API;
  
  constructor( private http: HttpClient) { }
  
  statusBackend(){
    return this.http.get<any>(`${this.API}statusbackend`)
    .pipe(
      //tap(console.log)
    );
  }

  startStop(){
    return this.http.get<any>(`${this.API}/auto-test`)
    .pipe(
      //tap(console.log)
    );
  }

  status(){
    return this.http.get<any>(`${this.API}/jamesBond-status`)
    .pipe(
      //tap(console.log)
    );
  }
}