# Student Productivity Application with Angular, Typescript and Node.js

## Name:

Britley Desir, Zachary Gould, Sara Mehdinia, Hiroki Sato, Nicole Ponce

## Narrative:

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
    - 
3. Assignment List Component
    - Loads a list of completed and in-progress assignments. 
    - 
4. Course List Component
    - Contains a list of courses that user created with course create form in course create component. 
    - Enables deletion and edits of the course from course list. 
5. Course Create Component
6. Calendar Component
7. Timer Component


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


## Demo


