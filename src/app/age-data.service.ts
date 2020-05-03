import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgeDataService {

  constructor(private _http: HttpClient) { }


  getCivilizations(): Observable<any> {
    return this._http.get(`${environment.v2.apiUrl}/civilizations`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      }
    }).pipe(
      map(res => {
        return res;
      }, err => {
        return err;
      })
    );
  }


  getUnits(): Observable<any> {
    return this._http.get(`${environment.v2.apiUrl}/units`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      }
    }).pipe(
      map(res => {
        return res;
      }, err => {
        return err;
      })
    );
  }

  getTechnologies(): Observable<any> {
    return this._http.get(`${environment.v2.apiUrl}/technologies`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      }
    }).pipe(
      map(res => {
        return res;
      }, err => {
        return err;
      })
    );
  }

  getStructures(): Observable<any> {
    return this._http.get(`${environment.v2.apiUrl}/structures`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      }
    }).pipe(
      map(res => {
        return res;
      }, err => {
        return err;
      })
    );
  }



}
