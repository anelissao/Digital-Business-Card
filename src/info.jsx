import React from 'react';
import myPic from "../images/myPic.png"
import linkedin from "../images/linkedin.png"
import email from "../images/email.png"

function Info(){
    return(
        <div className='container'>
            <img src={myPic} alt="my picture" className="my--pic"/>
            <h1>Anouar Elissaoui</h1>
            <p>Junior Front End Developer</p>
            <small>anouarelissaoui20@gmail.com</small>         
            <div className='info--action'>
                <button className='email-btn'>
                    <img src={email} alt='Email icon' />
                    Email
                </button>
                <button className='linkedin-btn'>
                    <img src={linkedin} alt='LinkedIn icon' />
                    LinkedIn
                </button>
            </div>
        </div>
    )
}

export default Info;