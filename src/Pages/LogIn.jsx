import React from 'react' 
import { Link } from 'react-router-dom'
import logo from '../assets/exams 2.png'
import left from '../assets/left.png'
import right from '../assets/right.png'
import '../Styles/Login.css'


function LogIn(){
    return(
        <div>
            <div className='s-nav-parent'>
                <div className='s-nav'>
                    <div className='nav-one'><Link to='/'><img src={logo}/></Link></div>
                    <div>Don’t have an account? Sign up <Link to='/register'>here</Link>  </div>
                </div>
            </div>
            <div className='login-parent'>
                <div className='login'>
                    <div className='login-one'>
                        <h1>Login to Continue</h1>
                    </div>
            <div className='login-two'>
                        <div className='login-sub-one'>
                            <label>Username</label>
                            <input type="text" />
                            <label>Password</label>
                            <input type="password" />
                            <button style={{color: '#ffffff', background: '#1178FF', height: '50px', width: '60%', border: 'none',}}> Login</button>
                        </div>
            <div className='login-sub-two'>
                            <img src={left} alt="" /><img src={right} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}
export default LogIn