import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiffResultsComponent } from 'src/app/diff/components/diff-results/diff-results.component';
import { TableComponent } from 'src/app/diff/components/table/table.component';
import { DellBtnComponent } from '../../dell-btn/dell-btn.component';
import { NavItemComponent } from './nav-item.component';

describe('NavItemComponent', () => {
  let component: NavItemComponent;
  let fixture: ComponentFixture<NavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NavItemComponent,
        TableComponent,
        DiffResultsComponent,
        DellBtnComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test case item clicked', () => {
    expect(component.itemClicked()).toBe(void 0);

    component.selected = true;
    expect(component.itemClicked()).toBe(void 0);
  });
});
