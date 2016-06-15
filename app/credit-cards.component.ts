import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router-deprecated';
import {CreditCard} from './creditCard';
import { CreditCardDetailComponent } from './credit-card-detail.component';
import {CreditCardService} from './credit-card.service';


@Component({
    selector: 'credit-cards',
    template: `<h1>{{title}}</h1>
               <h2>Credit Cards</h2>
                   <ul class="creditCards">
                       <li *ngFor="let creditCard of creditCards" [class.selected]="creditCard === selectedCreditCard" (click)="onSelect(creditCard)">
                          <span class="detail">{{creditCard.id}}</span> {{creditCard.cardHolder}}
                          <button class="delete-button" (click)="delete(creditCard, $event)">Delete</button>
                      </li>
                   </ul>
                <button (click)="addCreditCard()">Add New Credit Card</button>
                <div *ngIf="addingCreditCard">
                    <credit-card-detail (close)="close($event)"></credit-card-detail>
                </div>
                <div *ngIf="selectedCreditCard">
                <h2>
               {{selectedCreditCard.cardHolder | uppercase}} is my credit card
                </h2>
                <button (click)="gotoDetail()">View Details</button>
                </div>
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

export class CreditCardsComponent implements OnInit {
  creditCards: CreditCard[];
  selectedCreditCard: CreditCard;
  addingCreditCard = false;
  error: any;
  title: 'Credit Cards';

  ngOnInit() {
    this.getCreditCards();
  }

  constructor(
    private router: Router,
    private creditCardService: CreditCardService) {
  }

  onSelect(creditCard: CreditCard) {
    this.selectedCreditCard = creditCard;
    this.addingCreditCard = false;
  }

  getCreditCards() {
    this.creditCardService.getCreditCards()
          .then(creditCards => this.creditCards = creditCards);
  }

  addCreditCard() {
    this.addingCreditCard = true;
    this.selectedCreditCard = null;
  }

  close(savedCreditCard: CreditCard) {
    this.addingCreditCard = false;
    if (savedCreditCard) { this.getCreditCards(); }
  }

  delete(creditCard: CreditCard, event: any) {
    event.stopPropagation();
    this.creditCardService
      .delete(creditCard)
      .then(res => {
        this.creditCards = this.creditCards.filter(h => h !== creditCard);
        if (this.selectedCreditCard === creditCard) { this.selectedCreditCard = null; }
      })
      .catch(error => this.error = error); // TODO: Display error message
  }

  gotoDetail() {
    this.router.navigate(['CreditCardDetail', { id: this.selectedCreditCard.id }]);
  }

}


