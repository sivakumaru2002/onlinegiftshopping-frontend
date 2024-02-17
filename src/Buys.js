import React from 'react';
import './App.css';
import {tank} from './product';
import Navbar from './Navcom/Navbar';
import {useLocation ,useNavigate} from 'react-router-dom';

  
  function Buys() {
    const location=useLocation();

    function Cart() {
      const filteredTanks = tank.filter(tank => tank.id === location.state.id);
      const navi=useNavigate()
      function navigate(){
        navi('/Thankyou');
      }
      return (
        <div>
          {filteredTanks.length > 0 ? (
            filteredTanks.map(filteredTank => (
              <div className='buy-li'>
                <h2>Name: {filteredTank.name}</h2>
                <img src={filteredTank.src} alt={filteredTank.name} />
                <p>Price: {filteredTank.price}</p>
                <button className='buy-button' onClick={navigate}>confirm purchace</button>
              </div>
            ))
          ) : (
            <p>No matching products found</p>
          )}
        </div>
      );
    }
    return (
      <>
        <Navbar />
        <div>
          <Cart />
        </div>
      </>
    );
  }
  

export default Buys;