import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Sale } from './sales.model';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  SalesSubject: Observable<any> = new Subject<any>();
  sales: any[] = [
    { name: 'Tyler Kennedy', saleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', saleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', saleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', saleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', saleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', saleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', saleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', saleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', saleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', saleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', saleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', saleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', saleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', saleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
    { name: 'Tyler Kennedy', saleName: 'OptiPlex 3090 Micro', purchaseDate: '5-11-2022' },
  ]

  filteredSales: any[] = [];
  headers = ['Name', "Product's name", 'Purchase date']

  fromSale = 0;
  toSale = 4;
  currentPage = 0;
  pageSize = 5;
  
  newSaleStatus = false;
  
  newSale: Sale = {
    item: "",
    email: ""
  }
  
  newSaleNotValid = false;
  newSaleIsValid = false;

  showOverlay = false;

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

    this.filteredSales = this.sales.slice(fromSale, toSale + 1);

  }

  changePage(event: any) {
    this.fillTable(event.from, event.to)
  }

  changeItemsPerPage(event: any) {
    this.pageSize = parseInt(event);
  }

  changeSalesStatus() {
    this.showOverlay = true;
    this.newSaleStatus = !this.newSaleStatus;
  }

  saveSale() {
    this.newSaleStatus = false;
    if(this.newSale.item === "" || this.newSale.email === ""){
      this.newSaleNotValid = true;
      console.log(this.newSaleStatus)
    }
    else {
      console.log(this.newSale)
      this.newSaleIsValid = true;
    }
  }

  closeNotification() {
    this.newSaleIsValid = false;
    this.newSaleNotValid = false;
    this.showOverlay = true;
  }
  
  openCard() {
    this.showOverlay = true;
    this.newSaleStatus = true;
  }

  closeCard() {
    this.newSaleStatus = false;
    this.showOverlay = false;
  }


}
