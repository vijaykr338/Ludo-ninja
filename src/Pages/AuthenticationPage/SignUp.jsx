import {React, useState} from 'react'
import './Signup.css'
import { FcGoogle } from "react-icons/fc";
import logoLudo from '../../assets/logoLudo.png'

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    console.log('name:', name);
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
            <h2>Create an account</h2>
            <p>Sign up via Social Channels</p>
            { /* change the route later */}
      
            <button className="google-signup"><FcGoogle/> Sign Up with Google</button>
            <div className="divider">Or</div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name='name'required />
                <input type="email" placeholder="Email" name='email' required />
                <input type="password" placeholder="Password" name='password' required />
                <button type="submit" className="register-btn">Register</button>
            </form>
            <p>Already have an account? <a href="#">Sign in</a></p>
        </div>
    </div>
  )
}

export default Signup
