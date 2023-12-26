import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Paginated } from 'src/app/models/paginated.model';
import { Country } from '../../common/models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  public readonly endPoint: string = '/api/v1/countries/'

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCountries(queryParams?: string): Observable<Paginated<Country>> {
    if (queryParams){
    return this.httpClient.get<Paginated<Country>>(`${env.apiUrl}${this.endPoint}${queryParams}`);
    } else {
      return this.httpClient.get<Paginated<Country>>(`${env.apiUrl}${this.endPoint}`);
    }
  }

  getCountry(id: string): Observable<Country> {
    return this.httpClient.get<Country>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  createCountry(country: Country): Observable<Country> {
    return this.httpClient.post<Country>(`${env.apiUrl}${this.endPoint}`, country);
  }

  updateCountry(id: string, country: Country): Observable<Country> {
    return this.httpClient.put<Country>(`${env.apiUrl}${this.endPoint}${id}/`, country);
  }

  deleteCountry(id: string): Observable<any> {
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