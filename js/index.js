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
  //console.log(name);
  // console.log(description);
  // console.log(assignTo);
  // console.log(dueDate);
  let newForm = new TaskManager();
  newForm.addTask(tasks, descriptions, assignTo, dueDate, "pending");
  alertMessage();
  console.log(newForm.tasks[0]);
  // const newTask = new TaskManager();
  // newTask.addTask(
  //   name,
  //   description,
  //   assignTo,
  //   dueDate
  //   //"TODO"
  // );
  // console.log(newTask.tasks);
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
};

// console.log(newTask);

// let newTask2 = new TaskManager();
// newTask.addTask(
//   "task 2",
//   "task description 2",
//   "Raven++",
//   "2020-09-25"
//   //"TODO"
// );

// console.log(newTask);

// let newTask2 = new TaskManager();
// newTask2.addTask(
//   "new task2",
//   "new task description",
//   "Raven",
//   "2020-09-25",
//   "TODO"
// );
// console.log(newTask2.currentId, newTask2.tasks);

//let newAddTask = new newAddTask()
/*newAddTask = {
  currentId: 0,
  tasks: "new task added",
  descriptions: "Complete Task 1 - 4",
  assignTo: "Raven",
  dueDate: "2020-09-20",
  status: "",
};*/

// newTask = {
//   id: 0,
//   tasks: "Complete and test project for Sprint 1",
// descriptions: "Complete Task 1 - 4",
// assignTo: "Raven",
// dueDate: "2020-09-20",
// status: "TODO",
// };
// // newTask.TaskManager();
// console.log(newTask);

// document.getElementById("submit").addEventListener("click");
