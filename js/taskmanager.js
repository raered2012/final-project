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
}
//console.log(TaskManager.currentId);

//export class { TaskManager };