import React from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';
import email_icon from '../Assets/email.png';


export default function LoginSignup () {

    const [action, setAction] = React.useState('Sign Up');
    const [FirstName, setFirstName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const getIsFormValid = () => {
        return(
            FirstName.length > 0 && email.length > 0 && password.length > 8
        )
    }
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>
                    {action}
                </div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
            {action==='Login' ? '' : <div className='input'>
            <img  src={user_icon} alt='' />
            <input  type='text' placeholder='Name' value={FirstName}/>
            </div>}

            <div className='input'>
                <img  src={email_icon} alt='' />
                <input  type='email' placeholder='Email' value={email}/>
            </div>
            <div className='input'>
                <img  src={password_icon} alt='' />
                <input  type='password' placeholder='Password'/>
            </div>
            </div>
            {action==='Sign Up' ? '' : <div className='forgot-password'>
            Forgot Password?
            <span>Click Here!</span>
        </div>}

            <div className='submit-container'>
                <button className={action === "Login" ? "submit disabled": "submit" } onClick={()=>{setAction("Sign Up")}}> Sign Up </button>
                <button className={action === "Sign Up" ? "submit disabled": "submit" } disabled={!getIsFormValid} onClick={()=>{setAction("Login")}}> Login </button>
            </div>
        </div>
    )
}