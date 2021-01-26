import React from 'react';
import './styles/App.scss';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/Header';
import CatalogCarousel from './components/ViewProducts/CatalogCarrousel';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/cyzone">
            <CatalogCarousel
              next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
              prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
