import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { ThemeService } from './styles/theme/theme.service';
import { ReportsComponent } from './reports/reports.component';
import { ViewListComponent } from './reports/view-list/view-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReportsComponent,
    ViewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
