import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SmetaDashboardComponent } from './modules/smeta/smeta-dashboard/smeta-dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'smeta',
    pathMatch: 'full'
  },

  {
    path: 'smeta',
    loadChildren: () => import('./modules/smeta/smeta.module').then(m => m.SmetaModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
