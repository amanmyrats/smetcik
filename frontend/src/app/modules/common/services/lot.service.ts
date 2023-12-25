import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Lot } from '../models/lot.model';
import { Paginated } from 'src/app/models/paginated.model';


@Injectable({
  providedIn: 'root'
})
export class LotService {
  public readonly endPoint: string = '/api/v1/lots/'

  constructor(
    private httpClient: HttpClient,
  ) { }

  getLots(): Observable<Paginated<Lot>> {
    return this.httpClient.get<Paginated<Lot>>(`${env.apiUrl}${this.endPoint}`);
  }

  getLot(id: string): Observable<Lot> {
    return this.httpClient.get<Lot>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  createLot(lot: Lot): Observable<Lot> {
    return this.httpClient.post<Lot>(`${env.apiUrl}${this.endPoint}`, lot);
  }

  updateLot(id: string, lot: Lot): Observable<Lot> {
    return this.httpClient.put<Lot>(`${env.apiUrl}${this.endPoint}${id}/`, lot);
  }

  deleteLot(id: string): Observable<any> {
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
