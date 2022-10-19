import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyseTextService {

  constructor(private http: HttpClient) { }

  getScoreandData(parametros: any): Observable<any>{
    const URL = 'http://localhost:8000/score/'
    return this.http.post(URL, parametros)
  }
}
