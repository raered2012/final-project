//import { TaskManager } from "./taskManager.js";

let newForm = new TaskManager(0);

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

  
  newForm.addTask(tasks, descriptions, assignTo, dueDate);
  console.log(newForm);
  newForm.render();

//console.log(newForm.tasks[0]);

  console.log("getTaskById1: ", newForm.getTaskById());
  //console.log("getTaskById2: ", newForm.getTaskById());
  // console.log(newForm.render());
  //tasks.TaskManager.addTask();
  // function clear() {
  // }
  // const date = new Date(dueDate).toDateString();
  // console.log(date);
  // console.log(tasks, descriptions, assignTo, dueDate);
  // document.querySelector("#card-task").innerHTML = tasks;

  // document.querySelector("#card-descriptions").innerHTML = descriptions;
  // document.querySelector("#card-assignTo").innerHTML = assignTo;
  // document.querySelector("#card-dueDate").innerHTML = dueDate;

  //console.log(date.toDateString());
};
const alertMessage = () => {
  let name = document.querySelector("#task").value;
  let description = document.querySelector("#task-description").value;
  let assignTo = document.querySelector("#assign").value;
  let dueDate = document.querySelector("#task-due-date").value;
  if (name === "") {
    window.alert("You have not entered name for your task");
  } else if (description === "") {
    window.alert("You have not entered description for your task");
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

// "event" here is the event parameter
const cardList = document.querySelector("card-container");
addEventListener("click", (e) => {
  const target = e.target;
  const clssList = target.classList.item(0);
  const parentTask = target.parentElement;
  if (clssList === "done-button") {
    console.log("Mark as done clicked");
    console.log(parentTask);
  }
});
//"event" here is the event parameter
// let markAsDone = document.querySelector("div.card-container");
// console.log(markAsDone);

// markAsDone.addEventListener("click", (event) => {
//   if (markAsDone === "done-button") {
//     console.log("mark as done clicked");
//   }
// });
