import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Resource } from '../models/resource.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  public readonly endPoint = '/api/v1/resources/'

  constructor(
    private httpClient: HttpClient
  ) { }

  getResources(queryParams?: string): Observable<Resource[]> {
    return this.httpClient.get<Resource[]>(`${env.apiUrl}${this.endPoint}?${queryParams}`);
  }

  getResource(id: string): Observable<Resource> {
    return this.httpClient.get<Resource>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  createResource(resource: Resource): Observable<Resource> {
    return this.httpClient.post<Resource>(`${env.apiUrl}${this.endPoint}`, resource);
  }

  updateResource(id: string, resource: Resource): Observable<Resource> {
    return this.httpClient.put<Resource>(`${env.apiUrl}${this.endPoint}${id}/`, resource);
  }

  deleteResource(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${env.apiUrl}${this.endPoint}${id}/`);
  }
}
