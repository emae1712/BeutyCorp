import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import getData from '../../firebase/firebase-functions';

const CatalogCarousel = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData.getImages()
      .then((images) => {
        setItems(images);
      });
  }, []);

  return (
    <Carousel indicators={false} navButtonsAlwaysVisible>
      {
        items.map((item) => <Item key={123456} item={item} />)
      }
    </Carousel>
  );
};

const Item = (props) => {
  const { item } = props;

  return (
    <Paper>
      <img src={item.image} alt="Catalog" />
    </Paper>
  );
};

Item.propTypes = {
  item: PropTypes.func.isRequired,
};

export default CatalogCarousel;
