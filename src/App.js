import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import ModelParam from "./components/ModelParam/ModelParam";
import OrderInfo from "./components/OrderInfo/OrderInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/model-param/" exact component={ModelParam} />
        <Route path="/order-info/" exact component={OrderInfo} />
        {/* 
        <Route path="/product-insp/" exact component={} />
        <Route path="/product-insp/:id" exact component={} />
        <Route path="/final-insp-param/" exact component={} />
        <Route path="/final-insp-param/:id" exact component={} />
        <Route path="/final-insp/" exact component={} />
        <Route path="/final-insp/:id" exact component={} /> */}
      </div>
    </Router>
  );
}

export default App;
