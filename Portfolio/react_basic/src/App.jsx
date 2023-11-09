//import logo from './logo.svg';
import './App.css';
import Picture from "./components/Picture"
import pi, { doublePi, squarePi, square } from "./modules/math"
import Card from './components/card';
import contacts from './data';

function App() {
  var name = "Demián";
  var lname = "Velasco";
  var today = new Date();
  var num = 7;

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

  var filteredContacts = contacts.filter((contact) => {
    return contact.name === "Jake";
  });

  var result = contacts.reduce((accum, current) => {
    console.log("accum age is "+ accum.age + " plus current that is " + current.age);
    return accum.age + current.age;
  });

  var findContacts = contacts.filter((contact) => {
    return contact.phone.includes("5");
  });

  var cards = findContacts.map((contact) => (
    <Card name={contact.name} img={contact.picture} phone={contact.phone}/>
  ));

  return (
    <div className="App">
      <h1 style={customStyle}>{greeting} world! My name is {name + " " + lname}</h1>
      <p>Value of PI is {pi}</p>
      <p>Double of PI is {doublePi()}</p>
      <p>Square of PI is {squarePi()}</p>
      <p>Square of {num} is {square(num)}</p>
      <Picture />
      <p>Total added age of the dictionary is {result}</p>
      <div className='cards'>
        {cards}
      </div>
      <p>Copyright {today.getFullYear()}</p>
    </div>
  );
}

export default App;