// @ts-nocheck
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Injectable, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { ThemeService } from 'src/app/styles/theme/theme.service';
import { LoginService } from '../../services/login.service';
import { fakeLoginService } from '../../services/login.service.spec';

@Injectable()
class MockThemeService {
  setSavedTheme = () => {
    // This is intentional
  };
  getActiveTheme = () => {
    // This is intentional
  };
  isDarkTheme = () => {
    // This is intentional
  };
  setLightTheme = () => {
    // This is intentional
  };
  setDarkTheme = () => {
    // This is intentional
  };
}


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    const themeService = new MockThemeService();

    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [HeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        { provide: ThemeService, useValue: themeService },
        { provide: LoginService, useValue: fakeLoginService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logoutUser', () => {
    expect(component.logoutUser()).toBe(void 0)
  });

  it('should run changeTheme()', async () => {
    spyOn(component['themeService'], 'isDarkTheme').and.returnValue(true)
    spyOn(component['themeService'], 'setLightTheme');
    spyOn(component['themeService'], 'setDarkTheme');
    component.changeTheme();
    expect(component['themeService'].isDarkTheme).toHaveBeenCalled();
    expect(component['themeService'].setLightTheme).toHaveBeenCalled();
    component['themeService'].isDarkTheme['and'].returnValue(false);
    component.changeTheme();
    expect(component['themeService'].setDarkTheme).toHaveBeenCalled();
  });

  it('should cancelLogout', () => {
    expect(component.cancelLogout()).toBe(void 0)
  });

  it('should confirmLogout', () => {
    expect(component.confirmLogout()).toBe(void 0);
  });
});
