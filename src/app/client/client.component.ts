import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ClientService } from './client.service';
import { Client } from './client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  itemsSubject: Observable<any> = new Subject<any>();

  clients: Client[] = [];
  items: any[] = [
    { name: 'Tyler Kennedy', email: 'kennedy.t@gmail.com', totalSpend: 'R$2.528,00', numberPurchases:'2', lastPurchaseData: '25/04/2022' },
    { name: 'Tyler Kennedy', email: 'kennedy.t@gmail.com', totalSpend: 'R$2.528,00', numberPurchases:'1', lastPurchaseData: '12/08/2021' },
    { name: 'Tyler Kennedy', email: 'kennedy.t@gmail.com', totalSpend: 'R$2.528,00', numberPurchases:'3', lastPurchaseData: '03/07/2021' },
    { name: 'Tyler Kennedy', email: 'kennedy.t@gmail.com', totalSpend: 'R$2.528,00', numberPurchases:'5', lastPurchaseData: '15/08/2021' },
    { name: 'Tyler Kennedy', email: 'kennedy.t@gmail.com', totalSpend: 'R$2.528,00', numberPurchases:'4', lastPurchaseData: '07/11/2021' },
    { name: 'Tyler Kennedy', email: 'kennedy.t@gmail.com', totalSpend: 'R$2.528,00', numberPurchases:'3', lastPurchaseData: '07/08/2021' },
    { name: 'Tyler Kennedy', email: 'kennedy.t@gmail.com', totalSpend: 'R$2.528,00', numberPurchases:'1', lastPurchaseData: '05/08/2021' },
    { name: 'Tyler Kennedy', email: 'kennedy.t@gmail.com', totalSpend: 'R$2.528,00', numberPurchases:'5', lastPurchaseData: '01/02/2021' },
    { name: 'Tyler Kennedy', email: 'kennedy.t@gmail.com', totalSpend: 'R$2.528,00', numberPurchases:'8', lastPurchaseData: '03/03/2021' },
    { name: 'Tyler Kennedy', email: 'kennedy.t@gmail.com', totalSpend: 'R$2.528,00', numberPurchases:'1', lastPurchaseData: '04/06/2021' },
    { name: 'Tyler Kennedy', email: 'kennedy.t@gmail.com', totalSpend: 'R$2.528,00', numberPurchases:'7', lastPurchaseData: '02/04/2021' },
    { name: 'Tyler Kennedy', email: 'kennedy.t@gmail.com', totalSpend: 'R$2.528,00', numberPurchases:'1', lastPurchaseData: '09/08/2021' },
  ];

  filteredItems: any[] = [];
  headers = ['Name', 'Email', 'Total spent', 'Number of purchases', 'Last purchase date', 'Action'];

  fromItem = 0;
  toItem = 4;
  currentPage = 0;
  pageSize = 5;
  newClientStatus = false;

  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.read().subscribe(clients => {
      this.clients = clients 
      this.fillTable(this.fromItem, this.toItem);
    })
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
    this.newClientStatus = !this.newClientStatus;
    console.log(this.newClientStatus)
  }

}
