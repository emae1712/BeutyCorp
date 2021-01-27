/* eslint-disable */ 
import React, { useState } from 'react';
import './styles/App.scss';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/Header';
import ViewProducts from './components/ViewProducts/ViewProducts';
import CartContext from './CartContext';

function App() {
  const [valueContext, setValueContext] = useState([]);

  return (
    <div className="App">
      <CartContext.Provider value={{ valueContext, setValueContext }}>
        <Router>
          <Header />
          <Switch>
            <Route path="/cyzone">
              <ViewProducts />
            </Route>
          </Switch>
        </Router>
      </CartContext.Provider>
    </div>
  );
}

export default App;
