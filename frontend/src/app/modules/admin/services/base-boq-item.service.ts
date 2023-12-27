import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Paginated } from 'src/app/models/paginated.model';
import { BaseBoqItem } from '../models/base-boq-item.model';

@Injectable({
  providedIn: 'root'
})
export class BaseBoqItemService {

  public readonly endPoint: string = '/api/v1/baseboqitems/'

  constructor(
    private httpClient: HttpClient
  ) { }
  
  getBaseBoqItems(queryParams?: string): Observable<Paginated<BaseBoqItem>> {
    return this.httpClient.get<Paginated<BaseBoqItem>>(`${env.apiUrl}${this.endPoint}${queryParams}`);
  }

  getBaseBoqItem(id: string): Observable<BaseBoqItem> {
    return this.httpClient.get<BaseBoqItem>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  createBaseBoqItem(baseBoqItem: BaseBoqItem): Observable<BaseBoqItem> {
    return this.httpClient.post(`${env.apiUrl}${this.endPoint}`, baseBoqItem);
  }

  updateBaseBoqItem(id: string, baseBoqItem: BaseBoqItem): Observable<BaseBoqItem> {
    return this.httpClient.put<BaseBoqItem>(`${env.apiUrl}${this.endPoint}${id}/`, baseBoqItem);
  }

  deleteBaseBoqItem(id: string): Observable<any> {
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
