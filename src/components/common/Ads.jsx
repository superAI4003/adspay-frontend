import React, { useState } from 'react';
import black_card from '../../assets/images/bgs/black_card.png'
import icon_wallet from '../../assets/images/icons/icon_wallet.png'
import main_bg from '../../assets/images/bgs/main_bg.png'
function Ads() {
  return (
   <div className='py-[28px] px-[56px] flex justify-between rounded-[12px] bg-slate-400 font-poppins items-center mt-[80px] mb-[63px] '
   style={{ backgroundImage: `url(${main_bg})` }}
   >
    <div>
        <p className='text-[32px] font-semibold  text-white'>Shop, Promote, and Pay</p>
        <p className='text-[15px] text-white w-[550px] pt-[15px] pb-[35px]'>Use your virtual card for Google Ads, Facebook Ads, TikTok Ads, or any online shopping. Pay for anything, anywhere, with ease.</p>
        <button className='flex justify-center items-center text-white gap-2 py-2 px-4 rounded-[10px] bg-secondary-button-gradient hover:bg-secondary-button-hover-gradient'>
            <img src={icon_wallet} alt='icon_wallet'/>
        Create Your Card Today
        </button>
    </div>
    <img src={black_card} alt='black card'/>
   </div>
  );
}
export default Ads;