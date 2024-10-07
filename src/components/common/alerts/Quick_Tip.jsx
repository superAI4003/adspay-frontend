import React, { useState } from 'react';

function Quick_Tip({title, content}) {
const [isVisible, setIsVisible] = useState(true);
  return (
    <>
    {isVisible?
        (
    <div className='bg-[#F7FFF4] text-primary-title-color px-[18px] pb-[18px] rounded-[9px] border relative'>
        <h2 className='font-medium text-[20px] py-[7px]'>{title}</h2>
        <p className='font-medium text-[16px]'>{content}</p>
        <button className='absolute right-2 top-1 text-[#1FAB00] hover:text-[#224d18]' onClick={() => setIsVisible(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>):<></>
    }
    </>
  );
}
export default Quick_Tip;