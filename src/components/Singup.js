import React from 'react'
import MOkx from './pictures/MOkx.png'


const Singup = () => {
  return (
    <div className='myStyle12'w>
      <img src={MOkx} style={{height:'64px',width:'72px'}}alt="" />
      <p className='myStyle13'>Signup with Email</p>
      <div className='myStyle15'></div>
      <p style={{color:'#69235B',fontWeight:'500',textAlign:"center",fontSize:'14px',margin:'10px 60px'}}>Welcome back! Sign in using your social account or email to continue us</p>
      <form className='container' style={{margin:'20px 0px'}}>
      <div class="mb-3 container" style={{margin:'20px 0px'}}>
  <label for="exampleFormControlInput1" class="form-label" style={{color:'#69235B',fontWeight:'500',fontSize:'14px'}}>Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" style={{color:'#69235B'}}/>
</div>
      <div class="mb-3 container" style={{margin:'20px 0px'}}>
  <label for="exampleFormControlInput1" class="form-label" style={{color:'#69235B',fontWeight:'500',fontSize:'14px'}} >Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" style={{color:'#69235B'}}/>
</div>
      <div class="mb-3 container" style={{margin:'20px 0px'}}>
  <label for="exampleFormControlInput1" class="form-label" style={{color:'#69235B',fontWeight:'500',fontSize:'14px'}}>Password</label>
  <input type="password" class="form-control" id="exampleFormControlInput1" style={{color:'#69235B'}}/>
</div>
      <div class="mb-3 container" style={{margin:'20px 0px'}}>
  <label for="exampleFormControlInput1" class="form-label" style={{color:'#69235B',fontWeight:'500',fontSize:'14px'}}>confirm Password</label>
  <input type="password" class="form-control" id="exampleFormControlInput1" style={{color:'#69235B'}} />
</div>

</form>
<button type="button" class="btn " style={{background:"#FFC746",color:'#69235B',fontWeight:'500',position:'absolute',bottom:'50px'}}>Create an account</button>
    </div>
  )
}

export default Singup
