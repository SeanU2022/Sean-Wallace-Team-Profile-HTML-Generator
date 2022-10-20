// Destucture object properties on the fly: parameter {...} = (staffMember)
// generateHTMLHelper does a single task: return HTML string in backticks

const htmlShell = (htmlTeamCards) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <!-- https://www.w3schools.com/icons/fontawesome_icons_intro.asp -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
    body {
        font-size: 16px;
        line-height: 1.5;
        color: #333;
        background: pink;
    }

    ul {
        list-style-type: none;
    }

    .container {
        margin: 0 auto;
    }

    .navbar {
        background: #df12c0;;
        color: #fff;
        height: 60px;
    }

    .navbar .logo {
        font-size: x-large;
        font-weight: bold;
    }

    .navbar a {
        color: #fff;
        text-decoration: none;
        font-size: 18px;
        font-weight: bold;
    }

    .navbar a:hover {
        color: blueviolet;
    }

    .navbar .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;           /* places the menu in the middle vertically         */
    }

    .navbar ul {
        display: flex;
    }

    .navbar ul li {
        margin-left: 20px;
    }

    .card {
      min-width: 120px!important;
    }

  </style>
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

  <div class = "container-fluid">
    <p></p>
    <div class="card-deck m-4">

      ${htmlTeamCards}

    </div> <!-- Card deck -->
  </div> <!--container-fluid-->
</body>
</html>
`;


const htmlCardManager = ({ id, empName, email, officeNumber }) =>
`
      <div class="card mb-4 rounded-lg">
        <div class="card-header p-0">
          <h4 class="card-title rounded-top text-light pl-2" style="margin: 0px; background-color:purple; color:white !important"><strong>${empName}</strong></h4>
          <p class="card-text rounded-bottom" style="background-color:purple; color:white !important"><i class="fa fa-coffee" style="color:brown"></i> Manager<p>
          <div class="card-body">            
            <p class="card-text"><strong>Id:</strong> ${id}</p>           
            <p class="card-text"><strong>Email: </strong><a href="mailto:${email}">${email}</a><p>
            <p class="card-text"><strong>Office number:</strong> ${officeNumber}<p>
          </div> <!--card-body-->
        </div> <!--card-header-->
      </div> <!-- card-->
`;

const htmlCardEngineer = ({ id, empName, email, gitHubUserName }) =>
`
      <div class="card mb-4 rounded-lg min-width: 120px">
        <div class="card-header p-0">
          <h4 class="card-title rounded-top text-light pl-2" style="margin: 0px; background-color:purple; color:white !important"><strong>${empName}</strong></h4>
          <p class="card-text rounded-bottom" style="background-color:purple; color:white !important"><i class="fa fa-book fa-fw" style="color:orange"></i> Engineer<p>
          <div class="card-body">
            <p class="card-text"><strong>Id:</strong> ${id}</p>
            <p class="card-text"><strong>Email: </strong><a href="mailto:${email}">${email}</a><p>
            <p class="card-text"><strong>GitHub user name:</strong> <a href="https://www.github.com/${gitHubUserName}" target="_blank">github.com/${gitHubUserName}</a><p>
            </div> <!--card-body-->
        </div> <!--card-header-->
      </div> <!-- card-->
`;

const htmlCardIntern = ({ id, empName, email, school }) =>
`
      <div class="card mb-4 rounded-lg min-width: 120px">
        <div class="card-header p-0">
          <h4 class="card-title rounded-top text-light pl-2" style="margin: 0px; background-color:purple; color:white !important"><strong>${empName}</strong></h4>
          <p class="card-text rounded-bottom" style="background-color:purple; color:white !important"><i class="fa fa-graduation-cap" style="color: black"></i> Intern<p>
          <div class="card-body">
            <p class="card-text"><strong>Id:</strong> ${id}</p>
            <p class="card-text"><strong>Email: </strong><a href="mailto:${email}">${email}</a><p>
            <p class="card-text"><strong>School:</strong> ${school}<p>
          </div> <!--card-body-->
        </div> <!--card-header-->
      </div> <!-- card-->
`;

module.exports = {
  htmlShell,
  htmlCardManager,
  htmlCardEngineer,
  htmlCardIntern
}
