/* eslint-disable */ 
import React, { useState } from 'react';
import './styles/App.scss';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home';
import ViewProducts from './components/ViewProducts/ViewProducts';
import CartContext from './CartContext';
import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from '@react-firebase/auth';
// import firebaseConfig from './firebase/firebase-init'
import Lbel from "../src/images/Lbel-brand.png";
import Esika from "../src/images/Esika-brand.png";
import Footer from "../src/images/footer.png";
import Card from "../src/images/card.png";
import NavBrand from "../src/components/Header/NavBrand";
import '../src/styles/Products.scss'
import NavCredit from './components/Header/NavCredit';

function App() {
  const [valueContext, setValueContext] = useState([]);

  return (
    <FirebaseAuthProvider firebase={firebase}>
      <div className="App">
        <CartContext.Provider value={{ valueContext, setValueContext }}>
          <Router>
            <Header />
            <Switch>
              <Route path="/cyzone">
                <ViewProducts />
              </Route>
            </Switch>
            <Switch>
              <Route path="/lbel">
                <NavBrand /> 
                <img className = "lbel" src={Lbel} alt="lbel"/>
              </Route>
            </Switch>
            <Switch>
              <Route path="/esika">
                <NavBrand /> 
                <img className = "esika" src={Esika} alt="esika"/>
              </Route>
            </Switch>
            <Switch>
              <Route path="/card">
                <NavCredit />
                <a href="/delivery" className="back">Volver</a>
                <img className = "card" src={Card} alt="card"/>
              </Route>
            </Switch>
            <Switch>
              <Route path="/bank">
                <NavCredit />
                <a href="/card" className="back">Volver</a>
              </Route>
            </Switch>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route> 
            </Switch>
            <footer>
              <img className = "footer" src={Footer} alt="footer"/>
            </footer>
          </Router>
        </CartContext.Provider>
      </div>
    </FirebaseAuthProvider>
  );
}

export default App;
