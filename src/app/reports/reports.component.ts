import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  columns = ["Name", "Product name", "Purchase data"]

  options = ["date","client","product"]
  selected = this.options[0];
  
  data = [{ "name":"Tyler Kennedy",
        	  "product": "OptiPlex 3090 Micro",
            "date": "11/05/2022"},
            { "name":"Tyler Kennedy",
        	  "product": "OptiPlex 3090 Micro",
            "date": "11/05/2022"},
            { "name":"Tyler Kennedy",
        	  "product": "OptiPlex 3090 Micro",
            "date": "11/05/2022"},
            { "name":"Tyler Kennedy",
        	  "product": "OptiPlex 3090 Micro",
            "date": "11/05/2022"},
            { "name":"Tyler Kennedy",
        	  "product": "OptiPlex 3090 Micro",
            "date": "11/05/2022"},
            { "name":"Tyler Kennedy",
        	  "product": "OptiPlex 3090 Micro",
            "date": "11/05/2022"},
            { "name":"Tyler Kennedy",
        	  "product": "OptiPlex 3090 Micro",
            "date": "11/05/2022"},
            { "name":"Tyler Kennedy",
        	  "product": "OptiPlex 3090 Micro",
            "date": "11/05/2022"},
            { "name":"Tyler Kennedy",
        	  "product": "OptiPlex 3090 Micro",
            "date": "11/05/2022"},
            { "name":"Tyler Kennedy",
        	  "product": "OptiPlex 3090 Micro",
            "date": "11/05/2022"},
            { "name":"Tyler Kennedy",
        	  "product": "OptiPlex 3090 Micro",
            "date": "11/05/2022"},
            { "name":"Tyler Kennedy",
        	  "product": "OptiPlex 3090 Micro",
            "date": "11/05/2022"},
            { "name":"Tyler Kennedy",
        	  "product": "OptiPlex 3090 Micro",
            "date": "11/05/2022"},
            { "name":"Tyler Kennedy",
        	  "product": "OptiPlex 3090 Micro",
            "date": "11/05/2022"},
            { "name":"Tyler Kennedy",
        	  "product": "OptiPlex 3090 Micro",
            "date": "11/05/2022"},
          ]

  constructor() { }

  ngOnInit(): void {
  }

  changeSelected(selected:string){
    console.log("cu");
    this.selected = selected;
  }
}
