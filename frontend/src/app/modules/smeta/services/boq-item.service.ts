import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { BoqItem } from '../models/boq-item.model';
import { Paginated } from 'src/app/models/paginated.model';


@Injectable({
  providedIn: 'root'
})
export class BoqItemService {

  public readonly endPoint: string = '/api/v1/boqitems/'

  constructor(
    private httpClient: HttpClient
  ) { }
  
  getBoqItems(queryParams?: string): Observable<Paginated<BoqItem>> {
    if (queryParams){
      return this.httpClient.get<Paginated<BoqItem>>(`${env.apiUrl}${this.endPoint}${queryParams}`);
    } else {
      return this.httpClient.get<Paginated<BoqItem>>(`${env.apiUrl}${this.endPoint}`);
    }
  }

  getBoqItem(id: string): Observable<BoqItem> {
    return this.httpClient.get<BoqItem>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  createBoqItem(boqItem: BoqItem): Observable<BoqItem> {
    return this.httpClient.post(`${env.apiUrl}${this.endPoint}`, boqItem);
  }

  updateBoqItem(id: string, boqItem: BoqItem): Observable<BoqItem> {
    return this.httpClient.put<BoqItem>(`${env.apiUrl}${this.endPoint}${id}/`, boqItem);
  }

  deleteBoqItem(id: string): Observable<any> {
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
