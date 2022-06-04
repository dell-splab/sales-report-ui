import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, Subscription } from 'rxjs';
import { DellBtnComponent } from 'src/app/shared/components/dell-btn/dell-btn.component';
import { ChangeType } from 'src/app/shared/models/diff.model';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let mockedObservable = new Observable<any>();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationComponent, DellBtnComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.changesSubject = mockedObservable;
    spyOn(mockedObservable, 'subscribe').and.returnValue(new Subscription());
    fixture.detectChanges();
  });

  it('should create', () => {
    component.items = [
      {
        objectType: 'Type',
        description: 'empty',
        changeType: ChangeType.NO_CHANGE,
        sourceContent: 'empty',
        targetContent: 'empty',
        changes: [],
      },
    ];
    expect(component).toBeTruthy();
  });

  it('should ngOnChanges', () => {
    expect(component.ngOnChanges()).toBe(void 0);
  });

  it('should calculateValues', () => {
    component.items = [
      {
        objectType: 'Type',
        description: 'empty',
        changeType: ChangeType.NO_CHANGE,
        sourceContent: 'empty',
        targetContent: 'empty',
        changes: [],
      },
    ];
    expect(component.calculateValues()).toBe(void 0);

    component.currentPage = 1;
    expect(component.calculateValues()).toBe(void 0);
  });

  it('should previousClicked', () => {
    component.currentPage = 2;
    expect(component.previousClicked()).toBe(void 0);

    component.currentPage = 1;
    expect(component.previousClicked()).toBe(void 0);
  });

  it('should nextClicked', () => {
    component.currentPage = 1;
    component.totalPages = 3;
    expect(component.nextClicked()).toBe(void 0);

    component.currentPage = 3;
    component.totalPages = 3;
    expect(component.nextClicked()).toBe(void 0);
  });

  it('should changeCurrentPageOnBlur', () => {
    const mockedEvent = { target: { value: 3 } };
    component.currentPage = 1;
    component.totalPages = 4;
    expect(component.changeCurrentPageOnBlur(mockedEvent)).toBe(void 0);

    component.currentPage = 1;
    component.totalPages = 2;
    expect(component.changeCurrentPageOnBlur(mockedEvent)).toBe(void 0);
  });

  it('should changeCurrentPageOnKeyEnter', () => {
    const mockedEvent = { srcElement: { value: 3 } };
    component.currentPage = 1;
    component.totalPages = 4;
    expect(component.changeCurrentPageOnKeyEnter(mockedEvent)).toBe(void 0);

    component.currentPage = 1;
    component.totalPages = 2;
    expect(component.changeCurrentPageOnKeyEnter(mockedEvent)).toBe(void 0);
  });

  it('should changeItemsPerPage', () => {
    const mockedEvent = { target: { value: 3 } };
    component.currentPage = 1;
    component.totalPages = 4;
    expect(component.changeItemsPerPage(mockedEvent)).toBe(void 0);
  });
});
