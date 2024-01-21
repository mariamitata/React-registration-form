import React from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';
import email_icon from '../Assets/email.png';
import { validateEmail } from '../../utils';


export default function LoginSignup () {

    const [action, setAction] = React.useState('Sign Up');
    const [FirstName, setFirstName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState(
        {
            value: "",
            isTouched: false,
        }
    );

    const getIsFormValid = () => {
        if(FirstName === "" || email === "" || password === "" || validateEmail(email) === false || password.length < 8 ) {
          return false;
        } else {
            return true;
        }
    }
    function handlePasswordChange(e) {
        if(e.target.value.length < 8) {
            setPassword({ value: e.target.value, isTouched: true });
        }
        setPassword({ value: e.target.value, isTouched: true });
    }
    function passwordErrorMessage() {
        return(
            <p className='FieldError'>Password should have at least 8 characters</p>
        )
    }
    function clearForm() {
        setFirstName('');
        setEmail('');
        setPassword('');
        setPassword({ value: "", isTouched: false });
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(getIsFormValid())
        if(getIsFormValid()) {
            if(action === 'Login') {
                alert('User Loged In!');
            } else {
                alert('User Signed Up!');
            }
            clearForm();
        }

    }
    return (
        <form onSubmit = {handleSubmit} className='container'>
            <div className='header'>
                <div className='text'>
                    {action}
                </div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
            {action==='Login' ? '' : <div className='input'>
            <img  src={user_icon} alt='' />
            <input  
            type='text' 
            placeholder='Name' 
            value={FirstName}
            onChange={e=>(setFirstName(e.target.value))}
            />
            </div>}

            <div className='input'>
                <img  src={email_icon} alt='' />
                <input  
                type='email' 
                placeholder='Email' 
                value={email} 
                onChange={e=>(setEmail(e.target.value))}
                />
            </div>
            <div className='input'>
                <img  src={password_icon} alt='' />
                <input  
                type='password' 
                placeholder='Password' 
                value={password.value}
                onChange={handlePasswordChange}
                {...password.isTouched && passwordErrorMessage}
                />
            </div>
            </div>
            {action==='Sign Up' ? '' : <div className='forgot-password'>
            Forgot Password?
            <span>Click Here!</span>
        </div>}

            <div className='submit-container'>
                <button type="submit" className={action === "Login" ? "submit disabled": "submit" } onClick={()=>{setAction("Sign Up")}}> Sign Up </button>
                <button type="submit" className={action === "Sign Up" ? "submit disabled": "submit" } disabled={!getIsFormValid} onClick={()=>{setAction("Login")}}> Login </button>
            </div>
        </form>
    )
}