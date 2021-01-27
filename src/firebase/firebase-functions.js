import db from './firebase-init';

const getData = {
  getImages: () => db.collection('imagesCatalog').get()
    .then((queryResponse) => {
      const data = [];
      queryResponse.forEach((imageData) => {
        const objData = {
          image: imageData.data().image,
          page: imageData.data().page,
        };
        data.push(objData);
      });
      return data;
    }),
  getProducts: (pageNumber) => db.collection('products').where('page', '==', pageNumber).get()
    .then((products) => {
      const productsFiltered = [];
      products.forEach((product) => {
        const eachProduct = product.data();
        productsFiltered.push({
          id: eachProduct.id,
          name: eachProduct.name,
          brand: eachProduct.brand,
          category: eachProduct.category,
          price: eachProduct.price,
          description: eachProduct.description,
          image: eachProduct.imgUrl,
        });
      });
      return productsFiltered;
    }),
};

export default getData;
