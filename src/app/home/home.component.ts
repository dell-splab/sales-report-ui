import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  cardItems: Array<any> =  [
    { iconName: 'clients', label: 'Clients', iconStyles: 'dds__icons dds__user extra-large' },
    { iconName: 'leads', label: 'Leads', iconStyles: 'dds__icons dds__user-group-chat extra-large' },
    { iconName: 'sales', label: 'Sales', iconStyles: 'dds__icons dds__cart extra-large' },
    { iconName: 'reports', label: 'Reports', iconStyles: 'dds__icons dds__doc-reports extra-large' },
  ];

  navigate(iconName: string) {
    this.router.navigate(['/', iconName]);
  }
}
