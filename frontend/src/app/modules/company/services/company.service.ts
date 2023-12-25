import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Paginated } from 'src/app/models/paginated.model';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  public readonly endPoint: string = '/api/v1/companies/'

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCompanies(queryParams?: string): Observable<Paginated<Company>> {
    return this.httpClient.get<Paginated<Company>>(`${env.apiUrl}${this.endPoint}?${queryParams}`);
  }

  getCompany(id: string): Observable<Company> {
    return this.httpClient.get<Company>(`${env.apiUrl}${this.endPoint}${id}`);
  }

  createCompany(company: Company): Observable<Company> {
    return this.httpClient.post<Company>(`${env.apiUrl}${this.endPoint}`, company);
  }

  updateCompany(id: string, company: Company): Observable<Company> {
    return this.httpClient.put<Company>(`${env.apiUrl}${this.endPoint}${id}`, company);
  }

  deleteCompany(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${env.apiUrl}${this.endPoint}${id}`);
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