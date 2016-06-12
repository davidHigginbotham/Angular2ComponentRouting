import { Component, Input } from '@angular/core';
import {CreditCard} from './creditCard';

@Component({
  selector: 'credit-card-detail',
  template: `<div *ngIf="creditCard">
                   <h2>Card Holder: {{creditCard.cardHolder}}</h2>
                   <div><label>id: </label>{{creditCard.id}}</div>
                   <div>
                       <label>Card Holder: </label>
                       <input [(ngModel)]="creditCard.cardHolder" placeholder="cardHolder">
                    </div>
               </div>
             `
})
export class CreditCardDetailComponent {
    @Input()
    creditCard: CreditCard;
}
