import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from 'src/app/models/role.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable()
export class RolesService {
  public readonly endpoint: string = '/roles';
  public readonly endpointUserRoles: string = '/userroles';

  constructor(private http: HttpClient, private _commonService: CommonService) {}

  public loadRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${environment.apiUrl}${this.endpoint}`);
  }

  public getUserRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${environment.apiUrl}${this.endpointUserRoles}`);
  }

}
