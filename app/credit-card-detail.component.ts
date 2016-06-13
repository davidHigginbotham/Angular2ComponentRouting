import { Component, OnInit  } from '@angular/core';
import {CreditCard} from './creditCard';
import { RouteParams } from '@angular/router-deprecated';
import {CreditCardService} from './credit-card.service';

@Component({
  selector: 'credit-card-detail',
  templateUrl: 'app/credit-card-detail.component.html'
})

export class CreditCardDetailComponent implements OnInit {
  creditCard: CreditCard;

  constructor(
    private creditCardService: CreditCardService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.creditCardService.getCreditCard(id).then(creditCard => this.creditCard = creditCard);
  }

  goBack() {
    window.history.back();
  }


}
