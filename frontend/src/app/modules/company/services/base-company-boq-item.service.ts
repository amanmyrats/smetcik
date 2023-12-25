import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Paginated } from 'src/app/models/paginated.model';
import { BaseCompanyBoqItem } from '../models/base-company-boq-item.model';

@Injectable({
  providedIn: 'root'
})
export class BaseCompanyBoqItemService {

  public readonly endPoint: string = '/api/v1/basecompanyboqitems/'

  constructor(
    private httpClient: HttpClient
  ) { }
  
  getBaseCompanyBoqItems(queryParams?: string): Observable<Paginated<BaseCompanyBoqItem>> {
    return this.httpClient.get<Paginated<BaseCompanyBoqItem>>(`${env.apiUrl}${this.endPoint}?${queryParams}`);
  }

  getBaseCompanyBoqItem(id: string): Observable<BaseCompanyBoqItem> {
    return this.httpClient.get<BaseCompanyBoqItem>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  createBaseCompanyBoqItem(baseCompanyBoqItem: BaseCompanyBoqItem): Observable<BaseCompanyBoqItem> {
    return this.httpClient.post(`${env.apiUrl}${this.endPoint}`, baseCompanyBoqItem);
  }

  updateBaseCompanyBoqItem(id: string, baseCompanyBoqItem: BaseCompanyBoqItem): Observable<BaseCompanyBoqItem> {
    return this.httpClient.put<BaseCompanyBoqItem>(`${env.apiUrl}${this.endPoint}${id}/`, baseCompanyBoqItem);
  }

  deleteBaseCompanyBoqItem(id: string): Observable<any> {
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
