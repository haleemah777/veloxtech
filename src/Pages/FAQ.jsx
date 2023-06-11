import React,{useState} from 'react' 
import  '../Styles/FAQ.css'
import icon from '../assets/Icon.png'
import { Link } from 'react-router-dom'
import logo from '../assets/exams 2.png'
import facebook1 from '../assets/facebook 1.png'
import instagram1 from '../assets/instagram 1.png'
import linkedin1 from '../assets/linkedin 1.png'
import twitter1 from '../assets/twitter 1.png'
import book from '../assets/book.png'
import stroke from '../assets/Stroke.png'
function FAQ(){
    const [drop, setDrop] = useState(false)
    const dropDown=()=>{
        setDrop(!drop)
    }
    const [drop1, setDrop1] = useState(false)
    const dropDown1=()=>{
        setDrop1(!drop1)
    }
    const [drop2, setDrop2] = useState(false)
    const dropDown2=()=>{
        setDrop2(!drop2)
    }
    const [drop3, setDrop3] = useState(false)
    const dropDown3=()=>{
        setDrop3(!drop3)
    }
const [drop4, setDrop4] = useState(false)
    const dropDown4=()=>{
        setDrop4(!drop4)
    }
    const [drop5, setDrop5] = useState(false)
    const dropDown5=()=>{
        setDrop5(!drop5)
    }
    return(
        <div>
            <div className='blog-parent-one'>
                <div className='blog-one'>
                    <div>
                        <h3>FAQ</h3>
                        <h1>What do people usually ask?</h1>
                        <p>We Will Open The World Of Knowledge For You! This is the latest online<br/> examination system you will ever need! </p>
                    </div>
                </div>
            </div>
            <div className='faq-two-grand'>
                <div className='faq-two-parent'>
                    <div className='faq-two'>
                        <div className='faq-two-sub' onClick={dropDown}>
                            <div className='f-one'>
                                <p>What is Exam Africa?</p><img src={stroke} alt="" />
                            </div>
                            {drop &&  <div className='f-one-sub'>
                                <p>Exams Africa is a platform designed to help Africans prepare prepare for exams.<br/> We offer a comprehensive collection of past exam questions from a wide range of <br/> subjects, allowing users to test their knowledge and improve their skills.</p>
                            </div>}
                        </div>
                        <div  className='faq-two-sub' onClick={dropDown1}>
                            <div className='f-one'>
                                <p>Who can use Exam Africa?</p><img src={stroke} alt="" />
                            </div>
                            {drop1 &&  <div className='f-one-sub'>
                                <p>Exams Africa is designed for anyone who is looking to practise for upcoming <br/> exams. This includes students preparing for high school or college exams, as well <br/> as professionals looking to advance their careers.</p>
                            </div>}
                        </div>
                        </div>
                        <div className='faq-two'>
                        <div  className='faq-two-sub' onClick={dropDown2}>
                            <div className='f-one'>
                                <p>What subjects are covered on Exams Africa?</p><img src={stroke} alt="" />
                            </div>
                            {drop2 &&  <div className='f-one-sub'>
                                <p>Our platform offers exam questions from a variety of subjects, including math,<br/> science, English, and history. We are constantly updating our collection to ensure<br/>that we have the most current and relevant exam questions available.</p>
                            </div>}
                        </div>
                        <div  className='faq-two-sub' onClick={dropDown3}>
                            <div className='f-one'>
                                <p>Is Exams Africa free to use?</p><img src={stroke} alt="" />
                            </div>
                            {drop3 && <div className='f-one-sub'>
                                <p>Exams.Africa isn't free but comes with a reasonable subscription module. We  <br/>believe that everyone should have access to the resources they need to succeed,  <br/>regardless of their financial situation.</p>
                            </div>}
                        </div>
                    </div>
                    <div className='faq-two'>
                        <div  className='faq-two-sub' onClick={dropDown4}>
                            <div className='f-one'>
                                <p>Can I track my progress on Exams Africa?</p><img src={stroke} alt="" />
                            </div>
                            {drop4 && <div className='f-one-sub'>
                                <p>Yes, our platform includes a tracking system that allows users to monitor their  <br/>progress and identify areas where they need to improve. This allows users to  <br/>focus their studying and maximize their exam performance.</p>
                            </div>}
                        </div >
                        <div  className='faq-two-sub' onClick={dropDown5}>
                            <div className='f-one'>
                                <p>Is Exams Africa availabe on mobile devices?</p><img src={stroke} alt="" />
                            </div>
                            {drop5 && <div className='f-one-sub'>
                                <p>Yes, our platform is fully mobile-responsive and you can also download our mobile <br/> app, allowing users to access and use it on their smartphones and tablets. This  <br/>makes it easy to practise for exams on the go, anytime, anywhere.</p>
                            </div>}
                        </div>
                    </div>
            </div>
            </div>
            <div className='faq-last'>
                <h3>Get Every Latest News Feed</h3>
                <div className='line-one'></div>
                </div>
                <div className='middle-parent'> 
                <div className='middle'>
                    <div className='middle-sub'>
                        <div>
                        <div className='b-img'><img src={book} alt="" /></div>
                            <h3>Examination Preparations</h3>
                            <p>Start your revision early. There is no substitute for starting early with revision. You need to give yourself enough time to review everything that you have studied, and make sure that.......</p>
                            <button style={{background:'#1178ff', color: '#f8ecd7'}}>View This Article <img src={icon} alt="" /></button>
                            </div>
                        <div>
                            <div className='b-img'><img src={book} alt="" /></div>
                            <h3>Examination Preparations</h3>
                            <p>Start your revision early. There is no substitute for starting early with revision. You need to give yourself enough time to review everything that you have studied, and make sure that.......</p>
                            <button style={{background:'#1178ff', color: '#f8ecd7'}}>View This Article <img src={icon} alt="" /></button>
                        </div>
                    </div>
                    <div className='middle-sub'>
                        <div>
                            <div className='b-img'><img src={book} alt="" /></div>
                            <h3>Examination Preparations</h3>
                            <p>Start your revision early. There is no substitute for starting early with revision. You need to give yourself enough time to review everything that you have studied, and make sure that.......</p>
                            <button style={{background:'#1178ff', color: '#f8ecd7'}}>View This Article <img src={icon} alt="" /></button>
                        </div>
                        <div>
                        <div className='b-img'><img src={book} alt="" /></div>
                            <h3>Examination Preparations</h3>
                            <p>Start your revision early. There is no substitute for starting early with revision. You need to give yourself enough time to review everything that you have studied, and make sure that.......</p>
                            <button style={{background:'#1178ff', color: '#f8ecd7'}}>View This Article <img src={icon} alt="" /></button>
                            </div>
                    </div>
                    <div  className='middle-sub'>
                        <div>
                            <div className='b-img'><img src={book} alt="" /></div>
                            <h3>Examination Preparations</h3>
                            <p>Start your revision early. There is no substitute for starting early with revision. You need to give yourself enough time to review everything that you have studied, and make sure that.......</p>
                            <button style={{background:'#1178ff', color: '#f8ecd7'}}>View This Article <img src={icon} alt="" /></button>
                        </div>
                        <div>
                            <div className='b-img'><img src={book} alt="" /></div>
                            <h3>Examination Preparations</h3>
                            <p>Start your revision early. There is no substitute for starting early with revision. You need to give yourself enough time to review everything that you have studied, and make sure that.......</p>
                            <button style={{background:'#1178ff', color: '#f8ecd7'}}>View This Article <img src={icon} alt="" /></button>
                        </div>
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
export default FAQ