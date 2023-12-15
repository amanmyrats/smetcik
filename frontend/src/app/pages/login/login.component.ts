import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/api';
import { TokenStorage } from 'src/app/services/token.storage';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ButtonModule,
    ReactiveFormsModule,
  ],
  providers: [AuthenticationService, TokenStorage, MessageService],
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent implements OnInit, OnDestroy {
  public body: any;
  public loginForm: FormGroup;

  public constructor(
    private router: Router,
    private fb: FormBuilder,
    private _authService: AuthenticationService,
    private _toast: MessageService
  ) {
    this.body = document.getElementsByTagName('body')[0];
    this._authService.logout();
  }

  public onFormSubmit() {
    if (this.loginForm.valid) {
      const value = this.loginForm.value;

      this._authService.login(value.username, value.password).subscribe(
        (data) => {
          this._authService.saveLoginData(data);

          // Redirect to dashboard
          this.router.navigate(['/home']);
        },
        (error) => {
          this.handleError(error);
        }
      );
    }
  }

  public onSsoLogin() {
    this._authService.loginSso().subscribe(
      (data) => {
        this._authService.saveLoginData(data);

        // Redirect to dashboard
        this.router.navigate(['home']);
      },
      (error) => {
        this.handleError(error);
      }
    );
  }

  public handleError(error: any) {
    let message = "Une erreur a eu lieu lors de l'authentification";

    switch (error.status) {
      case 401:
        // Unauthorized : When the login/password are not correct
        message = 'Le login ou le mot de passe est incorrect';
        break;

      case 403:
        // Forbidden : when the user is disabled
        message = 'Votre compte est désactivé';
        break;
    }
    this._toast.add({severity:'error', summary:'Oops...', detail: message});
  }

  public ngOnInit(): void {
    this.body.classList.add('login-page');
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public ngOnDestroy(): void {
    this.body.classList.remove('login-page');
  }
}
