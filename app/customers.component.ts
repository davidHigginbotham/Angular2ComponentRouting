import { Component, OnInit } from '@angular/core';
import {Customer} from './customer';
import { CustomerDetailComponent } from './customer-detail.component';
import {CustomerService} from './customer.service';
import {ROUTER_DIRECTIVES} from '@angular/router';
//Adding the moduleId makes the component relative to its path . so we dont need to provide absolute paths for the template and style urls.
@Component({
    moduleId: module.id,
    selector: 'customers',
    templateUrl: 'customers.component.html',
    //templateUrl: 'app/customers.component.html',
    //styleUrls: ['app/customers.component.css'],
    styleUrls: ['customers.component.css'],
    // add the router directive and router provider for the new router
    directives: [ROUTER_DIRECTIVES,CustomerDetailComponent]
})

export class CustomersComponent implements OnInit {
  customers: Customer[];
  selectedCustomer: Customer;
  addingCustomer = false;
  error: any;
  title: 'Customers';

  ngOnInit() {
    this.getCustomers();
  }

  constructor(
    private customerService: CustomerService) {
  }

  getCustomers() {
    this.customerService.getCustomers()
          .then(customers => this.customers = customers);
  }

  close(savedCustomer: Customer) {
    this.addingCustomer = false;
    if (savedCustomer) { this.getCustomers(); }
  }

  delete(customer: Customer, event: any) {
    event.stopPropagation();
    this.customerService
      .delete(customer)
      .then(res => {
        this.customers = this.customers.filter(h => h !== customer);
        if (this.selectedCustomer === customer) { this.selectedCustomer = null; }
      })
      .catch(error => this.error = error); // TODO: Display error message
  }

}


