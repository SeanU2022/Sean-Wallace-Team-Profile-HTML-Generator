// Destucture object properties on the fly: parameter {...} = (staffMember)
// generateHTMLHelper does a single task: return HTML string in backticks

const htmlHead = () =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Profile</title>
</head>
<body>
`;

const htmlTail = () =>
`
</body>
</html>
`

const htmlManager = ({ id, empName, email, officeNumber }) =>
`
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${empName}</h1>
      <p class="lead">Id =  ${id}.</p>
      <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My email is ${email}</li>
        <li class="list-group-item">office nbr: ${officeNumber}</li>
      </ul>
    </div>
  </div>
`;

const htmlEngineer = ({ id, empName, email, gitHubUserName }) =>
`
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${empName}</h1>
      <p class="lead">Id =  ${id}.</p>
      <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My email is ${email}</li>
        <li class="list-group-item">github: ${gitHubUserName}</li>
      </ul>
    </div>
  </div>
`;

const htmlIntern = ({ id, empName, email, school }) =>
`
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${empName}</h1>
      <p class="lead">Id =  ${id}.</p>
      <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My email is ${email}</li>
        <li class="list-group-item">school: ${school}</li>
      </ul>
    </div>
  </div>
`;

module.exports = {
  htmlHead,
  htmlTail,
  htmlManager,
  htmlEngineer,
  htmlIntern
}
