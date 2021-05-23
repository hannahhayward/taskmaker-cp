import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import {Card} from "../Models/Card.js"
import { cardsService } from "../Services/CardsService.js";

function drawCards(){
  let template = ''
  ProxyState.Cards.forEach(Card => template += Card.Template)
  document.getElementById('tasks').innerHTML = template
}

export class CardsController {
  constructor() {
    ProxyState.on('Cards', drawCards)
    drawCards()
  }
  // drawCards() {
  //   console.log('draw cards')
  //   let template = ''
  //   ProxyState.Cards.forEach(Card => )
  //   document.getElementById('tasks').innerHTML = template
  // }

  addCard(event) {
    event.preventDefault();
    let form = event.target
    let formData = {
      title: form.title.value,
    }
    console.log(formData)
    cardsService.addCard(formData)
    drawCards()
    // form.reset()
  }

}
