import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import ModelParam from "./components/ModelParam/ModelParam";
import OrderInfo from "./components/OrderInfo/OrderInfo";
import ProductInsp from "./components/ProductInsp/ProductInsp";
import FinalInspection from "./components/FinalInspection/FinalInspection";
import OrderHistory from "./components/OrderHistory/OrderHistory";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/model-param/" exact component={ModelParam} />
        <Route path="/order-info/" exact component={OrderInfo} />
        <Route path="/product-insp/" exact component={ProductInsp} />
        <Route path="/final-insp/" exact component={FinalInspection} />
        <Route path="/order-history/" exact component={OrderHistory} />
      </div>
    </Router>
  );
}

export default App;
