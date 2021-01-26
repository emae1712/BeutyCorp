import React from 'react';
import './App.css';
import CatalogCarousel from './components/ViewProducts/CatalogCarrousel';

const App = () => (
  <div className="App">
    <CatalogCarousel
      next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
      prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
    />
  </div>
);

export default App;
