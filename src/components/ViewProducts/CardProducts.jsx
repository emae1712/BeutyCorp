/* eslint-disable */ 
import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, teal } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import CartContext from '../../CartContext';
import '../../styles/Products.scss';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const primary = teal[400];

const useStyles = makeStyles((theme) => ({
  
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ProductCard = (props) => {
  const classes = useStyles();
  const { valueContext, setValueContext } = useContext(CartContext);
  const { product } = props;
  const [ expanded, setExpanded ] = React.useState(false);
  const [ open, setOpen ] = useState(false);

  //adding products to cart
  const addProducts = ()=>{
    const cart = valueContext.find((oneCart)=> oneCart.id === product.id)
    if(cart ===undefined){
      setValueContext([
        ...valueContext,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
          subtotal: 0,
        }
      ]);
    }
  }

  useEffect(() => {
    let unmounted = false;

    return () => { unmounted = true; };
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Card className={{ root: classes.root, cardProduct: 'cardProduct' }}>
      <Box className="productCard" boxShadow={2}>
        <IconButton
          className={
            clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            }, 'addProduct')
          }
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        <CardMedia
          className={{ root: classes.media, imageProduct: 'imageProduct' }}
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <Typography variant="body2" color="textPrimary" component="p">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsum reiciendis.
          </Typography>
        </CardContent>
        <CardActions disableSpacing />
        <p className="product-price">
          S/
          {product.price}
        </p>
        <Button 
          className="add-product-cart"
          variant="contained" 
          color="primary" 
          onClick={() => {
            handleClick();
            addProducts();
          }}>
          Añadir
        </Button>
        <Snackbar open={open} autoHideDuration={900} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" className="alertCustom">
            Se agrego a tu carrito
          </Alert>
        </Snackbar>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textPrimary" component="p">Description</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.instanceOf(Array).isRequired,
};

export default ProductCard;
