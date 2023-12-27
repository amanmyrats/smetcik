import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { BaseCompanyResource } from '../models/base-company-resource.model';
import { Paginated } from 'src/app/models/paginated.model';

@Injectable({
  providedIn: 'root'
})
export class BaseCompanyResourceService {

  public readonly endPoint = '/api/v1/basecompanyresources/'

  constructor(
    private httpClient: HttpClient
  ) { }

  getBaseCompanyResources(queryParams?: string): Observable<Paginated<BaseCompanyResource>> {
    return this.httpClient.get<Paginated<BaseCompanyResource>>(`${env.apiUrl}${this.endPoint}${queryParams}`);
  }

  getBaseCompanyResource(id: string): Observable<BaseCompanyResource> {
    return this.httpClient.get<BaseCompanyResource>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  createBaseCompanyResource(baseCompanyResource: BaseCompanyResource): Observable<BaseCompanyResource> {
    return this.httpClient.post<BaseCompanyResource>(`${env.apiUrl}${this.endPoint}`, baseCompanyResource);
  }

  updateBaseCompanyResource(id: string, baseCompanyResource: BaseCompanyResource): Observable<BaseCompanyResource> {
    return this.httpClient.put<BaseCompanyResource>(`${env.apiUrl}${this.endPoint}${id}/`, baseCompanyResource);
  }

  deleteBaseCompanyResource(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  exportToExcel(queryParams?: string): Observable<Blob>{
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/vnd.ms-excel',
    //   'Accept': 'application/vnd.ms-excel'
    // });

    return this.httpClient.get(`${env.apiUrl}${this.endPoint}exporttoexcel/`, {

      responseType: 'blob'
    });
  }

  importFromExcel(data: FormData): Observable<any> {
    return this.httpClient.post(`${env.apiUrl}${this.endPoint}importfromexcel/`, data)
  }
}
