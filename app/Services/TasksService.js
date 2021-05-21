import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";


class TasksService{
  addTask(formData){
    let newTask = new Task(formData.title. formData.description)
    ProxyState.Tasks.unshift(newTask)
  }
}
export const tasksService = new TasksService()