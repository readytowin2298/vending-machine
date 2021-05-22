import React, { useState } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from './VendingMachine';
import Menu from './Menu';
import Food from './Food'
import items from './items'

const content = items.map(item => (
  <Route exact path={`/${item.name}`}>
    <Food name={item.name} price={item.price} />
  </Route>
))

function cartStyle () {
  return {
    width : 100,

  }
}

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App container justify-content-center">
        <h1 className="display-1">World's Best Vending Machine</h1>
        <BrowserRouter>
            <Route exact path="/">
                <VendingMachine cart={cart} setCart={setCart} />
            </Route>
            <Route exact path="/menu">
                <Menu />
            </Route>
            <Route path="/food/:name">
                <Food cart={cart} setCart={setCart} />
            </Route>
        </BrowserRouter>
        <div className="container">
            {cart.map(item => (
              <img src={item.img} style={{width: 100}} />
            ))}
        </div>
    </div>
  );
}

export default App;
