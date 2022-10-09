// const generateHTML = ({ name, location, github, linkedin }) =>
const generateHTML = ({ name, repoinfo }) =>
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
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${repoinfo}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${name}</li>
      <li class="list-group-item">LinkedIn: ${repoinfo}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

module.exports = {
  generateHTML
}

// (function () {
//   console.log('hello world')
//   console.log(this)
// })
// ()

// fnName = () => {
//   console.log('arrow function')
//   console.log('arrow function')
// }
// fnName()  // this call the anonynous fn

// fnDoStuff = (param1, param2) => {
//   console.log('arrow function param1 ' + param1)
//   console.log('arrow function param2 ' + param2)
// }
// fnDoStuff('P1', 222)