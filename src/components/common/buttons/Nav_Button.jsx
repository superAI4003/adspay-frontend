import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Nav_Button({text, to, icon,active_icon, active}) {
   const [isHovered, setIsHovered] = useState(false);
  return (
    <Link 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    to= {to} className={`text-[22px] flex items-center gap-[15px] pl-[10px] pr-[16px] py-[6px] rounded-[18px] hover:text-white hover:bg-primary-button-gradient ${active?'text-white bg-primary-button-gradient border border-primary-button-strike':'text-primary-title-color '}`}>
        <img src={`${active||isHovered?active_icon:icon} `} alt={text}/>
        {text}
    </Link>
  );
}
export default Nav_Button;