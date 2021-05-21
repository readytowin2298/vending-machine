import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from './VendingMachine';
import Menu from './Menu';

function App() {
  return (
    <div className="App container justify-content-center">
        <h1 className="display-1">World's Best Vending Machine</h1>
        <BrowserRouter>
            <Route exact path="/">
                <VendingMachine />
            </Route>
            <Route exact path="/menu">
                <Menu />
            </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
