import React from 'react'; 
import { GoCheck } from "react-icons/go";


function Checkbox({ text, onClick,checked, className}) {
  return (
    <div className={`w-full flex items-center gap-[8px] cursor-pointer ${className}`} onClick={onClick}>
        <div className=' border-[1.5px] border-[#2A2A2A] rounded-[5px]'>
         {checked? <GoCheck className='w-4 h-4' />:<div className='w-4 h-4         '></div>}
        </div>
        <p className='text-[16px] text-[#5c5c5c]'>{text}</p>
    </div>
  );
}

export default Checkbox;