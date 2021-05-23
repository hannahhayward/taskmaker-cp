import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { generateId } from "../Utils/IdGenerator.js";

export class TasksController {
  constructor() {
    ProxyState.on('Tasks', this.drawTasks)
    this.drawTasks()
  }
  drawTasks() {
    console.log('draw tasks')
    let template = ''
    ProxyState.Tasks.forEach(task => {
      template += /*html*/ `
    <div>
     <input type="checkbox" name="completed" id="completed" onsubmit="taskComplete()" />
        <h4>${task.title}</h4>
        <p> ${task.description}</p>
     <button class="btn-danger shadow">
     <i class="mdi mdi-trash-can" onclick="app.tasksController.deleteTask()"></i>
     </button>
    </div>
      `
    })
    document.getElementById('list-tasks').innerHTML = template
  }
addTask(event){
  event.preventDefault()
  console.log(event)
  let form = event.target 
  let formData = {
    title: form.taskTitle.value,
    description: form.description.value,
    id: generateId()
  }
  console.log(formData)
  tasksService.addTask(formData)
  this.drawTasks()
  form.reset()
  this.toggleForm()
}

  toggleForm(){
    console.log('toggle')
    document.getElementById('task-form').classList.toggle('d-none')

  }
  deleteTask(taskTitle){
    console.log('delete the task fool')
  ProxyState.Tasks.filter(Tasks =>Tasks.id)
  console.log('deleted', ProxyState.Tasks)
  tasksService.deleteTask(taskTitle)
  
  }
}