import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VerificationToken } from 'src/app/models/token.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class TokenService {
  public readonly endpoint: string = '/auth';

  constructor(private http: HttpClient) {}

  public verifyToken(token: string): Observable<VerificationToken> {
    return this.http.get<VerificationToken>(`${environment.apiUrl}${this.endpoint}/verify-token/${token}`);
  }

  public resendActivationLink(token: string): any {
    return this.http.post<VerificationToken>(`${environment.apiUrl}${this.endpoint}/resend-activation-link`, token);
  }

  public setPassword(token: string, password: string): any {
    return this.http.post<VerificationToken>(`${environment.apiUrl}${this.endpoint}/set-password`, {
      token,
      password,
    });
  }
}
