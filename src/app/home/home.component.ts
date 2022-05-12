import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // configCard: any = {
  //   iconName: 'config',
  //   label: 'Configuration',
  //   iconStyles: 'dds__icons dds__gear',
  // };

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // This is intentional
  }

  navigate(iconName: string) {
    this.router.navigate(['/', iconName]);
  }
}
