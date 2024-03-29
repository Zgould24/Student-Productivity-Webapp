# Student Productivity Application with Angular, Typescript and Node.js

## Name:

Britley Desir, Zachary Gould, Sara Mehdinia, Hiroki Sato, Nicole Ponce

## Narrative:
Our group member was interested in learning full-stack web application development through development of applications that are fun to develop and may benefit Rollins community or students. As we considered different types of web applications such as department portfolio websites, web arcade games, or student productivity applications. We agreed to develop a productivity application which boosts the users’ productivity. 
Through our discussion, we decided on functionalities of this application which must be implemented as follows:
- Users can create a list of courses that they are taking.
- Users can set and use the countdown timer that is provided by the application.
- Users can keep track of their assignments by creating a list of assignments. 
- Users can look at a calendar.
- Users can schedule events on their personal calendar. 
- Application should protect the user’s data with authentication and authorization.

## Applied/Learned Technical Skills

- Front-end related technical skills
    - Angular 
        - Being able to create angular components with typescript code
        - Application of Observer pattern with Angular service, Subscription and Subject.
        - Connecting to back-end through specific HTTP request by using HTTPClient.
        - Routing between differnt pages and different components. 
        - Typescript
        - HTML and CSS 
- Back-end related technical skills
    - Node.js and Express
    - HTTP Request and Protocol 
    - Bcryptjs
    - MongoDB Atlas, Mongoose
    - jsonwebtoken


## Components
Angular components are most basic UI building blocks of Angular app. We can design components with HTML and CSS, implement some functionality with Typescript. For our application, components are divided into following eight components. 
1. Login Component
    - Allows users to create an account for this application for authentication, authorization, and data binding purpose. 
    - Allows user to type in their user email and password. 
2. Assignment Create Component
    - Creates assignment with its course name, name of assignment and due date.
3. Assignment List Component
    - Loads a list of completed and in-progress assignments. 
4. Course List Component
    - Contains a list of courses that user created with course create form in course create component. 
    - Enables deletion and edits of the course from course list. 
5. Course Create Component
    - Prompts user to input information for course title, instructor name, class meeting time, office hours of professor and Memo for the class. 
6. Calendar Component
    - Displays a interactive calendar
7. Timer Component
    - Enables users to set, start, and stop a timer

## Necessary Imports & environmental setup (for node module)
This project required various imports for some of our front-end components and for our back-end service with javascript. Libraries are installed with npm install command on your CLI.
### Create a node modules

First, move inside the Student-Productivity folder under this project. IT IS VERY IMPORTANT TO MOVE TO THE ANGULAR DIRECTORY TO EXECUTE THIS COMMAND. 
```
npm install -g node-modules
```
This allows you to create a fresh node-module. 
Then we run 
```
npm install
```

### Some front-end component imports

```
npm install ngx-countdown --save
```
```
npm install --save @fullcalendar/angular @fullcalendar/daygrid @fullcalendar/interaction
```

### Back-end related npm installs.

```
npm install express
```
```
npm install mongoose
```
```
npm install --save mongoose-unique-validator
```
```
npm install body-parser
```
```
npm install jsonwebtoken
```
```
npm install bcryptjs
```

## Some angular concepts
### Angular Components
  Angular component is a basic user interface building block which consits of:
1. A HTML file which templates what is going to be on the page
2. A typescript class which determines its behavior
3. A CSS selector which helps us define how the component is going to be called and used.
4. A CSS file to determine the styling. 

  CSS file and selector is completely different. While **CSS file is optional** for styling the component, **CSS selector is required** for every angular component. It functions as a tag in HTML script and whenever it is found, selector tells Angular to instantiate the component. 
  To declare that the class should be a component, we use ```@Component```. 


### Angular Service
  Angular service allows encapsulation of common functionalities which is used across multiple different part of angular application. This allows us to reduce redundancy in our programming and promots code reuse especially to access, and store data.   In order for us developers to reuse the functionalities, we use ```@Injectable``` notation and inject the service into component through constructor of the component.   





## Demo


