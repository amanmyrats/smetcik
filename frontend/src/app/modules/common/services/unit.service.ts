import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Unit } from '../models/unit.model';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  public readonly endPoint: string = '/api/v1/units/'
  private units: Unit[];

  constructor(
    private httpClient: HttpClient,
  ) { }

  getUnits(): Observable<Unit[]> {
    return this.httpClient.get<Unit[]>(`${env.apiUrl}${this.endPoint}`);
  }

  getUnit(id: string): Observable<Unit> {
    return this.httpClient.get<Unit>(`${env.apiUrl}${this.endPoint}${id}`);
  }

  createUnit(unit: Unit): Observable<Unit> {
    return this.httpClient.post<Unit>(`${env.apiUrl}${this.endPoint}`, unit);
  }

  updateUnit(id: string, unit: Unit): Observable<Unit> {
    return this.httpClient.put<Unit>(`${env.apiUrl}${this.endPoint}${id}`, unit);
  }

  deleteUnit(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${env.apiUrl}${this.endPoint}${id}`);
  }

  getCurrentUnits(): Unit[]{
      return this.units;
  }

  setCurrentUnits(units: Unit[]): void {
    this.units = units;
  }
}
