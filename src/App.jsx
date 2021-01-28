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
import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from '@react-firebase/auth';
// import firebaseConfig from './firebase/firebase-init'
import Lbel from "../src/images/Lbel.png";
import Esika from "../src/images/Esika.png";
import Footer from "../src/images/footer.png";
import '../src/styles/Products.scss'

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
                <img className = "lbel" src={Lbel} alt="lbel"/>
              </Route>
            </Switch>
            <Switch>
              <Route path="/esika">
                <img className = "esika" src={Esika} alt="esika"/>
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
