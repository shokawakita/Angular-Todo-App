export class Todo {
  id: number;
  title: string;
  isChecked: boolean;
  edit: boolean;

  constructor() {
    this.id = 0;
    this.title = "";
    this.isChecked = false;
    this.edit = false;
  }
}
