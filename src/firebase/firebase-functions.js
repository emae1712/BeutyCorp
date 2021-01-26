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
};

export default getData;
