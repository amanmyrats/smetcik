import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Paginated } from 'src/app/models/paginated.model';
import { BaseCompanyCountry } from '../models/base-company-country.model';

@Injectable({
  providedIn: 'root'
})
export class BaseCompanyCountryService {
  public readonly endPoint: string = '/api/v1/basecompanycountries/'

  constructor(
    private httpClient: HttpClient,
  ) { }

  getBaseCompanyCountries(queryParams?: string): Observable<Paginated<BaseCompanyCountry>> {
    return this.httpClient.get<Paginated<BaseCompanyCountry>>(`${env.apiUrl}${this.endPoint}?${queryParams}`);
  }

  getBaseCompanyCountry(id: string): Observable<BaseCompanyCountry> {
    return this.httpClient.get<BaseCompanyCountry>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  createBaseCompanyCountry(baseCompanyCountry: BaseCompanyCountry): Observable<BaseCompanyCountry> {
    return this.httpClient.post<BaseCompanyCountry>(`${env.apiUrl}${this.endPoint}`, baseCompanyCountry);
  }

  updateBaseCompanyCountry(id: string, baseCompanyCountry: BaseCompanyCountry): Observable<BaseCompanyCountry> {
    return this.httpClient.put<BaseCompanyCountry>(`${env.apiUrl}${this.endPoint}${id}/`, baseCompanyCountry);
  }

  deleteBaseCompanyCountry(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${env.apiUrl}${this.endPoint}${id}/`);
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