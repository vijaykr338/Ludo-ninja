import {React, useState} from 'react'
import './Signup.css'
import { FcGoogle } from "react-icons/fc";
import logoLudo from '../../assets/logoLudo.png'

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log('email:', email);
    console.log('password:', password);
    // change the function for backend integration later!
  }
  return (
    <div className="container">
        <div className="logo">
            <img src={logoLudo} alt="logo" />
            <h1>Ludo Ninja</h1>
        </div>
        <div className="form-container">
            <h2>Welcome Back!</h2>
            { /* change the route later */}
            
            <button className="google-signup"><FcGoogle/> Login with Google</button>
            <div className="divider">Or</div>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" name='email' required />
                <input type="password" placeholder="Password" name='password' required />
                <button type="submit" className="register-btn">Login</button>
            </form>
            <p>New User? <a href="#">Create an account</a></p>
        </div>
    </div>
  )
}

export default Login
