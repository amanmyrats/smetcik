import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TokenStorage } from './token.storage';

@Injectable()
export class AuthenticationService {
  public readonly endpoint: string = '/auth';

  constructor(private http: HttpClient, private _storage: TokenStorage) {}

  public login(username: string, password: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}${this.endpoint}/login`, {
      username,
      password,
    });
  }

  public loginSso(): Observable<any> {
    return this.http.get(`${environment.apiUrl}${this.endpoint}/sso`);
  }

  public saveLoginData(data: any) {
    this._storage.save(data.token, data.currentUser);
  }

  public getCurrentUser() {
    return this._storage.getCurrentUser();
  }

  public isLoggedIn(): boolean {
    const token = this._storage.getToken();
    // return token && token.length > 0;
    return true;
  }

  public logout(): void {
    this._storage.clear();
  }
}
