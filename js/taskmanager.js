const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
  const html = (`
    <li class="list-group-item">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge badge-danger">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>${assignedTo}</small>
            <small>${dueDate}</small>
        </div>
        <p>${description}</p>
    </li>
`)
  return html;
}

class TaskManager {
  constructor(currentId = 0) {
    //this.id = [];
    this.currentId = currentId;
    this.tasks = [];
    // this.descriptions = [descriptions];
    // this.assignTo = [assignTo];
    // this.dueDate = [dueDate];
    // this.status = ["Todo"];
    //console.log(task);
  }

  addTask(tasks, descriptions, assignTo, dueDate, status = "Todo") {
    this.currentId++;
    this.tasks.push({
      id: this.currentId,
      tasks: tasks,
      descriptions: descriptions,
      assignTo: assignTo,
      dueDate: dueDate,
      status: status,
    });
  }


//console.log(TaskManager.currentId);

//export class { TaskManager };