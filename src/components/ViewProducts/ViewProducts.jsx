/* eslint-disable */ 
import React, { useState, useEffect } from 'react';
import CatalogCarousel from './CatalogCarrousel';
import ProductCard from './CardProducts';
import getData from '../../firebase/firebase-functions';

const ViewProducts = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);

  // select each product and save in an array
  const [cards, setCards] = useState([]);

  const addProduct = (cart)=>{
    // create a copy of product to add more properties
    const newCart = {
      id: cart.id,
      image: cart.image,
      name: cart.name,
      price: cart.price,
      quantity: 1,
      subtotal: 0,
    }
    //receive an array of each card clicked
    setCards([
      ...cards,
      newCart
    ]);
  }

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
        <ProductCard product={product} addProduct= {addProduct} />
      ))}
    </>
  );
};

export default ViewProducts;
