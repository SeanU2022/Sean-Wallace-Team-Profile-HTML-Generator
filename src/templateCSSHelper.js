// Destucture object properties on the fly: parameter {...} = (staffMember)
// generateHTMLHelper does a single task: return HTML string in backticks

const css = () =>
`* {
  box-sizing: border-box;
  /* the order from content  */
  padding: 0;
  /* border: 0; */
  margin: 0;
}

body {
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background: #a1c3ff;
}

img {
  max-width: 100%;
}

h1,
h2 {
  margin-bottom: 15px;
}

ul {
  list-style-type: none;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;
}

.navbar {
  background: #3474e6;
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

.header {
  background-color: #0151cc;
  color: #fff;
  min-height: 400px;
}

.header h1 {
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.2;
}

.header img {
  max-width: 400px; 
}

.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.boxes .container {
  display: flex;
  justify-content: space-between;
}

.box {
  flex: 1;
  background: #01a5cc;
  color: #fff;
  border-radius: 10px;
  margin: 20px 10px;
  box-shadow: 0 3px 5px rgba(0,0,0,0.6);
  padding: 15px 20px;
}

/* here are the 2 techniques to respond to make items align vertically */
@media(max-width: 768px) {
  .header .container {
      flex-direction: column;
      padding-top: 20px;
      text-align: center;
  }

  .boxes .container {
      display: block;
      text-align: center;
  }
}
`;

module.exports = {
  css
}
