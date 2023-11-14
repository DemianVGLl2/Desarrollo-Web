//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Directory from "./components/Directory";
import Math from './components/Math';

function App() {

  return (
    <div className="App">
      <Header />
      <Math />
      <Login />
      <Directory />
      <Footer />
    </div>
  );
}

export default App;