"use strict";
class Task {
    constructor(id, title, status) {
        this.id = id;
        this.title = title;
        this.status = status;
        this.date = new Date();
    }
    getTitle() {
        return this.title;
    }
    getStatus() {
        return this.status;
    }
    getDate() {
        return this.date;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    setTitle(title) {
        this.title = title;
    }
    setStatus(status) {
        this.status = status;
    }
    setDate(date) {
        this.date = date;
    }
}
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    add(model) {
        this.tasks.push(model);
    }
    remove(id) {
        const index = this.tasks.findIndex((task) => task.getId() === id);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    }
    update(model) {
        const index = this.tasks.findIndex((task) => task.getId() === model.getId());
        if (index > -1) {
            this.tasks[index] = model;
        }
    }
    complete(model) {
        model.setStatus("completed");
    }
    printAll() {
        const taskUl = document.getElementById("tasksList");
        taskUl.innerHTML = "";
        this.tasks.forEach((task) => {
            const taskLi = document.createElement("li");
            const taskButtonContainer = document.createElement("div");
            const deleteButton = document.createElement("button");
            taskLi.classList.add("task");
            taskButtonContainer.classList.add("buttons-container");
            deleteButton.setAttribute("id", "delete-btn");
            taskLi.innerHTML = task.getTitle();
            deleteButton.textContent = "Delete";
            taskUl.appendChild(taskLi);
            taskLi.appendChild(taskButtonContainer);
            taskButtonContainer.appendChild(deleteButton);
            deleteButton.addEventListener("click", () => removeTask(task.getId()));
        });
        console.log(this.tasks);
    }
}
const taskItem = new Task(0, "sutvarkyti dokumentus", "created");
const taskManager = new TaskManager();
function createTask() {
    ///paimam is input laukelio duomenys juos priskiriam kintamajam.
    // su tais duomenimis turesime sukurti nauja taskItem
    // ta task item turesime prideti i task manager
    const taskElement = document.getElementById("newTaskInput");
    const taskTitle = taskElement.value;
    const taskItem = new Task(1, taskTitle, "created");
    taskManager.add(taskItem);
    taskManager.printAll();
}
function removeTask(taskId) {
    taskManager.remove(taskId);
    taskManager.printAll();
}
const createButton = document.getElementById("createButton");
createButton.addEventListener("click", createTask);
