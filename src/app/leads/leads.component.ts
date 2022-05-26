import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {

  itemsSubject: Observable<any> = new Subject<any>();
  items: any[] = [
    { column: 'column', test: 'test', config: 'config' },
    { column: 'column', test: 'test', config: 'config' },
    { column: 'column', test: 'test', config: 'config' },
    { column: 'column', test: 'test', config: 'config' },
    { column: 'column', test: 'test', config: 'config' },
    { column: 'column', test: 'test', config: 'config' },
    { column: 'column', test: 'test', config: 'config' },
    { column: 'column', test: 'test', config: 'config' },
    { column: 'column', test: 'test', config: 'config' },
    { column: 'column', test: 'test', config: 'config' },
    { column: 'column', test: 'test', config: 'config' },
    { column: 'column', test: 'test', config: 'config' },
  ];
  filteredItems: any[] = [];
  fromItem = 0;
  toItem = 4;
  currentPage = 0;
  pageSize = 5;
  headers = ['Column', 'Test', 'Config', 'Test'];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.fillTable(this.fromItem, this.toItem);
  }

  navigate(iconName: string) {
    this.router.navigate(['/', iconName]);
  }

  fillTable(from: number, to: number) {
    this.fromItem = from;

    this.toItem = to;

    this.filteredItems = this.items.slice(from, to + 1);
  }

  changePage(event: any) {
    this.fillTable(event.from, event.to);
  }

  changeItemsPerPage(event: any) {
    this.pageSize = parseInt(event);
  }

}
