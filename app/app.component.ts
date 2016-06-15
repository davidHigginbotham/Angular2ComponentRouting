import {Component} from '@angular/core';
import {CreditCardsComponent} from './credit-cards.component';
import {CustomersComponent} from './customers.component';
import {DashboardComponent} from './dashboard.component';
import {CreditCardService} from './credit-card.service';
import {CustomerService} from './customer.service';
import {CreditCardDetailComponent} from './credit-card-detail.component';
import {CustomerDetailComponent} from './customer-detail.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


@Component({
  selector: 'payment-processing',
  template: `  <h1>{{title}}</h1>
               <nav>
               <a [routerLink]="['Dashboard']">Dashboard</a>
               <a [routerLink]="['Customers']">Customers</a>
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

@RouteConfig([
  {
    path: '/credit-cards',
    name: 'CreditCards',
    component: CreditCardsComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },

  {
    path: '/detail/:id',
    name: 'CreditCardDetail',
    component: CreditCardDetailComponent
  },
  {
    path: '/customers',
    name: 'Customers',
    component: CustomersComponent
  },
  {
    path: '/customer-detail/:id',
    name: 'CustomerDetail',
    component: CustomerDetailComponent
  },

])


export class AppComponent {
  title: 'Payment Processing';
}
