import React from 'react';
import './styles/App.scss';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/Header';
import CatalogCarousel from './components/ViewProducts/CatalogCarrousel';        

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <>
          <h1>Beuty Corp</h1>
        </>
      </Router>
      <CatalogCarousel
        next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
        prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
      />
    </div>
  );
}

export default App;
