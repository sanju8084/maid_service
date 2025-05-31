import { useState } from "react";
import '../signUp/signUp.css';
import { Link, useNavigate} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../utils";

const SignUp = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    name: '',
    email: '',
    password: '',
  });
const navigate=useNavigate();
  const handleChange = (e) => {
    const {name,value}=e.target;
    const copySignUpInfo={...signUpInfo};
    copySignUpInfo[name]=value;
    setSignUpInfo(copySignUpInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
const {name,email,password}=signUpInfo;
if(!name || !email || !password){
  return handleError('name ,email and password are required ')
}
try{
  const url="http://localhost:3000/api/auth/signUp";
  const response=await fetch(url,{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(signUpInfo)
  })
  const result=await response.json();
  const {success,message,error}=result;
  if(success){
    handleSuccess(message)
    setTimeout(()=>{
navigate('/login')
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
      <div className='flex-container'>
        <div className='container1'>
          <h2>Create A New Account</h2>
          <form onSubmit={handleSubmit} className="signup-form">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              value={signUpInfo.name}
              autoFocus
              autoComplete="off"
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={signUpInfo.email}
              autoComplete="off"
            />

            <label  htmlFor="password"> Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              value={signUpInfo.password}
              autoComplete="off"
            />

            <button  type="submit">Create an Account</button>

          </form>
<span className="signUpp">
  Already have an account ?
          <Link to='/login' className="signUp-link">
            Login
          </Link>
          </span>
<ToastContainer />
        </div>

        <div className='container2'>
          <img src="../account.png" alt="Sign Up" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
