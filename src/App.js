import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import LandingPage from './landingpage';
import Buys from './Buys';
import Thankyou from './Thankyou';
import Search from './Search';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/LandingPage' element={<LandingPage />} />
          <Route path='/Buys' element={<Buys />} />
          <Route path='/Thankyou' element={<Thankyou />} />
          <Route path='/Search' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

