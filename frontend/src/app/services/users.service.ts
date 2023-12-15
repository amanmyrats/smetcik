import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import { LazyLoadEvent } from 'primeng/api';
import { CommonService } from './common.service';
import { Role } from 'src/app/models/role.model';

@Injectable()
export class UsersService {
  public readonly endpoint: string = '/mkusers';
  public readonly updateStatus: string = this.endpoint + '/status';

  constructor(private http: HttpClient, private _commonService: CommonService) {}

  public loadUsers(event: LazyLoadEvent): Observable<User[]> {
    const requestParams: string = this._commonService.buildPaginationParams(event);
    return this.http.get<User[]>(`${environment.apiUrl}${this.endpoint}${requestParams}`);
  }

  public searchInternalUser(query: string): Observable<any> {
    return this.http.get<User[]>(`${environment.apiUrl}${this.endpoint}/internal?name=${query}`);
  }

  public changeUserStatus(id: number, status: boolean) {
    return this.http.post(`${environment.apiUrl}${this.updateStatus}`, {
      id,
      active: status,
    });
  }

  public updateUser(user: any, roles: Role[], id: number) {
    user.roles = roles;
    return this.http.put(`${environment.apiUrl}${this.endpoint}/${id}`, user);
  }

  public createNewUser(user: any, roles: Role[]) {
    user.roles = roles;
    return this.http.post(`${environment.apiUrl}${this.endpoint}`, user);
  }

  public deleteUser(id: number) {
    return this.http.delete(`${environment.apiUrl}${this.endpoint}/${id}`);
  }
}
