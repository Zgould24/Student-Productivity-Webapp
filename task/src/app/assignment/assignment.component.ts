import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent{

  homeworks: any;
  constructor() { }

  ngOnInit(): void {

    this.homeworks = [{
      course:'CMS484',
      assignment:'Writing Assignment # 4',
      dueDate: '04/04/2022',
      id: 0
    },
    {
      course:'CMS375',
      assignment:'Writing Assignment # 4',
      dueDate: '04/04/2022',
      id: 0
    },
    {
      course:'CMS230',
      assignment:'Writing Assignment # 4',
      dueDate: '04/04/2022',
      id: 0
    }];
    console.log(this.homeworks);
  }

}


// //getting the values from the html inputs
// var txtCourse = document.getElementById('course');
// var txtAssignment = document.getElementById('assignment');
// var txtDueDate = document.getElementById('dueDate');

// //create assignment function
// function create() {
//   //creating the assignment structure
//   const theAssignment = new Assignment(txtCourse.value, txtAssignment.value, txtDueDate.value);
//   console.log('theAssignment:', theAssignment);

//   //push the assignments to the array
//   assignments.push(theAssignment);
//   console.log(assignments);

//   //call the clear function
//   clear();

//   //display on the console
//   console.log("Complete Assignment Function");

//   //display the assignments on HTML
//   //displayList(theAssignment);
//   displayTable(theAssignment);
// }


// //resets form by setting values to null
// function clear() {
//   txtCourse.value = "";
//   txtAssignment.value = "";
//   txtDueDate.value = "";
// }

// function status() {
//   //iterate over the array to display all the assignments
//   for (i = 0; i < assignments.length; i++) {
//       console.log(assignments[i].assignment);
//   }

// }

// function displayList(anAssignment) {
//   //select the HTML Element assignmentList
//   var list = document.getElementById('assignmentList');

//   //create the li code for the assignment
//   var li = `
  
//   <li id="${anAssignment.id}"> 
//   Course: ${anAssignment.course}, 
//   Assignment: ${anAssignment.assignment}, 
//   Due Date: ${anAssignment.dueDate} 
//   <button onclick="completeAssignment(${anAssignment.id});"> Complete Assignment </button> </li>
//   `;

//   list.innerHTML += li;
// }

// function displayTable(anAssignment) {
//   console.log('assignment:', anAssignment)
//   var table = document.getElementById('assignmentTable');

//   var td = `
//   <tr id=${anAssignment.id}>
//       <td>${anAssignment.course}</td>
//       <td>${anAssignment.assignment}</td>
//       <td>${anAssignment.dueDate}</td>
//       <td><button class="complete" onclick="completeAssignment(${anAssignment.id})"> Comeplete </button></td>
//   </tr>
//   `;

//   table.innerHTML += td;

// }

// //test to see if its working
// displayTable(hw1);
// displayTable(hw2);

// function completeAssignment(assignmentId) {
//   console.log("Completed assignment ", assignmentId);

//   //add an id to the tr/li and add a complete button
//   var indexComplete;
//   var td = document.getElementById(assignmentId);

//   //search the array
//   for (var i = 0; i < assignments.length; i++) {
//       var selectedId = assignments[i].id;
//       if (selectedId === assignmentId) {
//           indexComplete = i;
//       }
//   }

//   //delete from array splice()
//   assignments.splice(indexComplete, 1);

//   //delete from the html (remove)
//   td.remove();
// }

// function search() {
//   var searching = document.getElementById("searchAssignment").value;
//   console.log(searching);

//   for (var i = 0; i < assignments.length; i++) {
//       var foundAssignment = assignments[i];
//       if (foundAssignment.assignment.toLowerCase() == searching.toLowerCase()) {
//           //do something to highlight the result if found on the table(border, background)
//           //use the id setAttribute('class/name','')
//           //add css to input and to the table (bootstrap)
//           console.log("Found assignment.");
//       } else {
//           console.log("Assignment hasn't been created or has been completed.");
//       }
//   }


// }

