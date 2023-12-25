import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Paginated } from 'src/app/models/paginated.model';
import { BaseCountry } from '../models/base-country.model';

@Injectable({
  providedIn: 'root'
})
export class BaseCountryService {
  public readonly endPoint: string = '/api/v1/basecountries/'

  constructor(
    private httpClient: HttpClient,
  ) { }

  getBaseCountries(queryParams?: string): Observable<Paginated<BaseCountry>> {
    return this.httpClient.get<Paginated<BaseCountry>>(`${env.apiUrl}${this.endPoint}?${queryParams}`);
  }

  getBaseCountry(id: string): Observable<BaseCountry> {
    return this.httpClient.get<BaseCountry>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  createBaseCountry(baseCountry: BaseCountry): Observable<BaseCountry> {
    return this.httpClient.post<BaseCountry>(`${env.apiUrl}${this.endPoint}`, baseCountry);
  }

  updateBaseCountry(id: string, baseCountry: BaseCountry): Observable<BaseCountry> {
    return this.httpClient.put<BaseCountry>(`${env.apiUrl}${this.endPoint}${id}/`, baseCountry);
  }

  deleteBaseCountry(id: string): Observable<any> {
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