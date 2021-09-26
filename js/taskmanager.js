const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
  const html = `
    <li class="list-group-item">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${tasks}</h5>
            <span class="badge badge-danger">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>${assignedTo}</small>
            <small>${dueDate}</small>
        </div>
        <p>${description}</p>
    </li>
`;
  return html;
};

//Task Manager Class

class TaskManager {
  constructor(currentId = 0, tasks) {
    this.currentId = currentId;
    this.tasks = [];
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
  render() {
    const tasksHtmlList = [];

    while (this.currentId < this.tasks.length) {
      const date = new Date(dueDate);
      const formattedDate = date.toDateString();
      const taskHtml = createTaskHtml(this.tasks, formattedDate);
      tasksHtmlList.push(taskHtml);
      const tasksHtml = tasksHtmlList.join("\n");
    }

    document.querySelector("#card-task").innerHTML = this.tasks;
    document.querySelector("#card-descriptions").innerHTML = this.description;
    document.querySelector("#card-assignTo").innerHTML = this.assignTo;
    // document.getElementById("#card-dueDate").innerHTML = this.dueDate;
    // document.getElementById("#card-status").innerHTML = this.status;
  }
}

//export class { TaskManager };
