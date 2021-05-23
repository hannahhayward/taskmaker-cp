export class Card{
  constructor(title,color){
    this.title = title
    this.color = color
  }
  get Template(){
    return /*html*/ `     
  <div class="col-4">
   <div class="card ${Card.color}" id="card" >
    <div class="card-header text-center" id="card-header">
      <h3>${Card.title}
        <button class="btn btn-info">
          <i class="mdi mdi-pencil-outline "></i>
        </button>
      </h3>
    </div>
        <!-- //NOTE - make this a card list from booty// -->
        <div class="card-body text-center" id="list-tasks">
            <p>
                <input type="checkbox" name="completed" id="completed" onsubmit="taskComplete()" />
                card list here
                <button class="btn-danger shadow">
                    <i class="mdi mdi-trash-can" onclick="app.tasksController.deleteTask()"></i>
                </button>
            </p>
        </div>
        <div class="card-footer delete-list">
            <button class="btn btn-danger">
                <i class="mdi mdi-trash-can"></i>
            </button>
        </div>
    </div>
  </div>`
  }
}

// ==blue? 'bg-primary': card.color == black? 'bg-dark' : card.color == gray ? 'bg-secondary' : card.color == red ? 'bg-danger' : card.color == green ? 'bg-success' : card.color == yellow ? 'bg-warning' : card.color == teal ? 'bg-info' : card.color == none ? 'bg-light': ""