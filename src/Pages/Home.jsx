import React from 'react' 
import '../Styles/Home.css'
import logo from '../assets/exams 2.png'
import { Link } from 'react-router-dom'
import exam3 from '../assets/exam 3.png'
import exam4 from '../assets/exam 4.png'
import exam5 from '../assets/exam 5.png'
import{TbNotebook} from 'react-icons/tb'
import{TbActivityHeartbeat} from 'react-icons/tb'
import {LuLayoutDashboard} from 'react-icons/lu'
import {BiDollarCircle} from 'react-icons/bi'
import exam10 from '../assets/exam 10.png'
import exam11 from '../assets/exam 11.png'
import exam12 from '../assets/exam 12.png'
import exam13 from '../assets/exam 13.png'
import exam14 from '../assets/exam14.png'
import exam15 from '../assets/exam 15.png'
import exam16 from '../assets/exam 16.png'
import exam17 from  '../assets/exam 17.png'
import exam18 from '../assets/exam 18.png'
import facebook1 from '../assets/facebook 1.png'
import instagram1 from '../assets/instagram 1.png'
import linkedin1 from '../assets/linkedin 1.png'
import twitter1 from '../assets/twitter 1.png'
import video from '../assets/video.mp4'

function Home(){
    return(
        <div>
        <div className='home-main'>
        <div className='home-grand-one'>
            <div className='home-parent-one'>
                <div className='home-one-one'>
                    <div className='p-p'>
                        <div className='pra'> <h1>Practice</h1> <img src={exam3} alt="" /> </div>
                        <div className='pre'> <img src={exam4} alt="" /> <h1>Prepare</h1></div>
                    </div>
                    <div className='exel-head'>
                            <div className=''><h1>Excel</h1></div>
                            <div className='b-p'>
                                <div className='b1'><button style={{width: '80px' , height: '50px'}}>JAMB - UTME</button><button style={{width: '80px', height: '50px'}}>WAEC - SSCE</button><button style={{width: '80px' , height: '50px'}}>WAEC - GCE</button></div>
                                <div className='b2'><button style={{width: '180px' , height: '50px'}}>COMMON ENTRANCE EXAM</button><button style={{width: '80px', height: '50px'}}>NECO</button></div>
                            </div>
                        </div>
                        <div className='write'>
                        <p >Welcome to the Exams.Africa, Exams Africa is a platform designed specifically for Africans looking to practise for upcoming exams. Our platform offers a comprehensive collection of past exam questions from a wide range of subjects, allowing users to test their knowledge and improve their skills.</p>
                        </div>
                        <div className='home-one-bottom'>
                        <Link to='/register'><button style={{background: '#002099',color: '#ffffff', width: '150px', height:'45px', border: 'none',}}>Get Started </button> </Link>
                        <Link to='/login'><button style={{background: '#ffffff',color: '#002099', width: '150px', height: '45px',  border: '2px solid #002099'}}>Start Practising</button> </Link>
                        </div>
                    </div>
                    
                    <div className='home-one-two'>
                    <img src={exam5}/>
                    </div>
                
            </div>
            </div>
            <div className='home-two'>
                <div className='home-two-sub'>
                <div className='pass'>
                    <h1><LuLayoutDashboard/> Past Questions</h1>
                    <p>Thousands of Past Questions</p>
                </div>
                <div className='Exams'>
                    <h1><TbNotebook/> Mock Exams</h1>
                    <p>Mock examination Feature</p> 
                </div>
                <div className='Track'>
                    <h1><TbActivityHeartbeat/> Track activity</h1>
                    <p>Dashboard to track all activities</p>  
                </div>
                <div className='Afford'>
                    <h1><BiDollarCircle/> Affordable</h1>
                    <p>Low cost on in-app purchases</p>
                </div>  
                </div>
            </div>
            <div className='lab'>
            <h3>Why ExaLab Is Best?</h3>
            </div>
            <div className='home-grand-three'>
                <div className='home-parent-three'>
                    <div className='three-one'>
                        <div><img src={exam10}/></div>
                        <div className='words'>
                        <h3>Choose Your Category</h3>
                            <p>Choose the exam category based on your subject. This helps you differentiate between subjects that are essential for studying a particular course and subjects.</p>
                            <div className='linee'></div>
                        </div>
                    </div>
                    <div className='three-two'>
                        <div className='words'>
                            <h3>Select Preferable Subject</h3>
                            <p>The aim of this to help you see things more clearly and get a good impression of the possible options, whether you have your heart set on a particular  career path or not.</p>
                            <div className='line'></div>
                        </div>
                        <div><img src={exam11}/></div>
                    </div>
                    <div className='three-three'>
                        <div><img src={exam12}/></div>
                        <div className='words'>
                        <h3>Attend Examination</h3>
                            <p>Through our activities and technology, we are able to provide reliable data across several African products.</p>
                            <div className='linee'></div>
                            
                        </div>
                    </div>
                    <div className='three-four'>
                        <div className='words'>
                            <h3>Select Preferable Subject</h3>
                            <p>The aim of this to help you see things more clearly and get a good impression of the possible options, whether you have your heart set on a particular career path or not.</p>
                            <div className='line'></div>
                        </div>
                        <div><img src={exam13}/></div>
                    </div>
                </div>
            </div>
                
            <div className='home-four'>
                <h1>Available on These platforms</h1>
                <div className='home-four-sub'><img src={exam14}/><img src={exam15}/><img src={exam16}/><img src={exam17}/><img src={exam18}/></div>
            </div>
            <div  className='home-five'>
                <h1>Use the Exam.Africa </h1><h1>Platform the right way</h1>
                <p>Learn the essential ways to successfully maximize the Platform for a exam success.</p>
            </div>
            <div className='B-10'>
                    <video className='sub-B-10' controls autoPlay> 
                    <source src={video} type= "video/mp4" />
                    </video>
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
                    <div className='last-four'>
                    <Link to='https://www.linkedin.com/company/exams-africa/'><img src={linkedin1} alt="" /></Link>
                        <Link to='https://exams.africa/#0'><img src={instagram1} alt="" /></Link>
                        <Link to='https://www.instagram.com/examsafrica/'><img src={twitter1} alt="" /></Link>
                        <Link to='https://exams.africa/#0'><img src={facebook1} alt="" /></Link>
                    </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className='footer'><p>&copy;  2022 All Rights reserved by Exams Africa</p></div>
            </footer>
        </div>
    )
}
export default Home   
    