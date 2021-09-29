const createTaskHtml = (tasks, descriptions, assignTo, dueDate, status, id) => {
  const html2 = `
  <li data-task-id = '${id}' class="list-group-item ">
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
                <button id="card-status" type="button" class="btn btn-warning btn-sm status-bar" disabled>
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
          <div id="done-button" class="col">
            <a href="#" class="done-button btn btn-primary btn-sm btn-mark position-absolute bottom-0 start-0 ">Mark as done</a>
          </div>
          <div class="col">
            <a href="#" class="btn btn-primary btn-sm btn-mark position-absolute bottom-0 end-0 ">Delete</a>
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
      status: status
    }
    this.tasks.push(task);
  };

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
      console.log(foundTask);
      console.log(taskId);
      return foundTask;
      
  }
    
  
  render() {
    const tasksHtmlList = [];
    for (let counter = 0; counter < this.tasks.length; counter++) {
      const task = this.tasks[counter];
      const date = new Date(task.dueDate).toDateString();
      // const formattedDate = date.toDateString();
      const taskHtml = 
      createTaskHtml(
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
    }
    // let counter = 0;
    // while (counter < this.tasks.length) {
    //   const task = this.tasks[counter];
    //   const date = new Date(task.dueDate).toDateString();
    //   // const formattedDate = date.toDateString();
    //   const taskHtml = createTaskHtml(
    //     task.name,
    //     task.descriptions,
    //     task.assignTo,
    //     date,
    //     task.status,
    //     task.id
    //   );
    //   tasksHtmlList.push(taskHtml);
    //   const tasksHtml = tasksHtmlList.join("\n");
    //   document.querySelector("#card-container").innerHTML = tasksHtml;
    //   counter++;
    // }
    
  };
 
};
//export class { TaskManager };

// document.querySelector("#card-task").innerHTML = tasks[1];
// document.querySelector("#card-descriptions").innerHTML = this.description;
// document.querySelector("#card-assignTo").innerHTML = this.assignTo;
// document.querySelector("#card-dueDate").innerHTML = this.date;
// document.querySelector("#card-status").innerHTML = this.status;
