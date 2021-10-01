const createTaskHtml = (tasks, descriptions, assignTo, dueDate, status, id) => {
  let markAsDone, statusStyle;
  status == "Todo"
    ? (markAsDone = "visible btn-primary")
    : (markAsDone = "invisible ");

  status == "Done" ? (statusStyle = "#00e600") : (statusStyle = "#ffbf00");
  const html2 = `
  <li  class="list-group-item ">
  <section>
    
    <!--Card Starts here-->
      <div id="card-container">
      <div class="card-container card justify-content- center shadow " style="width: 18rem">
        <div class="card-body">
          <div class="container">
            <div class="row">
              <div class="col ">
                <h5 class="card-title"></h5>
              </div>

              <!--Status bar for Pending Task-->
              
              <div class="col  status">
                <button id="card-status" type="button" class="btn btn-warning btn-sm status-bar" style = "background-color:${statusStyle}" disabled>
                ${status} 
               
                </button>
              </div>
            </div>
          </div>
          <br />

          <!--Card Body and Texts-->

        <div class="card-text">
          <h6  class="card-subtitle mb-2 text" style="font-weight: bold;">Task Name: <span id="card-task" style="font-weight: normal;">${tasks}</span> </h6>
          <p class="card-text" style="font-weight: bold;">Description: <span id="card-descriptions" style="font-weight: normal;"><br>${descriptions}</span></p>
          <p  class="card-title" style="font-weight: bold;">Assigned To: <span id="card-assignTo"style="font-weight: normal;">${assignTo}</span></p>
          <p class="card-title" style="font-weight: bold;">Due Date: <span id="card-dueDate" style="font-weight: normal;">${dueDate}</span></p>
        </div>
       
        <!--Mark as Done & Delete Buttons-->
        
        <div class="row btn-mark">
          <div id="done-button" data-task-id = '${id}' class="col">
            <a href="#" class="${markAsDone} done-button btn btn-primary btn-sm btn-mark position-absolute bottom-0 start-0 ">Mark as done</a>
          </div>
          <div class="col" delete-btn = '${id}'>
            <a href="#"  class="delete-button  btn btn-primary btn-sm btn-mark position-absolute bottom-0 end-0 ">Delete</a>
          </div>
          </div>  
        </div>
      </div>
    </div>
</section>
</li>


`;
  return html2;
};

//Task Manager Class

class TaskManager {
  constructor(currentId = 0) {
    this.currentId = currentId;
    this.tasks = [];
  }

  addTask(name, descriptions, assignTo, dueDate, status = "Todo") {
    this.currentId++;
    const task = {
      id: this.currentId,
      name: name,
      descriptions: descriptions,
      assignTo: assignTo,
      dueDate: dueDate,
      status: status,
    };
    this.tasks.push(task);
    console.log(this.tasks);
  }

  getTaskById(taskId) {
    let foundTask;
    let counter = 0;
    while (counter < this.tasks.length) {
      const task = this.tasks[counter];

      if (task.id === taskId) {
        foundTask = task;
      }
      counter++;
    }
    return foundTask;
  }
  // render method creates the task card
  render() {
    const tasksHtmlList = [];
    for (let counter = 0; counter < this.tasks.length; counter++) {
      const task = this.tasks[counter];
      const date = new Date(task.dueDate).toDateString();
      // const formattedDate = date.toDateString();
      const taskHtml = createTaskHtml(
        task.name,
        task.descriptions,
        task.assignTo,
        date,
        task.status,
        task.id
      );
      tasksHtmlList.push(taskHtml);
      const tasksHtml = tasksHtmlList.join("\n");
      document.querySelector("#card-container").innerHTML = tasksHtml;

      //Status change Todo and Done using class name visibile
      // const markAsDone = document.getElementById("done-button");
      // const statusStyle = document.getElementById("card-status");
    }
  }
  //Adding the save method to store the current task
  save() {
    const tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem("tasks", tasksJson);
    const currentId = JSON.stringify(this.currentId);
    localStorage.setItem("currentId", this.currentId);
  }

  // Load method to load from local storage
  load() {
    if (localStorage.getItem("currentId")) {
      const currentId = localStorage.getItem("currentId");
      const idParse = JSON.parse(currentId);
      this.currentId = idParse;
    }
    if (localStorage.getItem("tasks")) {
      const tasksJson2 = localStorage.getItem("tasks");
      //console.log("This is tasksJson2: " + tasksJson2);
      const parse = JSON.parse(tasksJson2);

      this.tasks = parse;
    }
  }
  deleteTask(taskId) {
    console.log("taskID:", taskId)
    //let newTask = [];

    //as the loop iterates through the tasks array
    for (let counter = 0; counter < this.tasks.length; counter++) {
      //it should check if the id of the current task is the same as the taskId pushed to the deleteTask method, which is the task we want to delete
      //console.log("task[counter].id:", task[counter].id);
      if (this.tasks[counter].id === taskId) {
        //if the current id is equal to the taskId passed in
        //then will splice at that index and create an array that excludes that task
        //splice(start of the array, amount to be deleted)
        this.tasks.splice(counter, 1);
        //newTask.push(task);
        //this.tasks = newTask;
      } 
    }
    //console.log(newTask);
  }
}

// do"dsfa"cument.querySelector(".invisible").className += "visable";
// console.log(document.querySelector(".done-button"));

//Changing backgroundColor and style when Mark as don clicked
// document.querySelector(".btn-warning").style.backgroundColor =
//   "ForestGreen";
// document.querySelector(".btn-warning").style.color = "white";
// console.log(
//   "Looking status in getTaskbyId: " + newForm.getTaskById(task.status)
// );
// markAsDone.className = "btn-success";

//if I create three tasks, two can be deleted and then the last is left until the page is refreshed. So it's like it's being deleted, but not rendered again until after the page refreshes
//ideas
//do we need to call render again?
//is there an issue with the render method?
//try messing with the order of the last few method calls of the event handler
//is there a way I can see visually the methods being called, other than on the index.js file?
//when tasks.length is = to 1, does it even run the delete method?