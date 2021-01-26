import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
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

  // const items = [
  //   {
  //     name: 'Random Name #1',
  //     description: 'Probably the most random thing you have ever seen!',
  //   },
  //   {
  //     name: 'Random Name #2',
  //     description: 'Hello World!',
  //   },
  // ];

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
  console.log(item.image);
  return (
    <Paper>
      <img src={item.image} alt="Catalog" />

      <Button className="CheckButton">
        Check it out!
      </Button>
    </Paper>
  );
};

Item.propTypes = {
  item: PropTypes.func.isRequired,
};

export default CatalogCarousel;
