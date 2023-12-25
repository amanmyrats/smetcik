import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { BaseResource } from '../models/base-resource.model';
import { Paginated } from 'src/app/models/paginated.model';

@Injectable({
  providedIn: 'root'
})
export class BaseResourceService {

  public readonly endPoint = '/api/v1/baseresources/'

  constructor(
    private httpClient: HttpClient
  ) { }

  getBaseResources(queryParams?: string): Observable<Paginated<BaseResource>> {
    return this.httpClient.get<Paginated<BaseResource>>(`${env.apiUrl}${this.endPoint}?${queryParams}`);
  }

  getBaseResource(id: string): Observable<BaseResource> {
    return this.httpClient.get<BaseResource>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  createBaseResource(baseResource: BaseResource): Observable<BaseResource> {
    return this.httpClient.post<BaseResource>(`${env.apiUrl}${this.endPoint}`, baseResource);
  }

  updateBaseResource(id: string, baseResource: BaseResource): Observable<BaseResource> {
    return this.httpClient.put<BaseResource>(`${env.apiUrl}${this.endPoint}${id}/`, baseResource);
  }

  deleteBaseResource(id: string): Observable<any> {
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
