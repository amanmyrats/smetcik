import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Paginated } from 'src/app/models/paginated.model';
import { BaseCompanyUnit } from '../models/base-company-unit.model';

@Injectable({
  providedIn: 'root'
})
export class BaseCompanyUnitService {

  public readonly endPoint: string = '/api/v1/basecompanyunits/'
  private baseCompanyUnits: BaseCompanyUnit[];

  constructor(
    private httpClient: HttpClient,
  ) { }

  getBaseCompanyUnits(queryParams?: string): Observable<Paginated<BaseCompanyUnit>> {
    return this.httpClient.get<Paginated<BaseCompanyUnit>>(`${env.apiUrl}${this.endPoint}`);
  }

  getBaseCompanyUnit(id: string): Observable<BaseCompanyUnit> {
    return this.httpClient.get<BaseCompanyUnit>(`${env.apiUrl}${this.endPoint}${id}`);
  }

  createBaseCompanyUnit(baseCompanyUnit: BaseCompanyUnit): Observable<BaseCompanyUnit> {
    return this.httpClient.post<BaseCompanyUnit>(`${env.apiUrl}${this.endPoint}`, baseCompanyUnit);
  }

  updateBaseCompanyUnit(id: string, baseCompanyUnit: BaseCompanyUnit): Observable<BaseCompanyUnit> {
    return this.httpClient.put<BaseCompanyUnit>(`${env.apiUrl}${this.endPoint}${id}`, baseCompanyUnit);
  }

  deleteBaseCompanyUnit(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${env.apiUrl}${this.endPoint}${id}`);
  }

  getCurrentBaseCompanyUnits(): BaseCompanyUnit[]{
      return this.baseCompanyUnits;
  }

  setCurrentBaseCompanyUnits(baseCompanyUnits: BaseCompanyUnit[]): void {
    this.baseCompanyUnits = baseCompanyUnits;
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