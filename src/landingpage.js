import React, { useState, useEffect } from 'react';
import { tank } from './product'; 
import './App.css';
import Navbar from './Navcom/Navbar';
import{Carousel} from 'antd';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [products, setProducts] = useState([tank]);

  useEffect(() => {
    setProducts(tank);
  }, [products]);

  const navigate=useNavigate();
  

  function Text({ id, src, description, name, price }) {
    return (
      <>
        <img src={src} alt={name} />
        <h2>{name}</h2>
        <p>Detail: {description}</p>
        <p>Price: {price}</p>
        <button className='button' onClick={()=>navigate('../Buys',{replace:true,state:{id:id}})}>(:BUY:)</button>

      </>
    );
  }

  function Tex({ id, src, description, name, price }) {
    return (
      <>
        <div className="container">
    <div className="content">
    <img src={src} alt={name} />
        <h2>{name}</h2>
        <p>Price: {price}</p>
    </div>
</div>
        
      </>
    );
  }
  return (
    <div>
      <Navbar/>
      <div className='Body1'>
      <Carousel className="ads" effect='scrollx' autoplay style={{ height: '100%' }} >
      {products.map(product => (
          <li key={product.id} className='ads-li'>
            <Tex {...product} />
          </li>
        ))}
      <div  autoComplete="OFF">
      </div>
    </Carousel>
      <div >
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <div key={product.id} className='li'>
            <Text {...product} />
          </div>
        ))}
      </ul>
      </div>
    </div>
    </div>
  );
}

export default LandingPage;