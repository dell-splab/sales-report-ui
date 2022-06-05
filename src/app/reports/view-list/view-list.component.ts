import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {

  columns = ["Name", "Product name", "Purchase data"]
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

  
}
