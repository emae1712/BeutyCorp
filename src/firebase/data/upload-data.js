/* eslint-disable */
import Data from './firebase/data/data';
import db from './firebase/firebase-init';

const uploadData = () => {
  Data.forEach((product) => {
    db.collection('products').add({
      id: product['Código de Producto Genérico'],
      price: product['Precio Normal MN'],
      brand: product.Marca,
      imgUrl: product.Image,
      name: product.Producto,
      description: product.Subtipo,
      category: product['Categoría'],
      subcategory: product['Subcategoría'],
      off: product['Dscto 1'],
      page: product.Page,
    })
      .then((data) => {
        console.log(data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

// uploadData();
