import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { BaseCompanyLot } from '../models/base-company-lot.model';
import { Paginated } from 'src/app/models/paginated.model';

@Injectable({
  providedIn: 'root'
})
export class BaseCompanyLotService {
  public readonly endPoint: string = '/api/v1/basecompanylots/'

  constructor(
    private httpClient: HttpClient,
  ) { }

  getBaseCompanyLots(queryParams?: string): Observable<Paginated<BaseCompanyLot>> {
    return this.httpClient.get<Paginated<BaseCompanyLot>>(`${env.apiUrl}${this.endPoint}?${queryParams}`);
  }

  getBaseCompanyLot(id: string): Observable<BaseCompanyLot> {
    return this.httpClient.get<BaseCompanyLot>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  createBaseCompanyLot(baseCompanyLot: BaseCompanyLot): Observable<BaseCompanyLot> {
    return this.httpClient.post<BaseCompanyLot>(`${env.apiUrl}${this.endPoint}`, baseCompanyLot);
  }

  updateBaseCompanyLot(id: string, baseCompanyLot: BaseCompanyLot): Observable<BaseCompanyLot> {
    return this.httpClient.put<BaseCompanyLot>(`${env.apiUrl}${this.endPoint}${id}/`, baseCompanyLot);
  }

  deleteBaseCompanyLot(id: string): Observable<any> {
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
