import React from 'react'
import pic1 from './pictures/pic1.png'
import Arya from './pictures/Arya.png'
import faceBook from './pictures/faceBook.png'
import google from './pictures/google.png'
import apple from './pictures/apple.png'
// import './Style.css'
import { Link } from 'react-router-dom'

const Account = () => {
  return (
    <>
    <div style={{background:"#69235B",height:"92.4vh"}}>
      <img src={pic1} className='myStyleAcc' alt="" />
      <img src={Arya} alt="lol" className='myStyle2' />
      <div className='myStyle11'>
            <div className='myStyle7'>
                <p className='myStyle3'>Discover the timeless wisdom of </p>
                <p className='myStyle4'>the Vedas</p>
                <span className='myStyle5'>Sign up and</span>
                <span className='myStyle6'> journey through ancient knowledge with Arya 🌟</span>
            </div>
            <div className='myStyle7'>
                <div className='myStyle8'>
                <Link className='myStyle9' to="#"><img src={faceBook} alt="" /></Link>
                <Link className='myStyle9' to="#"><img src={google} alt="" /></Link>
                <Link className='myStyle9' to="#"><img src={apple} alt="" /></Link>

                </div>
                <hr />
                <p style={{display:"flex",justifyContent:"center"} }>or</p>
                <div className='myStyle8'>
                    <button className='myStyle10' ><Link to='/singup' style={{textDecoration:'none' ,color:'#69235B'}}><p>Sing up with mail</p></Link></button>
                </div>
                <div className='myStyle8'>
                <span>Existing account? </span>
                <Link className='myStyle6' to='/login'> Log in</Link>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Account
