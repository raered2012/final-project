const assert = chai.assert;
import { TaskManager } from "../js/taskmanager.js";


describe("TaskManager web application", () => {
  it("Checks if Task is created", () => {
    
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
    
    const init = new TaskManager();
    
    const result = init.addTask(name, descriptions, assignTo, dueDate);
    const result2 = init.addTask["name"];
    const expected2 = expected["name"];
    
    assert.equal(result2, expected2);
  });
  it("Delete task fro Task Manager app", () => {
    
    const taskId = 1;
    const currentId = 1;
    
    const init = new TaskManager();
    if (init.deleteTask(taskId) === currentId) {
    }
    
    assert.equal(taskId, currentId);
  });
  it("Getting task by its ID", () => {
    
    const foundTask = 1;
    const currentId = 1;
    
    const init = new TaskManager();
    if (init.getTaskById(foundTask) === currentId) {
    }
    
    assert.equal(taskId, currentId);
  });
});

mocha.run();