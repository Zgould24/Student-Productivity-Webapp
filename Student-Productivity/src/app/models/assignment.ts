export class Assignment {

  constructor(public course?: String, public assignment?: String, public dueDate?: String, public id?: Number) {
      this.course = course;
      this.assignment = assignment;
      this.dueDate = dueDate;
      this.id = 0;
    }
}