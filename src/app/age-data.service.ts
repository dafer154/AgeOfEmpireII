import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Civilizations } from './models/civilizations.model';
import { Units } from './models/units.model';
import { Structures } from './models/structures.model'
import { Technologies } from './models/technologies.model'

@Injectable({
  providedIn: 'root'
})
export class AgeDataService {

  constructor(private _http: HttpClient) { }

  apiAge : 'https://age-of-empires-2-api.herokuapp.com/api/v1';

  getCivilizations() {
    return this._http.get<Civilizations>(`${this.apiAge}/civilizations`,
    {
      headers: {
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }
    }).toPromise();
  }

  getUnits() {
    return this._http.get<Units>(`${this.apiAge}/units`,
    {
      headers: {
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }
    }).toPromise();
  }

  getTechnologies() {
    return this._http.get<Technologies>(`${this.apiAge}/technologies`,
    {
      headers: {
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }
    }).toPromise();
  }
  
  getStructures() {
    return this._http.get<Structures>(`${this.apiAge}/structures`,
    {
      headers: {
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }
    }).toPromise();
  }



}
