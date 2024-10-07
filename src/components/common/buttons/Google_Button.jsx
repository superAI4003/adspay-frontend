import React from 'react';
import googleIcon from '../../../assets/images/icons/icon_google.png'
import messageIcon from '../../../assets/images/icons/icon_message.png'
function Google_Button({ text, onClick }) {
  return (
    <div className='w-full'>
        <button 
        className="text-[16px] gap-[8px] flex items-center justify-center text-primary-color py-[12px] rounded-[10px] border-[#4285F4] w-full border hover:bg-primary-bg-color  hover:border-blue-700" 
        onClick={onClick} 
        >
        <img src={googleIcon} alt='Google Button Icon'/>
            {text}
        </button>
        <div className='flex gap-5 items-center pt-[16px]'>
            <div className='h-[1px] w-full bg-secondary-button-strike'></div>
            <img src={messageIcon} className='p-[10px] border-[2px] border-secondary-button-strike rounded-[10px] ' alt='message icon'/>
            <div className='h-[1px] w-full bg-secondary-button-strike'></div>
        </div>
    </div>
  );
}

export default Google_Button;