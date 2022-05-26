import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  SalesSubject: Observable<any> = new Subject<any>();
  Sales: any[] = [
    { name: 'Tyler Kennedy', SaleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', SaleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', SaleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', SaleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', SaleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', SaleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', SaleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', SaleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', SaleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', SaleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', SaleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', SaleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', SaleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', SaleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', SaleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
  ]

  filteredSales: any[] = [];
  headers = ['Name', "Product's name", 'Purchase date']

  fromSale = 0;
  toSale = 4;
  currentPage = 0;
  pageSize = 5;
  
  newSaleStatus = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.fillTable(this.fromSale, this.toSale)
  }


  navigate(iconName: string) {
    this.router.navigate(['/', iconName]);
  }
  
  fillTable(fromSale: number, toSale: number) {
    this.fromSale = fromSale;

    this.toSale = toSale;

    this.filteredSales = this.Sales.slice(fromSale, toSale + 1);

  }

  changePage(event: any) {
    this.fillTable(event.fromSale, event.toSale)
  }

  changeItemsPerPage(event: any) {
    this.pageSize = parseInt(event);
  }

  changeSalesStatus() {
    this.newSaleStatus = !this.newSaleStatus;
  }
}
