import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import {CreditCard} from './creditCard';
import {CreditCardService} from './credit-card.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',

})

export class DashboardComponent implements OnInit {
  creditCards: CreditCard[] = [];

  constructor(
    private router: Router,
    private creditCardService: CreditCardService) { }

  ngOnInit() {
    this.creditCardService.getCreditCards()
      .then(creditCards => this.creditCards = creditCards.slice(1,5));
  }

  gotoDetail(creditCard: CreditCard) {
    let link = ['CreditCardDetail', { id: creditCard.id }];
    this.router.navigate(link);
  }

}

