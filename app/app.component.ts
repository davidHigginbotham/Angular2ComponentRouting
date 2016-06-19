import {Component} from '@angular/core';
import {CreditCardsComponent} from './credit-cards.component';
import {CustomersComponent} from './customers.component';
import {DashboardComponent} from './dashboard.component';
import {CreditCardService} from './credit-card.service';
import {CustomerService} from './customer.service';
import {CreditCardDetailComponent} from './credit-card-detail.component';
import {CustomerDetailComponent} from './customer-detail.component';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'payment-processing',
  template: `  <h1>{{title}}</h1>
               <nav>
               <a [routerLink]="['/dashboard']">Dashboard</a>
               <a [routerLink]="['/customers']">Customers</a>
               </nav>
               <router-outlet></router-outlet>
               <customers></customers>
             `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    CreditCardService,
    CustomerService
  ]
})

@Routes([
  {
    path: '/dashboard',
    component: DashboardComponent
    //useAsDefault: true
  },
  {
    path: '/customers',
    component: CustomersComponent
  },
  {
    path: '/customer-detail/:id',
    component: CustomerDetailComponent
  },

])


export class AppComponent {
  title: 'Payment Processing';
}
