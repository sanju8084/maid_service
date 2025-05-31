import  { useState } from 'react';
import '../login/login.css'
import {Link, useNavigate} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../utils";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
const navigate=useNavigate();
  const handleChange = (e) => {
    const {name,value}=e.target;
    const copyLoginInfo={...loginInfo};
    copyLoginInfo[name]=value;
    setLoginInfo(copyLoginInfo);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
const {email,password}=loginInfo;
if( !email || !password){
  return handleError('email and password are required ')
}
try{
  const url="http://localhost:3000/api/auth/login";
  const response=await fetch(url,{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(loginInfo)
  })
  const result=await response.json();
  const {success,message,jwtToken,name,error}=result;
  if(success){
    handleSuccess(message)
    localStorage.setItem('token',jwtToken);
    localStorage.setItem('loggedInUser',  JSON.stringify({name,email}));
     
    setTimeout(()=>{
navigate('/')
    },1000)
  }
  else if(error){
    const details=error?.details[0].message;
    handleError(details);
  }
  else if(!success){
    handleError(message)
  }
  console.log(result);
} catch(err){
  handleError(err);
}
    };

  return (
    <>
    <div className='login-flex-container'>
        <div className='login-container1'>
        <h2>Login </h2>
        <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={loginInfo.email}
          name="email"

          onChange={handleChange}
          autoComplete='off'
        />
        <input
          type="password"
          placeholder="Password"
          value={loginInfo.password}
          name="password"
autoComplete='off'
          onChange={handleChange}
        />
            <button type="submit">Login</button>
            </form>
   <span className='loginp'>
    Don't have an account ?
      <Link to='/SignUp' className='login-link' > SignUp</Link>
      </span>
      <ToastContainer />


        </div>
        <div className='login-container2'>
<img src="../account.png" />

        </div>
    </div>
    </>

);
};

export default Login;


