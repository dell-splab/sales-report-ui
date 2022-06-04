import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from './components/icon/icon.component';
import { DellBtnComponent } from './components/dell-btn/dell-btn.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavItemComponent } from './components/navbar/nav-item/nav-item.component';
import { DellIconComponent } from './components/dell-icon/dell-icon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    IconComponent,
    DellBtnComponent,
    SpinnerComponent,
    HeaderComponent,
    NavbarComponent,
    NavItemComponent,
    DellIconComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    DellBtnComponent,
    SpinnerComponent,
    IconComponent,
    DellIconComponent,
    PaginationComponent
  ]
})
export class SharedModule {}
