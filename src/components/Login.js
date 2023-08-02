import React from 'react'
import { Link } from 'react-router-dom'

// import './Style1.css'
import faceBook from './pictures/faceBook.png'
import google from './pictures/google.png'
import apple from './pictures/apple.png'
import { useState } from 'react'
const Login = () => {
    const [inputText, setInputText] = useState('');
    const [inputText1, setInputText1] = useState('');
    const handleInputChange = (event) => {
        setInputText(event.target.value);
      };
    const handlepassChange = (event) => {
        setInputText1(event.target.value);
      };
    const isSubmitDisabled = (inputText.trim() === '' || inputText1.trim()==='' )
  return (
    <div className='myStyle12'>
        <div>
        <p className='myStyle13'>Login to Mokx</p>
        </div>
        
        <div className='myStyle14'></div>
        <div>
            <p style={{color:'#69235B',fontWeight:'500',textAlign:"center",fontSize:'14px',margin:'10px 60px'}}>Welcome back! Sign in using your social account or email to continue us</p>
        </div>
        <div>
                <Link className='myStyle9' to="#"><img src={faceBook} alt="" /></Link>
                <Link className='myStyle9' to="#"><img src={google} alt="" /></Link>
                <Link className='myStyle9' to="#"><img src={apple} alt="" /></Link>

                </div>
                <p style={{color:'#69235B', margin:'50px'}}>or</p>
                <form style={{margin:'50px'}}>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" value={inputText} placeholder="name@example.com" onChange={handleInputChange}/>
      <label for="floatingInput" id='email' style={{color:'#69235B'}} >Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" style={{margin:"5px 0px"}} placeholder="Password" value={inputText1} onChange={handlepassChange}/>
      <label for="floatingPassword" id='password' style={{color:'#69235B'}} >Password</label>
    </div>

    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault" style={{color:'#69235B'}}>
        Remember me
      </label>
    </div>
    <button class="btn w-100 py-2" type="submit" style={{background:"#FFC746"}} disabled={isSubmitDisabled}>Sign in</button>
    <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
  </form>
    </div>
  )
}

export default Login
