export class CreditCard {
  constructor(
    public id:number,
    public cardHolder:string,
    public cardNumber:string,
    public expirationDateAsMMYY:string,
    public csc:string,
    public zip:string) { }
}
