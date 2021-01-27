/* eslint-disable */ 
import React, { useState, useEffect } from 'react';
import CatalogCarousel from './CatalogCarrousel';
import ProductCard from './CardProducts';
import getData from '../../firebase/firebase-functions';

const ViewProducts = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let unmounted = false;

    getData.getProducts(page).then((productsFiltered) => {
      if (!unmounted) {
        setProducts(productsFiltered);
      }
    });

    return () => { unmounted = true; };
  }, [page]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <>
      <CatalogCarousel
        handlePageChange={handlePageChange}
        next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
        prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
      />
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </>
  );
};

export default ViewProducts;
