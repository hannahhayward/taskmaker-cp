import { generateId } from "../Utils/IdGenerator.js"

export class Task{
  constructor(title, description, id){
    this.id = id || generateId()
    this.title = title
    this.description = description
  }
  get Task(){
   return  /*html*/ `
   <div class="card add-task">
     <div>
       <div class="card d-none" onsubmit="app.tasksController.addTask(event)" >
           <form>
               <div class="form-group">
                   <label for="task-title" class="sr-only">Title:</label>
                   <input type="text" minlength="3" maxlength="25"
                       class="form-control" placeholder="Task Title" required>
               </div>
               <div class="form-group">
                   <label for="description" class="sr-only">Description:</label>
                   <input type="text" minlength="3" maxlength="50"
                       class="form-control" placeholder="Task Description">
               </div>
               <div>
                   <button class="btn btn-success">create</button>
               </div>
           </form>
       </div>
       <button class="btn btn-primary w-25" id="Add Task"
           onclick="app.tasksController.toggleForm()">
           <i class="mdi mdi-plus-thick"></i>
       </button>
   </div>
</div>`
  }
}