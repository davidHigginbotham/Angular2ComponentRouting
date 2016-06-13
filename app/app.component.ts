import {Component} from '@angular/core';
import {CreditCardsComponent} from './credit-cards.component';
import {DashboardComponent} from './dashboard.component';
import {CreditCardService} from './credit-card.service';
import {CreditCardDetailComponent} from './credit-card-detail.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


@Component({
  selector: 'payment-processing',
  template: `  <h1>{{title}}</h1>
               <nav>
               <a [routerLink]="['Dashboard']">Dashboard</a>
               <a [routerLink]="['CreditCards']">CreditCards</a>
               </nav>
               <router-outlet></router-outlet>
               <credit-cards></credit-cards>
             `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    CreditCardService
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

])


export class AppComponent {
  title: 'Payment Processing';
}
