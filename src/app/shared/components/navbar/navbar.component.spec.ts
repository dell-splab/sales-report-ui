import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigComponent } from 'src/app/config/config.component';
import { DiffComponent } from 'src/app/diff/diff.component';
import { HomeComponent } from 'src/app/home/home.component';
import { ReportsComponent } from 'src/app/reports/reports.component';
import { CodeReceiverComponent } from '../code-receiver/code-receiver.component';
import { UnauthorizedComponent } from '../unauthorized/unauthorized.component';

import { NavbarComponent } from './navbar.component';

export const fakeRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent /*, canActivate: [LoginGuard] */ },
  {
    path: 'config',
    component: ConfigComponent /*, canActivate: [LoginGuard] */,
  },
  { path: 'diff', component: DiffComponent /*, canActivate: [LoginGuard] */ },
  {
    path: 'reports',
    component: ReportsComponent /*, canActivate: [LoginGuard] */,
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent /*, canActivate: [LoginGuard] */,
  },
  {
    path: 'logout',
    component: UnauthorizedComponent /*, canActivate: [LoginGuard] */,
  },
  {
    path: 'code',
    component: CodeReceiverComponent /*canActivate: [LoginGuard]*/,
  },
];

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [
        BrowserAnimationsModule,
        BrowserDynamicTestingModule,
        RouterTestingModule.withRoutes(fakeRoutes),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    component.items = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should changeSelected Item', () => {
    expect(component.changeSelectedItem('diff')).toBe(void 0);
  });

  it('should changeColapsed', () => {
    expect(component.changeCollapsed()).toBe(void 0);
  });
});
