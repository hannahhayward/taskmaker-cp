import { ProxyState } from "../AppState.js";
import { Card } from "../Models/Card.js";


class CardsService{
  addCard(formData){
    let newCard = new Card(formData.title, formData.color)
    ProxyState.Cards.unshift(newCard)
  }
}
export const cardsService = new CardsService()