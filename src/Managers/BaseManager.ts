import { IManager } from "../Managers/IManager";
import { Task } from "../Models/Task";

export class BaseManager implements IManager {
  private tasks: Task[] = [];
  add(model: Task) {
    this.tasks.push(model);
  }

  remove(id: string) {
    const index = this.tasks.findIndex((task: Task) => task.getId() === id);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  update(model: Task) {
    const index = this.tasks.findIndex((task: Task) => task.getId() === model.getId());
    if (index > -1) {
      this.tasks[index] = model;
    }
  }

  complete(model: Task) {
    model.setStatus("completed");
  }

  // iskaidyti printAll
  printAll() {
    const taskUl = document.getElementById("tasksList") as HTMLUListElement;

    taskUl.innerHTML = "";
    this.tasks.forEach((task) => {
      const taskLi = document.createElement("li") as HTMLLIElement;
      const taskButtonContainer = document.createElement("div") as HTMLDivElement;
      const deleteButton = document.createElement("button") as HTMLButtonElement;

      taskLi.classList.add("task");
      taskButtonContainer.classList.add("buttons-container");
      deleteButton.setAttribute("id", "delete-btn");

      taskLi.innerHTML = task.getTitle();
      deleteButton.textContent = "Delete";

      taskUl.appendChild(taskLi);
      taskLi.appendChild(taskButtonContainer);
      taskButtonContainer.appendChild(deleteButton);

      deleteButton.addEventListener("click", () => this.remove(task.getId()));
    });
  }
}
