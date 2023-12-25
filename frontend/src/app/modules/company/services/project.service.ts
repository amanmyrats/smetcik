import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Paginated } from 'src/app/models/paginated.model';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

public readonly endPoint: string = '/api/v1/projects/'

constructor(
  private httpClient: HttpClient,
) { }

getProjects(queryParams?: string): Observable<Paginated<Project>> {
  return this.httpClient.get<Paginated<Project>>(`${env.apiUrl}${this.endPoint}?${queryParams}`);
}

getProject(id: string): Observable<Project> {
  return this.httpClient.get<Project>(`${env.apiUrl}${this.endPoint}${id}`);
}

createProject(project: Project): Observable<Project> {
  return this.httpClient.post<Project>(`${env.apiUrl}${this.endPoint}`, project);
}

updateProject(id: string, project: Project): Observable<Project> {
  return this.httpClient.put<Project>(`${env.apiUrl}${this.endPoint}${id}`, project);
}

deleteProject(id: string): Observable<any> {
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