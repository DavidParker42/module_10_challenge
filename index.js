const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const generateHtml = require("./src/create.js");



const teamMembers = [];



const generateManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Please type the team managers name.",
      },
      {
        type: "input",
        name: "managerID",
        message: "Please type the team managers employee ID.",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Please type the team managers email address.",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "Please type the team managers office number.",
      },
    ])

    .then((output) => {
      console.log(output);
      let manager = new Manager(output.managerID, output.managerName, output.managerEmail, output.managerOfficeNumber)
      teamMembers.push(manager);
    });
};

const generateEngineer = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "Please type the team engineers name.",
    },
    {
      type: "input",
      name: "engineerID",
      message: "Please type the team engineers employee ID.",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "Please type the team engineers email address.",
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "Please type the team engineers github username.",
    },
    
  ])
  .then((output) => {
    console.log(output);
    let engineer = new Engineer(output.engineerID, output.engineerName, output.engineerEmail, output.engineerGithub)
    teamMembers.push(engineer);
  });

const generateIntern = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "Please type the team interns name.",
    },
    {
      type: "input",
      name: "internID",
      message: "Please type the team interns employee ID.",
    },
    {
      type: "input",
      name: "internEmail",
      message: "Please type the team interns email address.",
    },
    {
      type: "input",
      name: "internSchool",
      message: "Please type the team interns school name.",
    },
    
  ]).then((output) => {
    console.log(output);
    let intern = new Intern(output.internID, output.internName, output.internEmail, output.internSchool)
    teamMembers.push(intern);
  })
// .then((answers) => {
//   // const htmlPageContent = generatemarkdowncontent(answers);
//   // console.log(htmlPageContent)

//   fs.writeFile('index.html', generatemarkdowncontent(answers), (err) =>
//     err ? console.log(err) : console.log('Successfully created index.html!')
//   );
// });

const promptEmployeeMenu = () => {
  return inquirer.prompt({
    type: "list",
    name: "choice",
    message: "what would you like to do?",
    choices: ["intern", "engineer", "Finish"],
  });
};

const promptLoop = () => {
  return promptEmployeeMenu().then((answers) => {
    if (answers.choice === "engineer") {
      return generateEngineer().then(promptLoop);
    } else if (answers.choice === "intern") {
      return generateIntern().then(promptLoop);
    }
  });
};

generateManager()
  .then(() => {
    return promptLoop();
  })
  .then(() => {
    console.log(teamMembers);
    fs.writeFileSync("./index.html", generateHtml(teamMembers));
  });

{
  /* <div>
<h1>${Employee.managerName}</h1>
  <h1>${Employee.managerID}</h1>
  <h1>${Employee.managerEmail}</h1>
  <h1>${Employee.managerOfficeNumber}</h1>
</div>

<div>
<h1>${Engineer.engineerName}</h1>
  <h1>${Engineer.engineerID}</h1>
  <h1>${Engineer.engineerEmail}</h1>
  <h1>${Engineer.engineerGithub}</h1>
</div>

<div>
<h1>${Intern.internName}</h1>
  <h1>${Intern.internID}</h1>
  <h1>${Intern.internEmail}</h1>
  <h1>${Intern.internSchool}</h1>
</div> */
}

//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Manager name is ${name}</h1>
//     <p class="lead">The empolyee ID number is ${ID}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">The employee email is ${email}</li>
//       <li class="list-group-item">The office number is ${officeNumber}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;




