import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Customer} from './customer';
import { RouteParams } from '@angular/router-deprecated';
import {CustomerService} from './customer.service';

@Component({
  selector: 'customer-detail',
  templateUrl: 'app/customer-detail.component.html'
})

export class CustomerDetailComponent implements OnInit {
  @Input() customer: Customer;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here
  constructor(
    private customerService: CustomerService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    if (this.routeParams.get('id') !== null) {
      let id = +this.routeParams.get('id');
      this.navigated = true;
      this.customerService.getCustomer(id).then(customer => this.customer = customer);
    } else {
      this.navigated = false;
      this.customer = new Customer();
    }

  }

  save() {
    this.customerService
      .save(this.customer)
      .then(customer => {
        this.customer = customer;
        this.goBack(customer);
      })
      .catch(error => this.error = error); // TODO: Display error message
  }

  goBack(savedCustomer: Customer = null) {
    this.close.emit(savedCustomer);
    if (this.navigated) { window.history.back(); }
  }


}
