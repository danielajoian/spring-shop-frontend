import "./App.css";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Products from "./components/Products";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";

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
        <div id="main-container">
          <Route exact path="/" component={Home}></Route>
          <Route path="/products" component={Products}></Route>
          <Route
            path="/product/:productId/:userId"
            component={ProductDetail}
          ></Route>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
