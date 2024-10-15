import React, { useState } from 'react';
import Google_Button from '../common/buttons/Google_Button';
import Primary_Input from '../common/buttons/Primary_Input';
import Sidebar_Card from '../../assets/images/bgs/sidebar_card.png'
import icon_social_google from '../../assets/images/icons/icon_social_google.png'
import icon_social_x from '../../assets/images/icons/icon_social_x.png'
import icon_social_discord from '../../assets/images/icons/icon_social_discord.png'
import icon_social_inst from '../../assets/images/icons/icon_social_inst.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';


function Login() {
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const navigate = useNavigate();
  const [responseOk,setResposeOK]=useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    setIsLoading(true);
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    
      body: JSON.stringify({
        email: email,  // The backend expects a "username" field but we're using the email as the username
        password: password
      })
    });
    setIsLoading(false);
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.access_token);
      navigate('/dashboard');
    } else {
      toast('Email & Password is not Correct!');
      setResposeOK(false)
    }
  };

  return (
    <div className="w-full h-screen flex font-poppins">
      <div className='flex-[45%] bg-[#121026] h-full rounded-e-xl flex flex-col'>
        <img src={Sidebar_Card} alt='sidebar_card' className=' mx-auto'/>
        <div className='w-full bg-primary-button-gradient pl-[60px] flex-grow rounded-br-xl'>
          <p className='text-[26px] text-white font-bold pt-[40px] '>Get virtual credit cards and pay your bills</p>
          <p className='text-[16px] text-white pt-[20px]'>
          No more stress—just easy, fast, and secure payments. Let’s get it done.
          </p>
          <div className='flex gap-[9px] pt-[48px]'>
            <div className='w-[55px] h-[55px] rounded-full bg-white flex justify-center items-center hover:bg-blue-200'>
              <img src={icon_social_google} className='w-full h-full'></img>
            </div>
           
            <div className='w-[55px] h-[55px] rounded-full bg-white flex justify-center items-center hover:bg-blue-200 p-3'>
              <img src={icon_social_discord} className='w-full h-full'></img>
            </div>
            <div className='w-[55px] h-[55px] rounded-full bg-white flex justify-center items-center hover:bg-blue-200 p-3'>
              <img src={icon_social_x} className='w-full h-full'></img>
            </div>
            <div className='w-[55px] h-[55px] rounded-full bg-white flex justify-center items-center hover:bg-blue-200 p-3'>
              <img src={icon_social_inst} className='w-full h-full'></img>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-[55%] bg-primary-bg-color h-full py-24 pl-20 pr-44'>
        <div className='w-full h-full bg-white  px-20 flex justify-center rounded-lg border-[2px] border-[#E9EBEE] items-center'>
          <div className='w-[350px] '>
            <h1 className='text-4xl text-center  font-semibold text-primary-title-color pb-[15px] pt-[20px]'>Welcome back</h1>
            <p className='text-[16px] text-primary-color text-center pb-[36px]'>Enter your adspay account details.</p>
            <Google_Button text="Login in with google"/>
            <Primary_Input placeholder="Email" type="text" onChange={(e) => setEmail(e.target.value)}/>
            <Primary_Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            {!responseOk && <p className='text-[12px] text-red-600 py-3'>Email & Password is not Correct!</p>}
            <div className='flex justify-between px-2 py-[27px]'>
              <div className='flex gap-1'>
                <input 
                    type="checkbox" 
                    id="subscribe" 
                    name="subscribe" 
                    // checked={checked} 
                    // onChange={handleChange}
                />
                <p className='text-[12px]'>Keep Me signed in</p>
              </div>
              <Link to="/auth/reset-password" className='text-[12px] underline border-primary-color text-primary-color'>Forgot Password</Link>
            </div>
            <button
             onClick={handleLogin}
             disabled={isLoading}
            className='border border-primary-button-strike text-[16px] text-white rounded-[10px] bg-primary-button-gradient hover:bg-primary-button-hover-gradient w-full py-[12px]'>
              Login
            </button>
            <div className='text-[16px] flex text-center gap-1 justify-center pt-[28px]'>
              <p className='text-[#707070]'>Don't have an account?</p>
              <Link to="/auth/signup" className='text-[#3CA7FF]/85 font-semibold '>Create one now!</Link>
            </div>
          </div>
        </div>
      </div>  
      <ToastContainer />

    </div>
  );
}

export default Login;