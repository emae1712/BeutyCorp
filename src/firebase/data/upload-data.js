/* eslint-disable */
import Data from './firebase/data-beautyCorp';
import db from './firebase/firebase-init';

const updateData = () => {
  Data.forEach(product => {
    db.collection('products').add({
      id: product['Código de Producto Genérico'],
      price: product['Precio Normal MN'],
      brand: product.Marca,
      imgUrl: product.Image,
      name: product.Producto,
      description: product.Subtipo,
      category: product['Categoría'],
    })
    .then((data) => {
      console.log(data.id);
    })
    .catch((err) => {
      console.log(err);
    });
  });
}