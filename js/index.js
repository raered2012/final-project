

let newForm = new TaskManager(0);


newForm.load();
newForm.render();

const validForm = (e) => {
  
  e.preventDefault();
  const newTaskName = document.querySelector("#task");
  const newTaskDesc = document.querySelector("#task-description");
  const newTaskAssign = document.querySelector("#assign");
  const newTaskDate = document.querySelector("#task-due-date");
  
  const tasks = newTaskName.value;
  const descriptions = newTaskDesc.value;
  const assignTo = newTaskAssign.value;
  const dueDate = newTaskDate.value;
  alertMessage();


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
  
};


const cardList = document.querySelector("#card-container");
addEventListener("click", (e) => {
  const target = e.target;
  const clssList = target.classList.item(2);
  const parentTask = target.parentElement;
  
  const clssListDelete = target.classList.item(0);
  if (clssList === "done-button") {
    const idString = parentTask.getAttribute("data-task-id");
    const taskId = parseInt(idString);
    const foundTask = newForm.getTaskById(taskId);
    foundTask.status = "Done &#128513";
    newForm.save();
    newForm.render();
  }
  if (clssListDelete === "delete-button") {
    const parentName = parentTask.getAttribute("delete-btn");
    const taskId = parseInt(parentName);
    newForm.deleteTask(taskId);
    newForm.render();
    newForm.save();
    newForm.load();
    
  }
});


