import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './services/security/auth.interceptor';
import { AuthenticationService } from './services/auth.service';
import { TokenStorage } from './services/token.storage';
import { CommonService } from './services/common.service';
import { HomeComponent } from './pages/home/home.component';
import { HeaderToolbarComponent } from './pages/header-toolbar/header-toolbar.component';
import { ConfirmationService, MessageService } from 'primeng/api';
// import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderToolbarComponent,
    // DefaultLayoutComponent,
  ],
  imports: [
    BrowserAnimationsModule, 
    BrowserModule,
    RouterModule,
    AppRoutingModule, 
    CommonModule, 
    HttpClientModule,
    ButtonModule, 
    MenuModule, 
    BreadcrumbModule, 
    ToggleButtonModule, 
    ToolbarModule, 
    AvatarModule, 
    ConfirmDialogModule, 
    ToastModule, 

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthenticationService,
    TokenStorage,
    CommonService, 
    ConfirmationService, 
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
