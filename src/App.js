import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/components/pages/Home";
import Services from "../src/components/pages/Services";
import Products from "../src/components/pages/Products";
import SignUp from "../src/components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/services" exact component={Services}></Route>
          <Route path="/products" exact component={Products}></Route>
          <Route path="/sign-up" exact component={SignUp}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
