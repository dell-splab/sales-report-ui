import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { LeadsComponent } from './leads/leads.component';
import { SalesComponent } from './sales/sales.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'clients',
    component: ClientComponent,
  },
  {
    path: 'leads',
    component: LeadsComponent,
  },
  {
    path: 'sales',
    component: SalesComponent,
  },
  {
    path: 'reports',
    component: ReportsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
