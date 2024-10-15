import { Task } from "./Models/Task.js";
import { User } from "./Models/User.js";
import { TaskManager } from "./Managers/TaskManager.js";

// ==================================================================================================

// const taskItem = new Task(0, "sutvarkyti dokumentus", "created");
const taskManager = new TaskManager();

function createTask(): void {
  ///paimam is input laukelio duomenys juos priskiriam kintamajam.
  // su tais duomenimis turesime sukurti nauja taskItem
  // ta task item turesime prideti i task manager
  const taskElement = document.getElementById("newTaskInput") as HTMLInputElement;
  const taskTitle: string = taskElement.value;
  const kamPriklauso = new User("kamPriklauso");
  const taskItem = new Task(taskTitle, kamPriklauso.getId());

  taskManager.add(taskItem);
  taskManager.printAll();

  taskElement.value = "";
  taskElement.focus();
}

function removeTask(taskId: string): void {
  taskManager.remove(taskId);
  taskManager.printAll();
}

const createButton = document.getElementById("createButton") as HTMLButtonElement;
const taskElementInput = document.getElementById("newTaskInput") as HTMLInputElement;

createButton.addEventListener("click", createTask);
taskElementInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    createTask();
  }
});
