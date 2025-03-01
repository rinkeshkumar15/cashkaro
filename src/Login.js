import React from 'react'
import Home from './Home'
import './Login.css' 
 
    

const Login = () => {
  var userData=[
    {userName:"Linkesh", passcode:111, cart:[]},
    {userName:"LK", passcode:222, cart:[]},
    {userName:"Loki", passcode:333, cart:[]}]
    const SignUp=() =>{
      var userName=document.getElementById("userName").value;
      var userPasscode=document.getElementById("passcode").value;
      var getDetails=userData.filter((data)=>{
        return userName == data.userName;
      });
      
      if(getDetails.length>0){
       
        if(getDetails[0].passcode==userPasscode){
          
          localStorage.setItem("userName", getDetails[0].userName);
          window.location.replace('/home');
        }
      }
      else{
        console.log("Wrong Password");
      }
    }
  return (
    <div className='container'>
        <div className="form">
      <h1>Login</h1>
      <hr></hr>
      <label>Username</label>
      <input type='text' placeholder='Enter your name' id='userName'></input>
      <br></br>
      <label>Password</label>
      <input type='number' placeholder='Enter your password' id='passcode'></input>
      <p>Forgot Password</p>
      <button onClick={SignUp}>SignUp</button>
      </div>
    </div>
  )
   
}

export default Login