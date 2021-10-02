const assert = chai.assert;
import { TaskManager } from "../js/taskmanager.js";

// describe("greetings", function () {
//   it("should say hello", function () {
//     assert.equal("hello", "hello");
//   });
// });
// // mocha.run();

// const TaskManager = require("../js/taskmanager");

describe("TaskManager web application", () => {
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
    // const result = init.addTask(name, descriptions, assignTo, dueDate);
    const result = init.addTask(name, descriptions, assignTo, dueDate);
    const result2 = init.addTask["name"];
    const expected2 = expected["name"];
    //Verify
    // assert.equal(init.addTask["name"], expected["name"]);
    assert.equal(result2, expected2);
  });
  it("Delete task fro Task Manager app", () => {
    //setup
    const taskId = 1;
    const currentId = 1;
    //excerise
    const init = new TaskManager();
    if (init.deleteTask(taskId) === currentId) {
    }
    //Verify
    assert.equal(taskId, currentId);
  });
  it("Getting task by its ID", () => {
    //setup
    const foundTask = 1;
    const currentId = 1;
    //excerise
    const init = new TaskManager();
    if (init.getTaskById(foundTask) === currentId) {
    }
    //Verify
    assert.equal(taskId, currentId);
  });
});

mocha.run();
