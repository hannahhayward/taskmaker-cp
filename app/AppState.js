import { Card } from "./Models/Card.js"
import { Task } from "./Models/Task.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { generateId } from "./Utils/IdGenerator.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Card[]} */
  /**@type {Task[]} */
  Cards = [
    new Card('testing','Green')
  ]
Tasks = [
  new Task('test', 'i am testing this function',generateId())
]

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
