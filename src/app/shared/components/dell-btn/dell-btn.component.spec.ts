import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DellBtnComponent } from './dell-btn.component';

describe('DellBtnComponent', () => {
  let component: DellBtnComponent;
  let fixture: ComponentFixture<DellBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DellBtnComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DellBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test case computed classes', () => {
    expect(component.computeClass()).toBeDefined();
  });

  it('test case getClass type primary', () => {
    component.type = 'primary';
    expect(component.getClass()).toBeDefined();
    component.type = 'secondary';
    expect(component.getClass()).toBeDefined();
    component.type = 'danger';
    expect(component.getClass()).toBeDefined();
  });
});
