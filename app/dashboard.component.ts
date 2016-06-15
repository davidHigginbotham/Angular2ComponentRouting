import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import {Customer} from './customer';
import {CustomerService} from './customer.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',

})

export class DashboardComponent implements OnInit {
  customers: Customer[] = [];

  constructor(
    private router: Router,
    private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers()
      .then(customers => this.customers = customers.slice(1,5));
  }

  gotoDetail(customer: Customer) {
    let link = ['CustomerDetail', { id: customer.id }];
    this.router.navigate(link);
  }

}

