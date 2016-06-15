import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router-deprecated';
import {Customer} from './customer';
import { CustomerDetailComponent } from './customer-detail.component';
import {CustomerService} from './customer.service';

@Component({
    selector: 'customers',
    template: `<h1>{{title}}</h1>
               <h2>Customers</h2>
                   <ul class="customers">
                       <li *ngFor="let customer of customers" [class.selected]="customer === selectedCustomer" (click)="onSelect(customer)">
                          <span class="detail">{{customer.id}}</span> {{customer.firstName}} {{customer.lastName}}
                          <button class="delete-button" (click)="delete(customer, $event)">Delete</button>
                      </li>
                   </ul>
                <button (click)="addCustomer()">Add New Customer</button>
                <div *ngIf="addingCustomer">
                    <customer-detail (close)="close($event)"></customer-detail>
                </div>
                <div *ngIf="selectedCustomer">
                <h2>
               {{selectedCustomer.firstName | uppercase}} is my customer
                </h2>
                <button (click)="gotoDetail()">View Details</button>
                </div>
               `,
  styles:[`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .customers {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .customers li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .customers li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .customers li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .customers .text {
    position: relative;
    top: -3px;
  }
  .customers .detail {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }

`],directives: [CustomerDetailComponent]

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
    private router: Router,
    private customerService: CustomerService) {
  }

  onSelect(customer: Customer) {
    this.selectedCustomer = customer;
    this.addingCustomer = false;
  }

  getCustomers() {
    this.customerService.getCustomers()
          .then(customers => this.customers = customers);
  }

  addCustomer() {
    this.addingCustomer = true;
    this.selectedCustomer = null;
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

  gotoDetail() {
    this.router.navigate(['CustomerDetail', { id: this.selectedCustomer.id }]);
  }

}


