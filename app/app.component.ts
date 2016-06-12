import {Component} from '@angular/core';
import { OnInit } from '@angular/core';
import {CreditCard} from './creditCard';
import { CreditCardDetailComponent } from './credit-card-detail.component';
import {CreditCardService} from './credit-card.service';


@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
               <h2>Credit Cards</h2>
                   <ul class="creditCards">
                       <li *ngFor="let creditCard of creditCards" [class.selected]="creditCard === selectedCreditCard" (click)="onSelect(creditCard)">
                          <span class="detail">{{creditCard.id}}</span> {{creditCard.cardHolder}}
                      </li>
                   </ul>
                <credit-card-detail [creditCard]="selectedCreditCard"></credit-card-detail>
               `,
  styles:[`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .creditCards {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .creditCards li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .creditCards li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .creditCards li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .creditCards .text {
    position: relative;
    top: -3px;
  }
  .creditCards .detail {
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

`],directives: [CreditCardDetailComponent], providers: [CreditCardService]

})

export class AppComponent implements OnInit {
  creditCards: CreditCard[];
  title: 'Credit Cards';
  selectedCreditCard: CreditCard;

  ngOnInit() {
    this.getCreditCards();
  }

  constructor(private creditCardService: CreditCardService) {

  }

  onSelect(creditCard: CreditCard) {
    this.selectedCreditCard = creditCard;
  }

  getCreditCards() {
    this.creditCardService.getCreditCardsSlowly()
          .then(creditCards => this.creditCards = creditCards);
  }

}


