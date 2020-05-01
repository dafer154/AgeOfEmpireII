import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Civilizations } from './models/civilizations.model';
import { Units } from './models/units.model';
import { Structures } from './models/structures.model'
import { Technologies } from './models/technologies.model'
import { environment } from '../environments/environment'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgeDataService {

  //apiAge = 'https://age-of-empires-2-api.herokuapp.com/api/v1';

  constructor(private _http: HttpClient) { }


  getCivilizations(): Observable<any> {
    return this._http.get(`${environment.v2.api_url}/civilizations`, {
      headers: {
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Origin' : 'localhost:4200'
      }
    }).pipe(
      map(res => {
        return res;
      }, err => {
        return err;
      })
    );
  }

  // getUserByEmail(email: any): Observable<any> {
  //   return this.http.get(Users.VALIDATEEMAIL + email, { observe: 'response' }).pipe(
  //     map(res => {
  //       return res;
  //     }, err => {
  //       return err;
  //     })
  //   );
  // }

  // getUnits() {
  //   return this._http.get<Units>(`${this.apiAge}/units`,
  //     {
  //       headers: {
  //         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  //       }
  //     }).toPromise();
  // }

  // getTechnologies() {
  //   return this._http.get<Technologies>(`${this.apiAge}/technologies`,
  //   {
  //     headers: {
  //       'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  //     }
  //   }).toPromise();
  // }

  // getStructures() {
  //   return this._http.get<Structures>(`${this.apiAge}/structures`,
  //   {
  //     headers: {
  //       'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  //     }
  //   }).toPromise();
  // }



}
