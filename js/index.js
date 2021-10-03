//import { TaskManager } from "./taskManager.js";

let newForm = new TaskManager(0);

// calling load method
newForm.load();
newForm.render();
// Add task method
const validForm = (e) => {
  //console.log(e);
  e.preventDefault();
  const newTaskName = document.querySelector("#task");
  const newTaskDesc = document.querySelector("#task-description");
  const newTaskAssign = document.querySelector("#assign");
  const newTaskDate = document.querySelector("#task-due-date");
  //The value the form
  const tasks = newTaskName.value;
  const descriptions = newTaskDesc.value;
  const assignTo = newTaskAssign.value;
  const dueDate = newTaskDate.value;
  alertMessage();

  // create a new task with its values
  // console.log("current id in Taskmanager:" + newForm["currentId"]);
  // Creating new task on createhtml
  // newForm.render();
  //console.log(newForm.tasks[0]);
};
const alertMessage = () => {
  let name = document.querySelector("#task").value;
  let description = document.querySelector("#task-description").value;
  let assignTo = document.querySelector("#assign").value;
  let dueDate = document.querySelector("#task-due-date").value;

  if (name === "" || name === null) {
    window.alert("You have not entered name for your task");
  } else if (description === "" || description === null) {
    window.alert("You have not entered description for your task");
  } else if (assignTo === "" || assignTo === null) {
    window.alert("You have not assign this task");
  } else if (dueDate === "" || dueDate === null) {
    window.alert("You have not select the date");
  } else {
    window.alert("Your task has been submitted successfully");
    newForm.addTask(name, description, assignTo, dueDate);
    newForm.save();
    newForm.render();
  }
  document.taskform.reset();
  //clear();
};

// "event" here is the event parameter
// Event listener for Mark as done
const cardList = document.querySelector("#card-container");
addEventListener("click", (e) => {
  const target = e.target;
  const clssList = target.classList.item(2);
  const parentTask = target.parentElement;
  //console.log(parentTask);
  const clssListDelete = target.classList.item(0);
  // check if mark as done button is clicked
  if (clssList === "done-button") {
    //console.log(parentTask);
    const idString = parentTask.getAttribute("data-task-id");
    console.log(idString);
    const taskId = parseInt(idString);
    const foundTask = newForm.getTaskById(taskId);
    console.log(taskId, foundTask.id);
    foundTask.status = "Done&#128513;";
    newForm.save();
    newForm.render();
  }
  if (clssListDelete === "delete-button") {
    const parentName = parentTask.getAttribute("delete-btn");
    const taskId = parseInt(parentName);
    console.log("taskId of Delete button" , taskId);
    newForm.deleteTask(taskId);
    newForm.render();
    newForm.save();
    newForm.load();
    
  }
});

// const todoStatus = (document.querySelector("#card-status").innerHTML =
//   "Done");
