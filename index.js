const inquirer = require('inquirer');
const fs = require('fs');

const generatemarkdowncontent = ({ name, area, github, linkedin }) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Manager name is ${name}</h1>
    <p class="lead">The empolyee ID number is ${ID}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">The employee email is ${email}</li>
      <li class="list-group-item">The office number is ${officeNumber}</li>
    </ul>
  </div>
</div>
</body>
</html>`;


// comment
inquirer
  .prompt([
    {
        type: 'input', 
        name: 'name',
        message: 'Please type the team managers name.',
    },
    {
        type:"input",
        name: "ID",
        message:"What is the employees ID?",
    },
    {
        type: "input",
        name: "email",
        message:"What is the employee email address?",
    },
    {
        type: "input",
        name: "officeNumber",
        message:"What is the office number?",
    },
    {
        type: "input",
        name: "github",
        message:"What is your GitHub username?",
    },
    {
      type: "input",
      name: "linkedin",
      message:"Enter your LinkedIn URL",
  },
  ])
  .then((answers) => {
    // const htmlPageContent = generatemarkdowncontent(answers);
    // console.log(htmlPageContent)

    fs.writeFile('index.html', generatemarkdowncontent(answers), (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });