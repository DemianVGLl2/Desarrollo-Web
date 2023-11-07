//import logo from './logo.svg';
import './App.css';
import Picture from "./components/Picture"


function App() {
  var name = "Demian";
  var lname = "Velasco";
  var today = new Date();

  let greeting;

  const customStyle = {
    color: "navy",
    fontSize: "20px",
    border: "1px solid black",
  };

  /*
  if (num % 2 === 0) customStyle.background = "yellow";
  else customStyle.background = "red";
  */

  var currentTime = today.getHours();

  if (currentTime < 12) {
    greeting = "Good morning";
    customStyle.background = "yellow";
  }
  else if (currentTime < 18) {
    greeting = "Good afternoon";
    customStyle.background = "aqua";
  }
  else {
    greeting = "Good night";
    customStyle.background = "darkblue";
    customStyle.color = "white";
  }

  return (
    <div className="App">
      <h1 style={customStyle}>{greeting} world! My name is {name + " " + lname}</h1>
      <Picture />
      <p>Copyright {today.getFullYear()}</p>
    </div>
  );
}

export default App;