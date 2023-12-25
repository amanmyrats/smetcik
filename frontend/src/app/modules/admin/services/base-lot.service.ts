import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { BaseLot } from '../models/base-lot.model';
import { Paginated } from 'src/app/models/paginated.model';

@Injectable({
  providedIn: 'root'
})
export class BaseLotService {
  public readonly endPoint: string = '/api/v1/baselots/'

  constructor(
    private httpClient: HttpClient,
  ) { }

  getBaseLots(queryParams?: string): Observable<Paginated<BaseLot>> {
    return this.httpClient.get<Paginated<BaseLot>>(`${env.apiUrl}${this.endPoint}?${queryParams}`);
  }

  getBaseLot(id: string): Observable<BaseLot> {
    return this.httpClient.get<BaseLot>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  createBaseLot(baseLot: BaseLot): Observable<BaseLot> {
    return this.httpClient.post<BaseLot>(`${env.apiUrl}${this.endPoint}`, baseLot);
  }

  updateBaseLot(id: string, baseLot: BaseLot): Observable<BaseLot> {
    return this.httpClient.put<BaseLot>(`${env.apiUrl}${this.endPoint}${id}/`, baseLot);
  }

  deleteBaseLot(id: string): Observable<any> {
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
