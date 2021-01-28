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
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </Router>
        </CartContext.Provider>
      </div>
    </FirebaseAuthProvider>
  );
}

export default App;
