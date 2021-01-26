// import logo from './logo.svg';
import React from 'react';
import './styles/App.scss';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <>
        <h1>Beuty Corp</h1>
      </>
    </Router>
  );
}

export default App;
