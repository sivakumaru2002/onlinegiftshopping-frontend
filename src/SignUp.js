import React,{useState} from "react";
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp(){

	function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/api/auth/signup', { email, password ,cpassword})
            .then(res => {
                console.log(res);
                np(event);
            })
            .catch(err => {
                console.log(err);
                alert(`${err}`);
                window.location.reload(); 
            });
    }
    const handleFocus = (evt) => {
        evt.currentTarget.classList.add('focus');
    }
    const handleBlur = (evt) => {
        if(evt.target.value === "")
            evt.currentTarget.classList.remove('focus');
    }

	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	const [cpassword,setCpassword]= useState('');

    const nav = useNavigate()
    function np(evt) {
		evt.preventDefault();
        nav('/');
    }
  return (
    <form className="signup-form" onSubmit={handleSubmit} autoComplete="OFF">
		<h1>SignUp</h1>
		<div className="inputb">
			<label htmlFor="email">Email</label>
			<input className="forminput" type="text" id="email" onFocus={handleFocus} onBlur={handleBlur} onChange={e => setEmail(e.target.value)} required/>
			<span data-placeholder-1="Email" data-placeholder-2="Email:"></span>
		</div>

		<div className="inputb">
			<label htmlFor="password">Password</label>
			<input className="forminput hide-pwd" type="password" id="password" onFocus={handleFocus} onBlur={handleBlur} onChange={e => setPassword(e.target.value)} required/>
			<span data-placeholder-1="Password" data-placeholder-2="Password:"></span>
		</div>

        <div className="inputb">
			<label htmlFor="cfrm-password">Confirm Password</label>
			<input className="forminput hide-pwd" type="password" id="cfrm-password" onFocus={handleFocus} onBlur={handleBlur} onChange={e => setCpassword(e.target.value)} required/>
			<span data-placeholder-1="Confirm Password" data-placeholder-2="Confirm Password:"></span>
		</div>

		<input type="submit" className="loginbtn" value="SignUp" />

        <div className="bottom-text">
			<span className='signup'>Already have an account? <Link to='/'>Login</Link></span>
		</div>
		
	</form>
  );
  }
export default SignUp;