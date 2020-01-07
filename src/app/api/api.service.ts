import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {headers, URL} from './config';

@Injectable({
  providedIn: 'root'
})


export class APIService {
  constructor(private http: HttpClient) {}

  public getListOfCompetitions() {
    return this.http.get<any>(`${URL}/v2/competitions/`, {headers});
  }

  public getItemOfCompetitions(id: number) {
    return this.http.get<any>(`${URL}/v2/competitions/${id}/matches/`, {headers});
  }
}


