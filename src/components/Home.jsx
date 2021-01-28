/* eslint-disable */ 
import React from 'react';
import '../styles/Home.scss';
import {
  Link,
} from 'react-router-dom';

const Home = () => (
  <div className="home">
    <h3 className="off">- 20% usando el CODIGO: soyBEAUTY </h3>
    <div className="welcome">
      <h1>Bienvenida/o</h1>
      <h2>Escoje tu catálogo</h2>
    </div>
    <div className="galery-brand">
      <Link to="/cyzone" className="cat-cyzone"><img src="https://raw.githubusercontent.com/VeroSilva/BeutyCorp/master/src/images/cyzone.png" alt="Cyzone" /></Link>
      <Link to="/lbel" className="cat-lbel"><img src="https://raw.githubusercontent.com/VeroSilva/BeutyCorp/master/src/images/lbel.png" alt="Lbel" /></Link>
      <Link to="/esika" className="cat-esika"><img src="https://raw.githubusercontent.com/VeroSilva/BeutyCorp/master/src/images/esika.png" alt="Esika" /></Link>
    </div>
    <div className="footer">
      <img src="https://raw.githubusercontent.com/VeroSilva/BeutyCorp/master/src/images/footer.png" alt="Cyzone" className="cat-cyzone" />
    </div>
    <div className="steps">
      <div>
        <h1 className="number">1</h1>
        <p>Escoge tu catalogo favorito y añade todos los productos que quieras</p>
      </div>
      <div>
        <h1 className="number">2</h1>
        <p>Revisa tus pedidos en tu carrito de compras</p>
      </div>
      <div>
        <h1 className="number">3</h1>
        <p>
          Envia el resumen del pedido a tu consultora o
          elige el formato de entrega y pago de tu preferencia
        </p>
      </div>
    </div>
    <h3 className="benefits">!BUSCA BENEFICIOS NEGOCIANDO CON TU CONSULTORA LOS PLAZOS DE PAGO!</h3>
  </div>

);

export default Home;
