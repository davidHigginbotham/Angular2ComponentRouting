import {Component} from '@angular/core';
import {CreditCard} from './creditCard';
import { CreditCardDetailComponent } from './credit-card-detail.component';


@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
               <p *ngIf="creditCards.length > 3">There are many card holders!</p>
               <p>CardHolders:</p>
               <ul>
               <li *ngFor="let creditCard of creditCards">{{ creditCard.cardHolder }} </li>
               </ul>
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

`],directives: [CreditCardDetailComponent]

})

export class AppComponent {
  creditCards = CREDIT_CARDS;
  title: string;
  selectedCreditCard: CreditCard;

  constructor() {
    this.title = 'Credit Cards';
  }

  onSelect(creditCard: CreditCard) {
    this.selectedCreditCard = creditCard;
  }
}

var CREDIT_CARDS: CreditCard[] = [
  { "id": 1, "cardHolder": "Mr. Nice1", "cardNumber": "4111111111111111", "expirationDateAsMMYY" : "0819", "csc": "456", "zip" : "55555" },
  { "id": 2, "cardHolder": "Mr. Nice2", "cardNumber": "4111111111111111", "expirationDateAsMMYY" : "0819", "csc": "456", "zip" : "55555" },
  { "id": 3, "cardHolder": "Mr. Nice3", "cardNumber": "4111111111111111", "expirationDateAsMMYY" : "0819", "csc": "456", "zip" : "55555" },
  { "id": 4, "cardHolder": "Mr. Nice4", "cardNumber": "4111111111111111", "expirationDateAsMMYY" : "0819", "csc": "456", "zip" : "55555" },
  { "id": 5, "cardHolder": "Mr. Nice5", "cardNumber": "4111111111111111", "expirationDateAsMMYY" : "0819", "csc": "456", "zip" : "55555" },
  { "id": 6, "cardHolder": "Mr. Nice6", "cardNumber": "4111111111111111", "expirationDateAsMMYY" : "0819", "csc": "456", "zip" : "55555" },
  { "id": 7, "cardHolder": "Mr. Nice7", "cardNumber": "4111111111111111", "expirationDateAsMMYY" : "0819", "csc": "456", "zip" : "55555" },
  { "id": 8, "cardHolder": "Mr. Nice8", "cardNumber": "4111111111111111", "expirationDateAsMMYY" : "0819", "csc": "456", "zip" : "55555" },
  { "id": 9, "cardHolder": "Mr. Nice9", "cardNumber": "4111111111111111", "expirationDateAsMMYY" : "0819", "csc": "456", "zip" :"55555" },
  { "id": 10, "cardHolder": "Mr. Nice10", "cardNumber": "4111111111111111", "expirationDateAsMMYY" : "0819", "csc": "456", "zip" : "55555" },
  { "id": 11, "cardHolder": "Mr. Nice11", "cardNumber": "4111111111111111", "expirationDateAsMMYY" : "0819", "csc": "456", "zip" :"55555" },
  { "id": 12, "cardHolder": "Mr. Nice12", "cardNumber": "4111111111111111", "expirationDateAsMMYY" : "0819", "csc": "456", "zip" :"55555" }
];

