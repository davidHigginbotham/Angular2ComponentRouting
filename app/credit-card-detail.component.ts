import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {CreditCard} from './creditCard';
import { RouteParams } from '@angular/router-deprecated';
import {CreditCardService} from './credit-card.service';

@Component({
  selector: 'credit-card-detail',
  templateUrl: 'app/credit-card-detail.component.html'
})

export class CreditCardDetailComponent implements OnInit {
  @Input() creditCard: CreditCard;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here
  constructor(
    private creditCardService: CreditCardService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    if (this.routeParams.get('id') !== null) {
      let id = +this.routeParams.get('id');
      this.navigated = true;
      this.creditCardService.getCreditCard(id).then(creditCard => this.creditCard = creditCard);
    } else {
      this.navigated = false;
      this.creditCard = new CreditCard();
    }

  }

  save() {
    this.creditCardService
      .save(this.creditCard)
      .then(creditCard => {
        this.creditCard = creditCard;
        this.goBack(creditCard);
      })
      .catch(error => this.error = error); // TODO: Display error message
  }


  goBack(savedCreditCard: CreditCard = null) {
    // Calling the emit method automatically refreshes the list of credit cardss to include our recent updated. (CreditCardsComponent is listening)
    // This is called 'component to component' communication.
    this.close.emit(savedCreditCard);
    if (this.navigated) { window.history.back(); }
  }


}
