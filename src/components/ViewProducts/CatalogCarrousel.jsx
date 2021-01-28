/* eslint-disable */ 
import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import '../../styles/Products.scss';
import getData from '../../firebase/firebase-functions';

const CatalogCarousel = (props) => {
  const { handlePageChange } = props;
  const [items, setItems] = useState([]);
console.log(items);
  useEffect(() => {
    getData.getImages()
      .then((images) => {
        setItems(images);
      });
  }, []);

  return (
    <Carousel indicators={false} navButtonsAlwaysVisible autoPlay={false} className="carousel">
      {
        items.map((item) => <Item key={123456} item={item} handlePageChange={handlePageChange} />)
      }
    </Carousel>
  );
};
CatalogCarousel.propTypes = {
  handlePageChange: PropTypes.func.isRequired,
};

const Item = (props) => {
  const { item, handlePageChange } = props;

  handlePageChange(item.page);

  return (
    <Paper>
      <img src={item.image} alt="Catalog" />
    </Paper>
  );
};

Item.propTypes = {
  item: PropTypes.func.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default CatalogCarousel;
