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

  let newForm = new TaskManager(0);
  newForm.addTask(tasks, descriptions, assignTo, dueDate);
  console.log(newForm.tasks[0]);
  newForm.render();

  console.log(newForm.getTaskById(0));
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

// "event" here is the event parameter
let taskLists = document.querySelector("#card-container");
//let statusbtn = taskLists.status;
// let changeStatus = taskLists.
taskLists.addEventListener("click", (event) => {
  if (event.target.taskLists == "done-button") {
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
