import { Component, OnInit } from '@angular/core';
import {Customer} from './customer';
import {CustomerService} from './customer.service';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  directives: [ROUTER_DIRECTIVES]

})

export class DashboardComponent implements OnInit {
  customers: Customer[] = [];

  constructor(
    private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers()
      .then(customers => this.customers = customers.slice(1,5));
  }
}

