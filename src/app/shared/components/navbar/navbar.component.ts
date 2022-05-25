import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const DEFAULT_DURATION = 1;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('collapse', [
      state('false', style({ width: AUTO_STYLE })),
      state('true', style({ width: '50px' })),
      transition('false => true', animate(DEFAULT_DURATION + 's ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 's ease-out'))
    ])
  ]
})
export class NavbarComponent implements OnInit, DoCheck {
  collapsed: boolean = false;
  items: Array<any> =  [
    { iconName: 'home', label: 'Home', iconStyles: 'dds__icons dds__home' },
    { iconName: 'clients', label: 'Clients', iconStyles: 'dds__icons dds__user-group' },
    { iconName: 'leads', label: 'Leads', iconStyles: 'dds__icons dds__user-group-chat' },
  ];
  selectedItem: any = { iconName: 'home', label: 'Home', iconStyles: 'dds__icons dds__home' };

  constructor(private router: Router) {
    // This is intentional
  }

  ngOnInit(): void {
    this.findOutRoute()
  }

  ngDoCheck() {
    this.findOutRoute()
  }

  findOutRoute(){
    var split = window.location.pathname.split('/');
    var pathname = ""
    if(split.length >= 4){
      pathname = split[4]
    } else{
      pathname = split[1]
    }

    if (!this.selectedItem || pathname == 'code'){
      pathname = 'home'
    }

    this.selectedItem = this.items.find((i) => pathname === i.iconName);
  }

  changeSelectedItem(iconName: string) {
    this.selectedItem = this.items.find((i) => i.iconName === iconName);
    this.router.navigate(['/', iconName]);

  }

  changeCollapsed() {
    this.collapsed = !this.collapsed;
  }
}
