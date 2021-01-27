/* eslint-disable */ 
import React from 'react';
import './styles/App.scss';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/Header';
import ViewProducts from './components/ViewProducts/ViewProducts';
import CartContext from './CartContext';

const data = {
  name: 'labial',
  description: 'labial que pinta',
};

function App() {
  return (
    <div className="App">
      <CartContext.Provider value={data}>
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
