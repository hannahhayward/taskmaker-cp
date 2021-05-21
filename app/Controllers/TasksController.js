import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";

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
     <i class="mdi mdi-trash-can" onclick="deleteTask()"></i>
     </button>
    </div>
      `
    })
  }
addTask(event){
  event.preventDefault()
  let form = event.target 
  let formData = {
    title: form.title.value,
    description: form.description.value,
  }
  console.log('added task')
  tasksService.addTask(formData)
  form.reset()
  this.toggleForm()
}

  toggleForm(){
    document.getElementById('task-form').classList.toggle('d-none')

  }
}