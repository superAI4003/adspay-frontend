import React, { useState, useRef} from 'react';
import icon_emailbox from '../../assets/images/icons/icon_emailBox.png'

import Google_Button from '../common/buttons/Google_Button';
import Primary_Input from '../common/buttons/primary_input';
import Sidebar_Card from '../../assets/images/bgs/sidebar_card.png'
import Sidebar_Bg from '../../assets/images/bgs/sidebar_bg.png'

import icon_social_google from '../../assets/images/icons/icon_social_google.png'
import icon_social_x from '../../assets/images/icons/icon_social_x.png'
import icon_social_discord from '../../assets/images/icons/icon_social_discord.png'
import icon_social_inst from '../../assets/images/icons/icon_social_inst.png'
import { Link } from 'react-router-dom';

function ResetPassword() {
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step,setStep] = useState(1);

   const [otp, setOtp] = useState(Array(4).fill(''));
  const inputsRef = useRef([]);
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus on next input field if exists
    if (index < otp.length - 1 && inputsRef.current[index + 1]) {
      inputsRef.current[index + 1].focus(); // Use refs to focus
    }
  };
  return (
    <div className="w-full h-screen flex font-poppins">
      <div className={`flex-[45%] h-full rounded-e-xl flex flex-col ${step ===3 ? 'bg-[#121026]':''}`}
      style={step === 3 ?{}: { backgroundImage: `url(${Sidebar_Bg})`, backgroundSize: 'cover' }  }>
        <img src={Sidebar_Card} alt='sidebar_card' className=' mx-auto'/>
        <div className={`w-full ${step === 3 ?  'bg-primary-button-gradient':'bg-[#263A52]/35'} pl-[60px] flex-grow rounded-br-xl`}>
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
      {
        step === 1 ? (
          <div className='w-full h-full bg-white  px-20 flex justify-center rounded-lg border-[2px] border-[#E9EBEE] items-center flex-col'>
          <h1 className='text-4xl text-center  font-semibold text-primary-title-color pb-[15px] pt-[20px]'>Forgot Password?</h1>
          <p className='text-[16px] text-primary-color text-center pb-[36px] w-[350px]'>Don’t worry, we will send you instructions for resetting  </p>
          <div className='w-[350px] '>
            <Primary_Input placeholder="Email" type="text" onChange={(e) => setEmail(e.target.value)}/>
            
            <button
            onClick={()=>setStep(2)} 
            className='border border-primary-button-strike text-[16px] mt-[35px] text-white rounded-[10px] bg-primary-button-gradient hover:bg-primary-button-hover-gradient w-full py-[12px]'>
                  Reset Password
            </button>
            <div className='text-[16px] flex text-center gap-1 justify-center pt-[28px]'>
              <Link to="/auth/login" className='text-primary-placeholder-color underline'>Back to login</Link>
            </div>
          </div>
        </div>
        ) :
        step === 2 ? (
          <div className='w-full h-full bg-white  px-20 flex justify-center rounded-lg border-[2px] border-[#E9EBEE] items-center flex-col'>
          <h1 className='text-4xl text-center  font-semibold text-primary-title-color pb-[15px] pt-[20px]'>Confirm your email</h1>
          <img src={icon_emailbox} alt='icon email box' className='pb-5'/>
          <p className='text-[16px] text-primary-title-color text-center pb-[36px] font-medium '>Thank you for signing up! </p>
          <p className='text-[16px] text-primary-title-color text-center pb-[28px] font-medium w-[450px]'>
          Please check your <span className='font-bold underline'>inbox or spam folder</span> and click the confirmation link or enter the OTP to verify your email.
          </p>
          <p className='text-[16px] text-primary-title-color text-center pb-[28px] font-medium'>
          OTP has been send to your email jo**@example.com
          </p>
          <div className='flex gap-[8px]'>
            {otp.map((data, index) => {
              return (
                <div
                  key={index}
                  className='text-[36px] font-bold border w-[64px] h-[64px] rounded-md flex justify-center items-center '
                >
                      <input
                        key={index}
                        type="text"
                        name="otp"
                        maxLength="1"
                        value={data}
                        onChange={e => handleChange(e.target, index)}
                        className='w-full h-full border text-center outline-none rounded-md'
                        onFocus={e => e.target.select()}
                        ref={ref => inputsRef.current[index] = ref} // Assign refs here
                      />
                </div>
              );
            })}
          </div>
          <div className='flex gap-2 font-medium text-[12px] mt-[20px]'>
            <p>Didn't get the code? </p>
            <Link to="/" className='text-[#18B635]'>Click to resend</Link>
          </div>
          <button 
          onClick={()=>setStep(3)}
          className='border border-primary-button-strike text-[16px] mt-[20px] text-white rounded-[10px] bg-primary-button-gradient hover:bg-primary-button-hover-gradient w-full py-[12px]'>
           Confirm
          </button>
         
          </div>
        ) :
        step === 3 ? (
          <div className='w-full h-full bg-white  px-20 flex justify-center rounded-lg border-[2px] border-[#E9EBEE] items-center flex-col'>
          <h1 className='text-4xl text-center  font-semibold text-primary-title-color pb-[15px] pt-[20px]'>Password Reset</h1>
          <div className='w-[350px] '>
            <Primary_Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <Primary_Input placeholder="New Password" type="password" onChange={(e) => setNewPassword(e.target.value)}/>
            
            <button
            className='border border-primary-button-strike text-[16px] mt-[35px] text-white rounded-[10px] bg-primary-button-gradient hover:bg-primary-button-hover-gradient w-full py-[12px]'>
                  Save
            </button>
          </div>
        </div>
        ):
        null
      }
      </div>
      
    </div>
  );
}

export default ResetPassword;