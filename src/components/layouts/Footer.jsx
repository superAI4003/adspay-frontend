import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
        <div className='w-full h-[1px] mt-[40px] bg-[#c6c6c6]'></div>
        <div className='flex justify-between  pt-[18px] pb-[44px] font-medium text-[16px] text-[#434750]'>
            <p>Copyright © 2024 AdsPAY Operating Company, LLC.</p>
            <div className='flex gap-[40px]'>
                <Link to="/">Affiliate</Link>
                <Link to="/">Email Us</Link>
                    <Link to="/" className='text-[#2437FB]'>Join Our Telegram</Link>
            </div>
        </div>
    </div>
  );
}

export default Footer;