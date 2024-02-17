import React from 'react';
import './App.css';
import { tank } from './product';
import Navbar from './Navcom/Navbar';
import { useNavigate, useLocation } from 'react-router-dom';

function Search() {
    const location = useLocation();
    const navigate = useNavigate();

    function Cart() {
        const searchTerm = location.state.name.toLowerCase().trim();
        const filteredTanks = tank.filter(tank => tank.name.toLowerCase().trim() === searchTerm);
        console.log(filteredTanks);
        return (
            <div>
                {filteredTanks.length > 0 ? (
                    filteredTanks.map(filteredTank => (
                        <div className='buy-li' key={filteredTank.id}>
                            <h2>Name: {filteredTank.name}</h2>
                            <img src={filteredTank.src} alt={filteredTank.name} />
                            <p>Price: {filteredTank.price}</p>
                            <button className='buy-button' onClick={() => navigate('../Buys', { replace: true, state: { id: filteredTank.id } })}>(:BUY:)</button>
                        </div>
                    ))
                ) : (
                    <p>No matching products found</p>
                )}
                <button className='buy-button Body1 ' onClick={() => navigate('/LandingPage')}>RETURN HOME</button>
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

export default Search;
