import './App.css';
import Home from './components/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import {BrowserRouter as Router, Route} from "react-router-dom"
import bg from "./background3.png"

function App() {

  // const pageStyle = {
  //   backgroundImage: `url(${bg})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "80% 80%",
  //   marginLeft: "10%"
  // }

  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
