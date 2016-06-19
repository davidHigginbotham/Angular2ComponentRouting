import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Customer} from './customer';
import {OnActivate, RouteSegment} from '@angular/router';
import {CustomerService} from './customer.service';

@Component({
  moduleId: module.id,
  selector: 'customer-detail',
  templateUrl: 'customer-detail.component.html'
})

export class CustomerDetailComponent implements OnActivate {
  @Input() customer: Customer;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here
  constructor(
    private customerService: CustomerService) {
  }

  routerOnActivate(curr:RouteSegment):void {
    const id = curr.getParam('id');
    if (id !== null) {
      //let id = +id;
      this.navigated = true;
      this.customerService.getCustomer(+id).then(customer => this.customer = customer);
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
