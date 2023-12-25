import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Paginated } from 'src/app/models/paginated.model';
import { BaseUnit } from '../models/base-unit.model';

@Injectable({
  providedIn: 'root'
})
export class BaseUnitService {

  public readonly endPoint: string = '/api/v1/baseunits/'
  private baseUnits: BaseUnit[];

  constructor(
    private httpClient: HttpClient,
  ) { }

  getBaseUnits(queryParams?: string): Observable<Paginated<BaseUnit>> {
    return this.httpClient.get<Paginated<BaseUnit>>(`${env.apiUrl}${this.endPoint}`);
  }

  getBaseUnit(id: string): Observable<BaseUnit> {
    return this.httpClient.get<BaseUnit>(`${env.apiUrl}${this.endPoint}${id}`);
  }

  createBaseUnit(baseUnit: BaseUnit): Observable<BaseUnit> {
    return this.httpClient.post<BaseUnit>(`${env.apiUrl}${this.endPoint}`, baseUnit);
  }

  updateBaseUnit(id: string, baseUnit: BaseUnit): Observable<BaseUnit> {
    return this.httpClient.put<BaseUnit>(`${env.apiUrl}${this.endPoint}${id}`, baseUnit);
  }

  deleteBaseUnit(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${env.apiUrl}${this.endPoint}${id}`);
  }

  getCurrentBaseUnits(): BaseUnit[]{
      return this.baseUnits;
  }

  setCurrentBaseUnits(baseUnits: BaseUnit[]): void {
    this.baseUnits = baseUnits;
  }
  
  exportToExcel(queryParams?: string): Observable<Blob> {
    return this.httpClient.get(`${env.apiUrl}${this.endPoint}exporttoexcel/`, {
      responseType: 'blob'
    });
  }

  importFromExcel(formData: FormData): Observable<any> {
    return this.httpClient.post(`${env.apiUrl}${this.endPoint}importfromexcel/`, formData);
  }
}
