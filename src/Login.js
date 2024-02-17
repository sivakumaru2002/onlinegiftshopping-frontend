import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('https://alive-jade-crocodile.cyclic.app/api/auth/login/', { email, password })
            .then(res => {
                console.log(res);
                handleBookNow(event);
            })
            .catch(err => {
                console.log(err);
                alert(`${err}`);
                window.location.reload(); 
            });
    }
    
    const handleBookNow = (evt) => {
        evt.preventDefault();
        navigate('/LandingPage');
    };

    const handleFocus = (evt) => {
        evt.currentTarget.classList.add('focus');
    };

    const handleBlur = (evt) => {
        if (evt.target.value === "") {
            evt.currentTarget.classList.remove('focus');
        }
    };


    return (
        <form className="login-form"  autoComplete="off" onSubmit={handleSubmit}>
            <h1>Login</h1>

            <div className="inputb">
                <label htmlFor="email">Email</label>
                <input className="forminput" type="text" id="email" onFocus={handleFocus} onBlur={handleBlur} value={email} onChange={e => setEmail(e.target.value)} ref={emailRef} required />
                <span data-placeholder-1="Email" data-placeholder-2="Email:"></span>
            </div>

            <div className="inputb">
                <label htmlFor="password">Password</label>
                <input className="forminput hide-pwd" type="password" id="password" onFocus={handleFocus} onBlur={handleBlur} ref={passwordRef} value={password} onChange={e => setPassword(e.target.value)} required />
                <span data-placeholder-1="Password" data-placeholder-2="Password:"></span>
            </div>

            <input type="submit" className="loginbtn" value="Login" />

            <div className="bottom-text">
                <span className='signup'>Don't have an account? <Link to='/signup'>Sign up</Link></span>
            </div>
        </form>
    );
}

export default Login;
