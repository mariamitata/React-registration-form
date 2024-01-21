import './App.css'; 
import React from 'react';
import LoginSignup from './Components/loginSignup/LoginSignup';
 
function App() { 
const [text, setText] = React.useState(""); 
 return ( 
    <div>
      <LoginSignup/>
  
    </div>
 ); 
} 

export default App; 