import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public readonly endPoint: string = '/api/v1/projects/'

  constructor(
    private httpClient: HttpClient
  ) { }

  getProjects(queryParams?: string): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${env.apiUrl}${this.endPoint}`);
  }
}
