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
import EditProduct from "./components/edit/EditProduct";
import { Component } from "react";
import RegisterSuccess from "./components/register/RegisterSuccess";
import Logout from "./components/login/Logout";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      window.localStorage.getItem("isLogged") ? (
        <Component {...props} />
      ) : (
        <Redirect
          // Redirect the user to login
          // Pass the last route accessed in the state to redirect to it later
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
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
          <Route exact path="/" component={Home}/>
          <Route path="/products" component={Products}/>
          <Route path="/about" component={About}/>
          <Route path="/product/:productId" component={ProductDetail}/>
          <PrivateRoute path="/add-product" component={Form}/>
          <Route path="/update/:productId" component={EditProduct}/>
          <Route path="/vague-error" component={FormFailed}/>
          <Route path="/success" component={RegisterSuccess}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/:userId/products" component={ProductsByUser}/>
          <Route path="/register" component={RegisterFrom}/>
          <Route path="/login" component={LoginFrom}/>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
