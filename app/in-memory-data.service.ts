export class InMemoryDataService {
  createDb() {
    let creditCards = [
        { "id": 1, "cardHolder": "John Smith", "cardNumber": "4111111111111111", "expirationDateAsMMYY" : "0819", "csc": "456", "zip" : "55555" },
        { "id": 2, "cardHolder": "Wilma Smith", "cardNumber": "4211111111111111", "expirationDateAsMMYY" : "0819", "csc": "456", "zip" : "55555" },
        { "id": 3, "cardHolder": "Ed Hand", "cardNumber": "4311111111111111", "expirationDateAsMMYY" : "0819", "csc": "456", "zip" : "55555" },
        { "id": 4, "cardHolder": "Buffy the Payment Slayer", "cardNumber": "4411111111111111", "expirationDateAsMMYY" : "0819", "csc": "456", "zip" : "55555" },
        { "id": 5, "cardHolder": "Mary Dalton", "cardNumber": "4511111111111111", "expirationDateAsMMYY" : "0819", "csc": "456", "zip" : "55555" },
        { "id": 6, "cardHolder": "Shaw Johnson", "cardNumber": "4611111111111111", "expirationDateAsMMYY" : "0819", "csc": "456", "zip" : "55555" },
        { "id": 7, "cardHolder": "Stephen Curry", "cardNumber": "4711111111111111", "expirationDateAsMMYY" : "0819", "csc": "456", "zip" : "55555" },
        { "id": 8, "cardHolder": "Bill Maynard", "cardNumber": "4811111111111111", "expirationDateAsMMYY" : "0819", "csc": "456", "zip" : "55555" }
    ];
    return {creditCards};
  }
}
