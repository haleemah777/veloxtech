import React from 'react' 
import { Link } from 'react-router-dom'
import logo from '../assets/exams 2.png'
import facebook1 from '../assets/facebook 1.png'
import instagram1 from '../assets/instagram 1.png'
import linkedin1 from '../assets/linkedin 1.png'
import twitter1 from '../assets/twitter 1.png'
import icon from '../assets/Icon.png'
import '../Styles/ContactUs.css'
import location from '../assets/location.png'


function ContactUs(){
    return(
        <div>
        <div>
            <div className='blog-parent-one'>
                <div className='blog-one'>
                    <div>
                        <h3>Support</h3>
                        <h1>How can we help you?</h1>
                        <p>We Will Open The World Of Knowledge For You! This is the latest online<br/> examination system you will ever need! </p>
                    </div>
                </div>
            </div>
            <div className='contact-two-grand'>
            <div className='contact-two-parent'> 
                <div className='contact-two-one'>
                    <div>
                        <h1>Contact Us</h1>
                        <p className='wale'>We Will Open The World Of Knowledge For You! This is the latest online examination system you will ever need! </p>
                    </div>
                    <div className='contact-two-sub2'>
                        <div className='sub2'>
                            <div>
                            <h4>Head Office</h4>
                            <p>17/18 Folabi Baker street</p> Agungi, Lekki, Lagos Nigeria
                            <div className='location'><img  style={{width:50}}src={location} alt="" /> <p style={{color:  '#002099'}}>Get directions</p></div>
                            <p>+234 4863 33773</p>Examsafricainfo.com
                            </div>
                            <Link to='https://www.linkedin.com/company/exams-africa/'><img src={linkedin1} alt="" /></Link>
                            <img src="" alt="" /><img src={instagram1} alt="" /><img src={facebook1} alt="" />
                        </div>
                    </div>
                </div>
                <div className='contact-two-two'>
                    <div>  
                        <div  className='contact' >
                           <div className='one' id='one'>
                                <label>Name</label>
                                <input type="text" placeholder='Garba Garba' />
                           </div>
                           <div className='one' id='one'>
                                <label>Email Address</label>
                                <input type="email" placeholder='grababegd@gmail.com'/>
                            </div>
                        </div>
                        <div className='one'>
                                <label>Subject</label>
                                <input type="text" placeholder='Can’t find a subject'/>
                            </div>
                            <div className='one'>
                                <label>How can we help you?</label>
                                <textarea placeholder='I need to study for a hausa exam and i can’t find the course'/>
                           </div>
                        </div>
                        <div className='contact-butt'><button style={{background:'#002099', color: '#f8ecd7'}}>send message <img src={icon} alt="" /></button></div>
                    </div>
                    
                </div>
                
            </div>
            </div>
            <div className='contact-last-parent'>
                <div className='contact-last'>
                    <div>
                        <h3>Need specific help?</h3>
                        <p>Visit our frequently asked questions section here or make use our social media platforms<br/> to get in contact with us. Click on any of the social media icons to be redirected.</p>
                    </div>
                </div>
            </div>
            <div className='last'>
                    <div className='last-one'>
                        <div className='last-sub-one'>
                            <h3>Main</h3>
                            <p><Link to='/'>Home</Link></p>
                        </div>
                        <div className='last-sub-two'>
                            <h3>Need Help</h3>
                            <p><Link to='/contact'>Contact Us</Link></p>
                            <p><Link to='/faq'>FAQ</Link></p>
                            </div>
                        <div className='last-sub-three'>
                            <h3>Features</h3>
                            <p>Categories</p>
                            <p>Past Questions</p>
                            <p>Subjects</p>
                        </div>
                        <div className='last-sub-four'>
                            <h3>Informative</h3>
                            <p> <Link to='/blog'>Blog</Link></p>
                            </div>
                        </div>
                        <div className='last-two'><img src={logo}/></div>
                    <div className='last-three'>We Will Open The World Of Knowledge For You! This is the latest online examination system you will ever need!<br/> With our easy online exam site, you will set up your own engaging exams that fit any kind of difficulty level and be a <br/>learning expert.</div>
                    <div className='last-four-parent'>
                    <div className='last-four'></div>
                    <Link to='https://www.linkedin.com/company/exams-africa/'><img src={linkedin1} alt="" /></Link>
                        <Link to='https://exams.africa/#0'><img src={instagram1} alt="" /></Link>
                        <Link to='https://www.instagram.com/examsafrica/'><img src={twitter1} alt="" /></Link>
                        <Link to='https://exams.africa/#0'><img src={facebook1} alt="" /></Link>
                    </div>
                    </div>
                <footer>
                <div className='footer'><p>&copy;  2022 All Rights reserved by Exams Africa</p></div>
            </footer>

        </div>
        
    )
}
export default ContactUs