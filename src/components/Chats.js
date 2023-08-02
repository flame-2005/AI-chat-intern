import React, { useState } from 'react'
import Rectangle from './pictures/Rectangle.png'
import Back from './pictures/Back.png'
import Vector from './pictures/Vector.png'
import plane from './pictures/plane.png'
import microphone from './pictures/microphone.png'


const Chats = () => {
    const[chats,setChats] = useState([])
    const[chat,setChat] = useState({message:''})
    const addChats =(message)=>{
        const chat1 = {
            'message':message
        }
        setChats(chats.concat(chat1))
        console.log(chats)
    }
    const onChange = (e)=>{
        setChat({...chat,[e.target.name]:e.target.value})
    }
    const handleClick = () =>{
        console.log('hi')
        addChats(chat.message)
    }
    return (
        <div>
            <div style={{ display: 'flex', width: '90vw', margin: '0px 50px', justifyContent: 'center', overflow: 'auto' }}>
                <button style={{ background: 'white', border: 'none', position: 'absolute', left: '8px' }}> <img src={Back} alt="" /></button>

                <img style={{ left: '47px', position: 'absolute' }} src={Rectangle} alt="" />

                <div style={{ position: 'absolute', left: '100px' }}>
                    <span style={{ color: '#69235B', fontWeight: '500', fontSize: '24px' }}>Arya </span>
                    <span style={{ color: '#69235B', fontWeight: '500', fontSize: '14px' }}>Vedic AI Bot</span>
                </div>
                <div style={{ marginTop: '10px' }}>
                    <button style={{ background: 'white', border: 'none', position: 'absolute', right: '50px', color: '#FBBC04', fontWeight: '500', fontSize: '14px' }}>A</button>
                    <button style={{ background: 'white', border: 'none', right: '30px', position: 'absolute', color: '#FBDC94', fontWeight: '500', fontSize: '14px' }}>क</button>
                </div>


            </div  >
            <div style={{ display: 'flex' }}>
                <img style={{ left: '17px', position: 'absolute', marginTop: '60px' }} src={Rectangle} alt="" />

                <div style={{ overflow: 'auto', position: 'absolute', marginTop: '70px', marginLeft: '65px', marginRight: '10px', background: '#69235B', color: 'white', borderTopRightRadius: '10px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', padding: '10px' }}>

                    🙏 Namaste!  I’m Arya, your AI Vedic help.  I'm here to provide insights from Vedas for daily life concerns.

                    Whether you seek guidance on mantras, general life advice, or specific Vedic interpretations, I’m here to assist you.
                </div>
            </div>
            <div>
                <div className='myStyle16'>
                    <img src={Vector} alt="" />
                    <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#69235B', fontWeight: '500', fontSize: '14px', marginTop: '15px' }}>You can ask queries like:</p>
                </div>
                <div className='myStyle17'>
                    <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#69235B', fontWeight: '500', fontSize: '14px', marginTop: '15px', background: '#FBBC04', height: '50px', width: '300px', borderRadius: '30px' }}>What is the mantra in Rigveda 10.2.3?</p>
                    <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#69235B', fontWeight: '500', fontSize: '14px', marginTop: '15px', background: '#FBBC04', height: '50px', width: '300px', borderRadius: '30px' }}>What is the mantra in Rigveda 10.2.3?</p>
                    <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#69235B', fontWeight: '500', fontSize: '14px', marginTop: '15px', background: '#FBBC04', height: '50px', width: '300px', borderRadius: '30px' }}>What is the mantra in Rigveda 10.2.3?</p>
                    <p style={{ color: '#69235B' }}> <span style={{ fontSize: 'larger', }}>&#9888;</span> Limitation: May struggle with complex queries.</p>
                    <div style={{ display: 'flex' }}>
                        <img style={{ left: '17px', position: 'absolute', marginTop: '20px' }} src={Rectangle} alt="" />

                        <div style={{ overflow: 'auto', marginLeft: '20px', left: '47px', position: 'absolute', marginTop: '30px', marginRight: '30px',marginBottom:'20px', background: '#69235B', color: 'white', borderTopRightRadius: '10px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', padding: '10px' }}>

                            Let your curiosity guide you; wishing you blessings and enlightenment 🕉️
                        </div>
                    </div>
                    
                    <div className="mb-3 myStyle18" >
                        <label for="exampleFormControlInput1" class="form-label"></label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="your messages" name='message' onChange={onChange} />
                        <button type="button" class="btn" style={{position:'absolute',right:'30px'}}><img src={plane} alt="" /></button>
                        <button type="button" class="btn" style={{position:'absolute',right:'-2px'}}><img src={microphone} alt="" /></button>
                    </div>
                </div>
            </div>
            <div>
                {/* style={{position:'absolute', bottom:'-199px'}} */}
            </div>
            <div style={{position:'fixed',right:'20px',bottom:'20px'}}>
            {
                        chats.map((chat)=>{
                            <div height='80vh'></div>
                            return <div className='container' ><p style={{background:'#FBBC04', padding:'10px',borderEndEndRadius:'10px',borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px',color:'white'}}>{chat.message} </p></div>
                        })
                    }
                    </div>
        </div>

    )
}

export default Chats
