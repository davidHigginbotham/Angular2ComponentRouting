import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {CreditCard} from './creditCard';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CreditCardService {

  private creditCardsUrl = 'app/creditCards';

  constructor(private http: Http) { }

  //Replaced with actual http call
  //getCreditCards() {
  //  return Promise.resolve(CREDIT_CARDS);
  // }

  getCreditCards(): Promise<CreditCard[]> {
    return this.http.get(this.creditCardsUrl)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  //getCreditCardsSlowly() {
  //  return new Promise<CreditCard[]>(resolve =>
  //      setTimeout(()=>resolve(CREDIT_CARDS), 2000) // 2 seconds
  //  );
  //}

  getCreditCard(id: number) {
    return this.getCreditCards()
      .then(creditCards => creditCards.filter(creditCard => creditCard.id === id)[0]);
  }

  // Add new CreditCard
  private post(creditCard: CreditCard): Promise<CreditCard> {
    let headers = new Headers({
      'Content-Type': 'application/json'});

    return this.http
      .post(this.creditCardsUrl, JSON.stringify(creditCard), {headers: headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  // Update existing CreditCard
  private put(creditCard: CreditCard) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.creditCardsUrl}/${creditCard.id}`;

    return this.http
      .put(url, JSON.stringify(creditCard), {headers: headers})
      .toPromise()
      .then(() => creditCard)
      .catch(this.handleError);
  }

  delete(creditCard: CreditCard) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.creditCardsUrl}/${creditCard.id}`;

    return this.http
      .delete(url, headers)
      .toPromise()
      .catch(this.handleError);
  }

  save(creditCard: CreditCard): Promise<CreditCard>  {
    if (creditCard.id) {
      return this.put(creditCard);
    }
    return this.post(creditCard);
  }





}
