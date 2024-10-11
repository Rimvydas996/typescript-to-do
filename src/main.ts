interface IModel {
  getTitle(): string;
  getStatus(): string;
  getDate(): Date;
}

interface IManager {
  add(model: IModel): void;
  remove(id: number): void;
  update(model: IModel): void;
}

class Task implements IModel {
  private date: Date;
  constructor(
    private id: number,
    private title: string,
    private status: string
  ) {
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

  setId(id: number) {
    this.id = id;
  }

  setTitle(title: string) {
    this.title = title;
  }

  setStatus(status: string) {
    this.status = status;
  }

  setDate(date: Date) {
    this.date = date;
  }

  // completeTask() {
  //   this.status = "completed";
  // }
}

class TaskManager implements IManager {
  private tasks: Task[] = [];
  add(model: Task) {
    this.tasks.push(model);
  }

  remove(id: number) {
    const index = this.tasks.findIndex((task: Task) => task.getId() === id);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  update(model: Task) {
    const index = this.tasks.findIndex(
      (task: Task) => task.getId() === model.getId()
    );
    if (index > -1) {
      this.tasks[index] = model;
    }
  }

  complete(model: Task) {
    model.setStatus("completed");
  }

  printAll() {
    const taskUl = document.getElementById("tasksList") as HTMLUListElement;
    taskUl.innerHTML = "";
    this.tasks.forEach((task) => {
      const taskLi = document.createElement("li") as HTMLLIElement;
      taskLi.innerHTML = task.getTitle();
      taskUl.appendChild(taskLi);
    });

    console.log(this.tasks);
  }
}

const taskItem = new Task(0, "sutvarkyti dokumentus", "created");
const taskManager = new TaskManager();

function createTask(): void {
  ///paimam is input laukelio duomenys juos priskiriam kintamajam.
  // su tais duomenimis turesime sukurti nauja taskItem
  // ta task item turesime prideti i task manager
  const taskElement = document.getElementById(
    "newTaskInput"
  ) as HTMLInputElement;
  const taskTitle = taskElement.value;
  const taskItem = new Task(1, taskTitle, "created");
  taskManager.add(taskItem);
  taskManager.printAll();
}

const createButton = document.getElementById(
  "createButton"
) as HTMLButtonElement;
createButton.addEventListener("click", createTask);
