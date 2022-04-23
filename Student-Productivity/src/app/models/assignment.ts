// Constructor for an Assignment
//  All of them were made optional that way the code wouldn't break
//  if the user didn't enter it

export class Assignment {

  constructor(public course?: String, public assignment?: String, public dueDate?: String, public id?: Number) {
      this.course = course;
      this.assignment = assignment;
      this.dueDate = dueDate;
      this.id = 0;
    }
}