const assert = chai.assert;
// const T = require("../js/taskmanager.js");
import { TaskManager } from "../js/taskmanager.js";

// describe("greetings", function () {
//   it("should say hello", function () {
//     assert.equal("hello", "hello");
//   });
// });
// // mocha.run();

// const TaskManager = require("../js/taskmanager");

describe("Task Manager web application", () => {
  it("Checks if Task is created", () => {
    //setup tasks
    const expected = {
      name: "Wash Dishes",
      descriptions: "Do the dishes befor dinner",
      assignTo: "Raven",
      dueDate: "10/1/2021",
    };
    const name = "Wash Dishes";
    const descriptions = "Do the dishes befor dinner";
    const assignTo = "Raven";
    const dueDate = "10/1/2021";

    //Exercise
    const init = new TaskManager();
    const newTask = init.addTask(name, descriptions, assignTo, dueDate);
    {
      const task = {
        name: name,
        descriptions: descriptions,
        assignTo: assignTo,
        dueDate: dueDate,
      };
      const result = task[name];
      assert.deepEqual(result, expected[name]);
    }

    //Verify
  });
  it("Delete task fro Task Manager app", () => {
    //setup
    const taskId = 1;
    const currentId = 1;
    //excerise
    const init = new TaskManager();
    const result = init.deleteTask(taskId);
    if (result === currentId) {
    }
    //Verify
    assert.equal(taskId, currentId);
  });

  it("Getting task by its ID", () => {
    //setup
    const init = new TaskManager();
    const foundTaskId = localStorage.getItem("currentId");
    const taskId = 4;
    // const currentId = 1;
    //excerise
    if (init.getTaskById(taskId) === foundTaskId) {
      //Verify
    }
    assert.equal(taskId, foundTaskId);
  });
});

mocha.run();
