import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Query } from './query';
import { Filter } from './filter';
import { TestQuery } from './testQuery';
import { ResultAdvpl } from '../result-advpl/result-advpl.model';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  countOracle() {
    return this.http.get<any>(`${this.API}countOra`)
      .pipe(
        //tap(console.log)
      )
  }
  countMssql() {
    return this.http.get<any>(`${this.API}countMssql`)
      .pipe(
        //tap(console.log)
      )
  }
  countPost() {
    return this.http.get<any>(`${this.API}countPost`)
      .pipe(
        //tap(console.log)
      )
  }
  count() {
    return this.http.get<any>(`${this.API}count`)
      .pipe(
        //tap(console.log)
      )
  }

  list() {
    return this.http.get<Query[]>(`${this.API}list-query`)
      .pipe(
        //delay(100),
        tap(console.log)
      );
  }
  getPorjects() {
    return this.http.get<Query[]>(`${this.API}summary-projects`)
      .pipe(
        //delay(100),
        tap(console.log)
      );
  }
  getPorject(id) {
    return this.http.get<Query[]>(`${this.API}summary-project?idsquad=${id}`)
      .pipe(
        //delay(100),
        tap(console.log)
      );
  }

  getSources(id_squad) {
    return this.http.get<Query[]>(`${this.API}summary-sources?idsquad=${id_squad}`)
      .pipe(
        //delay(100),
        tap(console.log)
      );
  }

  getSource(id_source) {
    return this.http.get<Query[]>(`${this.API}summary-source?idsource=${id_source}`)
      .pipe(
        //delay(100),
        tap(console.log)
      );
  }

  getQueries(id_source) {
    return this.http.get<Query[]>(`${this.API}list-query?idsource=${id_source}`)
      .pipe(
        //delay(100),
        tap(console.log)
      );
  }

  getQuery(id_query) {
    return this.http.get<Query[]>(`${this.API}find-one-query?idquery=${id_query}`)
      .pipe(
        //delay(100),
        tap(console.log)
      );
  }
  getDBResult(id_query) {
    return this.http.get<Query[]>(`${this.API}db-result?idquery=${id_query}`)
      .pipe(
        //delay(100),
        tap(console.log)
      );
  }
  getAdvplResult(id_query) {
    return this.http.get<ResultAdvpl[]>(`${this.API}advpl-result?idquery=${id_query}`)
      .pipe(
        //delay(100)
        //tap(console.log)
      );
  }
  
  sendQuery(testQuery: TestQuery) {
    return this.http.get<Query[]>(`${this.API}testQuery`, {
      params: {
        'query': String(testQuery.query),
        'oracle': String(testQuery.sgbds.oracle),
        'mssql': String(testQuery.sgbds.mssql),
        'postgres': String(testQuery.sgbds.postgres),
        'advpl': String(testQuery.method.advpl),
        'database': String(testQuery.method.database)
      }
    })
      .pipe(
        tap(console.log)
      )

  }

  listPag(skip: number, limit: number, filter?: Filter) {
    let params
    if (filter) {
      params = {
        params: {
          'sgbd': String(filter.sgbd).toUpperCase() || '',
          'oraIsApproved': String(filter.oraIsApproved) || '',
          'mssqlIsApproved': String(filter.mssqlIsApproved) || '',
          'postIsApproved': String(filter.postIsApproved) || '',
          'oraMessage': String(filter.oraMessage) || '',
          'mssqlMessage': String(filter.mssqlMessage) || '',
          'postMessage': String(filter.postMessage) || '',
          'func': String(filter.func).toUpperCase() || '',
          'query': String(filter.query).toUpperCase() || ''
        }
      }
    }
    return this.http.get<Query[]>(`${this.API}pagination-query/${String(skip)}/${String(limit)}`, { params })
      .pipe(
        //delay(100),
        tap(console.log)
      );
  }
  
}