import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  
  @Input()
  size: string = 'small';

  constructor() {
    // This is intentional
  }

  ngOnInit(): void { 
    // This is intentional
  }

}
