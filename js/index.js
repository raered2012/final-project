//import { TaskManager } from "./taskManager.js";

const validForm = (e) => {
  //console.log(e);
  e.preventDefault();
  const newTaskName = document.querySelector("#task");
  const newTaskDesc = document.querySelector("#task-description");
  const newTaskAssign = document.querySelector("#assign");
  const newTaskdate = document.querySelector("#task-due-date");
  //The value the form
  const tasks = newTaskName.value;
  const descriptions = newTaskDesc.value;
  const assignTo = newTaskAssign.value;
  const dueDate = newTaskdate.value;
  alertMessage();

  const newForm = new TaskManager();
  const addNewTasks = newForm.addTask(tasks, descriptions, assignTo, dueDate);
  newForm.render();
  console.log(newForm.tasks);
  console.log(newForm.render());
  //tasks.TaskManager.addTask();
  // function clear() {
  // }

  const date = new Date(dueDate).toDateString();
  console.log(tasks, descriptions, assignTo, date);
  document.querySelector("#card-task").innerHTML = tasks;

  document.querySelector("#card-descriptions").innerHTML = descriptions;
  document.querySelector("#card-assignTo").innerHTML = assignTo;
  document.querySelector("#card-dueDate").innerHTML = dueDate;

  //console.log(date.toDateString());
};
const alertMessage = () => {
  let name = document.querySelector("#task").value;
  let description = document.querySelector("#task-description").value;
  let assignTo = document.querySelector("#assign").value;
  let dueDate = document.querySelector("#task-due-date").value;
  if (name === "") {
    window.alert("You have not enterd name for your task");
  } else if (description === "") {
    window.alert("You have not enterd description for your task");
  } else if (assignTo === "") {
    window.alert("You have not assign this task");
  } else if (dueDate === "") {
    window.alert("You have not select the date");
  } else {
    window.alert("Your task has been submitted successfully");
  }
  document.taskform.reset();
  //clear();
};

const taskHtml = createTaskHtml(
  "Clean the kitchen",
  "Take out the trash, clean out the fridge, and wash the dishes",
  "Justin",
  "2021-09-30",
  "TODO"
);

console.log(taskHtml);
