import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boq } from '../models/boq.model';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoqService {

  public readonly endPoint: string = '/api/v1/boqs/'

  constructor(
    private httpClient: HttpClient
  ) { }

  getBoqs(): Observable<Boq[]> {
    return this.httpClient.get<Boq[]>(`${env.apiUrl}${this.endPoint}`);
  }

  createBoq(boq: Boq): Observable<Boq> {
    return this.httpClient.post<Boq>(`${env.apiUrl}${this.endPoint}`, boq);
  }
}
