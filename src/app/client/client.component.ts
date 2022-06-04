import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ClientService } from './client.service';
import { Client } from './client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  itemsSubject: Observable<any> = new Subject<any>();

  clients: Client[] = [];

  filteredItems: any[] = [];
  headers = [
    'Name',
    'Email',
    'Total spent',
    'Number of purchases',
    'Last purchase date',
    'Action',
  ];

  fromItem = 0;
  toItem = 4;
  currentPage = 0;
  pageSize = 5;
  newClientStatus = false;

  constructor(private router: Router, private clientService: ClientService) {}
  newClient: Client = {
    name: '',
    email: '',
  };

  newClientNotValid = false;
  newClientIsValid = false;
  showOverlay = false;

  ngOnInit(): void {
    this.clientService.read().subscribe((clients) => {
      this.clients = clients;
      this.fillTable(this.fromItem, this.toItem);
    });
  }

  navigate(iconName: string) {
    this.router.navigate(['/', iconName]);
  }

  fillTable(from: number, to: number) {
    this.fromItem = from;

    this.toItem = to;

    this.filteredItems = this.clients.slice(from, to + 1);
  }

  changePage(event: any) {
    this.fillTable(event.from, event.to);
  }

  changeItemsPerPage(event: any) {
    this.pageSize = parseInt(event);
  }

  changeClientStatus() {
    this.showOverlay = true;
    this.newClientStatus = !this.newClientStatus;
  }

  saveClient() {
    this.newClientStatus = false;
    if (this.newClient.name === '' || this.newClient.email === '') {
      this.newClientNotValid = true;
    } else {
      this.newClientIsValid = true;
      this.clientService.create(this.newClient).subscribe(() => {
        this.clientService.read().subscribe((clients) => {
          this.clients = clients;
          this.fillTable(this.fromItem, this.toItem);
        });
        this.closeCard()
      })
      this.newClient = {
        name: '',
        email: '',
      }
    }
  }

  closeNotification() {
    this.newClientIsValid = false;
    this.newClientNotValid = false;
    this.showOverlay = false;
  }

  openCard() {
    this.showOverlay = true;
    this.newClientStatus = true;
  }

  closeCard() {
    this.newClientStatus = false;
    this.showOverlay = false;
  }
}
