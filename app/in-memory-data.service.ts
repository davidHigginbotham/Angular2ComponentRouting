export class InMemoryDataService {
  createDb() {

    let customers = [
      { "id": 1, "firstName": "John", "lastName": "Smith", "creditCards" : [{ "id": 1, "cardHolder": "John Smith", "cardNumber": "****1111", "expirationDateAsMMYY" : "0819", "csc": "456", "zip" : "55555" }]},
      { "id": 2, "firstName": "Mary", "lastName": "Smith", "creditCards" : [{ "id": 2, "cardHolder": "Mary Smith", "cardNumber": "****1234", "expirationDateAsMMYY" : "1019", "csc": "654", "zip" : "11111" }]},
      { "id": 3, "firstName": "Buffy", "lastName": "Summers", "creditCards" : [{ "id": 3, "cardHolder": "John Smith", "cardNumber": "****5555", "expirationDateAsMMYY" : "0819", "csc": "456", "zip" : "55555" }]},
      { "id": 4, "firstName": "Ed", "lastName": "Hand", "creditCards" : [{ "id": 4, "cardHolder": "Mary Smith", "cardNumber": "****3333", "expirationDateAsMMYY" : "1019", "csc": "654", "zip" : "11111" }]},
      { "id": 5, "firstName": "Will", "lastName": "Johnson", "creditCards" : [{ "id": 5, "cardHolder": "John Smith", "cardNumber": "****4545", "expirationDateAsMMYY" : "0819", "csc": "456", "zip" : "55555" }]},
      { "id": 6, "firstName": "Henry", "lastName": "Ford", "creditCards" : [{ "id": 6, "cardHolder": "Mary Smith", "cardNumber": "****2222", "expirationDateAsMMYY" : "1019", "csc": "654", "zip" : "11111" }]}
    ];
    return {customers};
  }
}
