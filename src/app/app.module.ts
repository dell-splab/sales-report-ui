import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { ThemeService } from './styles/theme/theme.service';
import { ReportsComponent } from './reports/reports.component';
import { ViewListComponent } from './reports/view-list/view-list.component';
import { LeadsComponent } from './leads/leads.component';
import { ClientComponent } from './client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { SalesComponent } from './sales/sales.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReportsComponent,
    ViewListComponent,
    LeadsComponent,
    SalesComponent,
    ClientComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
