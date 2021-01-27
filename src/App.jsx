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
import PurchaseModal from "./components/ViewPurchase/PurchaseModal";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/cyzone">
            <ViewProducts />
          </Route>
        </Switch>
        <Switch>
          <Route path="/lbel">
            <PurchaseModal/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
