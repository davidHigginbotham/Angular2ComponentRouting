import { Injectable } from '@angular/core';
import {CREDIT_CARDS} from './mock-credit-cards';

import {CreditCard} from './creditCard';

@Injectable()
export class CreditCardService {

  getCreditCards() {
    return Promise.resolve(CREDIT_CARDS);
  }

  getCreditCardsSlowly() {
    return new Promise<CreditCard[]>(resolve =>
        setTimeout(()=>resolve(CREDIT_CARDS), 2000) // 2 seconds
    );
  }

  getCreditCard(id: number) {
    return this.getCreditCards()
      .then(creditCards => creditCards.filter(creditCard => creditCard.id === id)[0]);
  }

}
