import "./App.css";
import Home from "./components/home-page/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Products from "./components/Products";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import About from "./components/About";
import Form from "./components/add-product-form/Form";
import FormFailed from "./components/add-product-form/FormFailed";
import ProductsByUser from "./components/ProductsByUser";
import LoginFrom from "./components/login/LoginForm";
import RegisterFrom from "./components/register/RegisterForm";
import { Component } from "react";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      window.localStorage.getItem("isLogged") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
          // to="/login"
        />
      )
    }
  />
);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div id="main-container">
          <Route exact path="/" component={Home}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/product/:productId" component={ProductDetail}></Route>
          <PrivateRoute path="/add-product" component={Form}></PrivateRoute>
          <Route path="/vague-error" component={FormFailed}></Route>
          <Route path="/:userId/products" component={ProductsByUser}></Route>
          <Route path="/register" component={RegisterFrom}></Route>
          <Route path="/login" component={LoginFrom}></Route>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
