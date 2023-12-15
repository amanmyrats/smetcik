import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '404',
    loadComponent: () => import('./pages/error/404.component'),
    data: {
      title: 'Page 404',
    },
  },
  {
    path: '500',
    loadComponent: () => import('./pages/error/500.component'),
    data: {
      title: 'Page 500',
    },
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component'),
    data: {
      title: 'Login Page',
    },
  },
    // {
    //   path: 'activate/:token',
    //   component: ActivateAccountComponent,
    //   data: {
    //     title: 'Activation Page',
    //   },
    // },

  {
    path: '',
    // loadComponent: () => import('./containers/default-layout/default-layout.component'),
    data: {
      title: 'Home',
      breadcrumb: 'Home'
    },
    children: [
      {
        path: 'home',
        // canActivate: [() => checkLoggedIn()],
        data: {
          title: 'Home',
          breadcrumb: ''
        },
        component: HomeComponent,
      },

      // Tender
      {
        path: 'tender',
        // canActivate: [() => checkLoggedIn()],
        data: {
          title: 'Tender',
          breadcrumb: 'Tender'
        },
        loadChildren: () => import('./modules/tender/tender.module').then(m => m.TenderModule)
      },

      // BOQ
      {
        path: 'smeta',
        // canActivate: [() => checkLoggedIn()],
        data: {
          title: 'Smeta',
          breadcrumb: 'Smeta'
        },
        loadChildren: () => import('./modules/smeta/smeta.module').then(m => m.SmetaModule)
      },

      // Payment
      {
        path: 'payment',
        // canActivate: [() => checkLoggedIn()],
        data: {
          title: 'Payment',
          breadcrumb: 'Payment'
        },
        loadChildren: () => import('./modules/payment/payment.module').then(m => m.PaymentModule)
      },

    ],
  },

  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
