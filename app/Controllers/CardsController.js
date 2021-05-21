import { ProxyState } from "../AppState.js";
import { cardsService } from "../Services/CardsService.js";

export class CardsController {
  constructor() {
    ProxyState.on('Cards', this.drawCards)
    this.drawCards()
  }
  drawCards() {
    console.log('draw cards')
    let template = ''
    ProxyState.Cards.forEach(card => {
      template += /*html*/`
    <div class="card-header text-center" id="card-header">
      <h3>${card.title}
        <button class="btn btn-info">
          <i class="mdi mdi-pencil-outline "></i>
        </button>
      </h3>
    </div>`
    })
    document.getElementById('card-title').innerHTML = template
  }

  addCard(event) {
    event.preventDefault();
    let form = event.target
    let formData = {
      title: form.title.value,
      // color: form.color.value,
    }
    console.log(formData)
    cardsService.addCard(formData)
    form.reset()
  }

}
