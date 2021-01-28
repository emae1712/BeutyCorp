import React from 'react';

const Cyzone = <img src="../images/cyzone.png" alt="Cyzone" className="cat-cyzone" />;

const Home = () => (
  <div className="home">
    <h3 className="off">- 20% usando el CODIGO: soyBEAUTY </h3>
    <div className="welcome">
      <h1>Bienvenida</h1>
      <h2>Escoje tu catálogo</h2>
    </div>
    <div className="galery-brand">
      {Cyzone}
    </div>
  </div>

);

export default Home;
