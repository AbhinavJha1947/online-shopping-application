// order-confirmation.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  shippingDetails: any; // Change 'any' to a specific type for shipping details if known

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Subscribe to the query parameters to retrieve the shipping details
    this.route.queryParams.subscribe(params => {
      this.shippingDetails = params;
    });
  }

}
