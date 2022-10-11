// Destucture object properties on the fly: parameter {...} = (staffMember)
// generateHTMLHelper does a single task: return HTML string in backticks

const htmlHead = () =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">  -->
  <link rel="stylesheet" href="./css/indexflex.css">
  <title>Team Profile</title>
</head>
<body>
  <nav class="navbar">
    <div class="container">
        <div class="logo">Team Profile</div>
        <ul class="nav">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
        </ul>
    </div>
  </nav>

  <section class="boxes">
    <div class="container">
`;

const htmlTail = () =>
`
    </div>
  </section>
</body>
</html>
`

const htmlManager = ({ id, empName, email, officeNumber }) =>
`
  <div class="box">
    <h2><strong>${empName}</strong></h2>
    <p>Role: Manager<p>
    <p>Id: ${id}.</p>
    <p>Email: ${email}<p>
    <p>Office number: ${officeNumber}<p>
  </div>
`;

const htmlEngineer = ({ id, empName, email, gitHubUserName }) =>
`
  <div class="box">
    <h2><strong>${empName}</strong></h2>
    <p>Role: Engineer<p>
    <p>Id: ${id}.</p>
    <p>Email: ${email}<p>
    <p>GitHub user name: ${gitHubUserName}<p>
  </div>
`;

const htmlIntern = ({ id, empName, email, school }) =>
`
  <div class="box">
    <h2><strong>${empName}</strong></h2>
    <p>Role: Intern<p>
    <p>Id: ${id}.</p>
    <p>Email: ${email}<p>
    <p>School: ${school}<p>
  </div>
`;

module.exports = {
  htmlHead,
  htmlTail,
  htmlManager,
  htmlEngineer,
  htmlIntern
}
