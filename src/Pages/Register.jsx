import React from 'react' 
import { Link } from 'react-router-dom'
import logo from '../assets/exams 2.png'
import left from '../assets/left.png'
import right from '../assets/right.png'
import '../Styles/Register.css'

function Register(){
    return(
        <div>
                <div className='s-nav-parent'>
                <div className='s-nav'>
                    <div className='nav-one'><Link to='/'><img src={logo}/></Link></div>
                    <div>Already have an account?<Link to='/login'>Login here</Link>  </div>
                </div>
            </div>
            <div className='sign-parent'>
                <div className='sign'>
                    <div className='sign-one'>
                        <h1>Create An Account</h1>
                    </div>
                    <div className='sign-two'>
                    <div className='sign-sub-one'>
                            <div className='name'>
                                <div className='log-one'>
                                    <label>First Name</label>
                                    <input type="text" />
                                </div>
                                <div className='log-one'>
                                    <label>Last Name</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='log-one'>
                                <label>Username</label>
                                <input type="text" />
                            </div>
                            <div className='log-one'>
                                <label>Email Adrees</label>
                                <input type="email" />
                            </div>
                            <div className='log-one'>
                                <label>Mobile Number</label>
                                <input type="number" />
                            </div>
                            <div className='password'>
                                <div className='log-one'>
                                    <label>Password</label>
                                    <input type="password" />
                                </div>
                                <div className='log-one'>
                                    <label style={{width:200}}>Confirm Password</label>
                                    <input type="password" />
                                </div>
                                </div>
                            <button style={{color: '#ffffff', background: '#1178FF', border: 'none',padding:"20px 20px"}}> Login</button>
                        </div>
                        <div className='sign-sub-two'>
                            <img src={left} alt="" /><img src={right} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Register