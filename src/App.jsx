import React, { useState } from 'react';
import './styles/App.scss';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/Header';
import CatalogCarousel from './components/ViewProducts/CatalogCarrousel';
import ProductCard from './components/ViewProducts/CardProducts';
import getData from './firebase/firebase-functions';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState();
  // const [products, setProducts] = useState([]);

  console.log(getData.getProducts());

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  console.log(page);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/cyzone">
            <CatalogCarousel
              handlePageChange={handlePageChange}
              next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
              prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
            />
            <ProductCard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
