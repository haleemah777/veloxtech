import React from 'react' 
import '../Styles/Blog.css'
import book from '../assets/book.png'
import icon from '../assets/Icon.png'
import { Link } from 'react-router-dom'
import logo from '../assets/exams 2.png'
import facebook1 from '../assets/facebook 1.png'
import instagram1 from '../assets/instagram 1.png'
import linkedin1 from '../assets/linkedin 1.png'
import twitter1 from '../assets/twitter 1.png'
function Blog(){
    return(
        <div>
            <div className='blog-parent-one'>
                <div className='blog-one'>
                    <div>
                        <h3>Blog</h3>
                        <h1>Get the latest Updates</h1>
                        <p>We Will Open The World Of Knowledge For You! This is the latest online<br/> examination system you will ever need! </p>
                    </div>
                </div>
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
                            <p>Start your revision early. There is no substitute for starting early with <br/>revision. You need to give yourself enough time to review everything that you have studied, and make sure that.......</p>
                            <button style={{background:'#1178ff', color: '#f8ecd7'}}>View This Article <img src={icon} alt="" /></button>
                        </div>
                        <div>
                            <div className='b-img'><img src={book} alt="" /></div>
                            <h3>Examination Preparations</h3>
                            <p>Start your revision early. There is no substitute for starting early with <br/>revision. You need to give yourself enough time to review everything that you have studied, and make sure that.......</p>
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
export default Blog