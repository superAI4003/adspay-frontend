import React from 'react'; 

import icon_card_balance from '../../../assets/images/icons/icon_card_balance.png'
import icon_wallet from '../../../assets/images/icons/icon_wallet.png'
import icon_us from '../../../assets/images/flags/icon_us.png'
function Total_Balance_Cards() {
  return (
    <div className='w-full bg-white p-[24px] rounded-[12px] border border-[#E9EBEE] text-primary-title-color font-poppins '>
      
        <img src={icon_card_balance} alt='icon balance'/>
        <div className='flex items-center justify-between pt-[16px] pb-[12px]'>
          <p className='font-medium text-[20px]'>Total Card Balance</p>
          <div className='flex justify-center items-center gap-[12px]'>
            <img src={icon_us} alt='icon_us'/>
            <p className='font-medium text-[20px]'>USD</p>
          </div>
        </div>
        <p className='font-semibold text-[36px]'>$13,748,32</p>
        <p className='text-[16px] font-light py-[16px]'>This is the total balance of all your cards combined.</p>
        <div className='gap-[10px] flex'>
          <button className='flex justify-center items-center gap-2 flex-[60%] bg-primary-button-gradient text-white rounded-lg py-2 border hover:bg-primary-button-hover-gradient'>
            <img src={icon_wallet} alt='recive moeny icon' className='w-[24px] h-[24px]'/>
            My Cards</button>
          <button className='flex-[40%] text-center border bg-[#eeeeee] rounded-lg text-[#0C0E12] hover:bg-slate-500/20'>Card Balance TopUp</button>
        </div>
    </div>
  );
}

export default Total_Balance_Cards;