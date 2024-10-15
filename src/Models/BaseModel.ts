import { IModel } from "./IModel";
export class BaseModel implements IModel {
  private date: Date;
  private id: string;
  private status: string;
  // ==================================================================================================
  constructor(private title: string) {
    this.id = crypto.randomUUID();
    this.status = "created";
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

  setId(id: string) {
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
