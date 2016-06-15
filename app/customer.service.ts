import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Customer} from './customer';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomerService {

  private customerUrl = 'app/customers';

  constructor(private http: Http) { }

  getCustomers(): Promise<Customer[]> {
    return this.http.get(this.customerUrl)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getCustomer(id: number) {
    return this.getCustomers()
      .then(customers => customers.filter(customer => customer.id === id)[0]);
  }

  // Add new Customer
  private post(customer: Customer): Promise<Customer> {
    let headers = new Headers({
      'Content-Type': 'application/json'});

    return this.http
      .post(this.customerUrl, JSON.stringify(customer), {headers: headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private put(customer: Customer) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.customerUrl}/${customer.id}`;

    return this.http
      .put(url, JSON.stringify(customer), {headers: headers})
      .toPromise()
      .then(() => customer)
      .catch(this.handleError);
  }

  delete(customer: Customer) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.customerUrl}/${customer.id}`;

    return this.http
      .delete(url, headers)
      .toPromise()
      .catch(this.handleError);
  }

  save(customer: Customer): Promise<Customer>  {
    if (customer.id) {
      return this.put(customer);
    }
    return this.post(customer);
  }





}
