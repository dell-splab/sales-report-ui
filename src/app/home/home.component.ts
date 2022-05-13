import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  headers = ['snapshot date', 'Objects'];
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // This is intentional
  }

  navigate(iconName: string) {
    this.router.navigate(['/', iconName]);
  }
}
