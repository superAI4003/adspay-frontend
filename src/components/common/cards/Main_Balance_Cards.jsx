import React from 'react'; 

import icon_balance from '../../../assets/images/icons/icon_dash_state_balance.png'
import icon_dash_state_receive_money from '../../../assets/images/icons/icon_add_funds_active.png'
import icon_us from '../../../assets/images/flags/icon_us.png'
import { Link } from 'react-router-dom';
function Main_Balance_Cards() {
  return (
    <div className='w-full bg-white p-[24px] rounded-[12px] border border-[#E9EBEE] text-primary-title-color font-poppins'>
        <img src={icon_balance} alt='icon balance' className='w-[38px] h-[32px]'/>
        <div className='flex items-center justify-between pt-[16px] pb-[12px]'>
          <p className='font-medium text-[20px]'>Main Account Balance</p>
          <div className='flex justify-center items-center gap-[12px]'>
            <img src={icon_us} alt='icon_us'/>
            <p className='font-medium text-[20px]'>USD</p>
          </div>
        </div>
        <p className='font-semibold text-[36px]'>$2,754</p>
        <p className='text-[16px] font-light py-[16px]'>Here’s your main account balance.</p>
        <div className='gap-[10px] flex'>
          <Link 
          to="/add-funds"
          className='flex justify-center items-center gap-2 flex-[60%] bg-primary-button-gradient text-white rounded-lg py-2 border hover:bg-primary-button-hover-gradient'>
            <img src={icon_dash_state_receive_money} alt='recive moeny icon' className='w-[24px] h-[24px]'/>
            Add Funds</Link>
          <button className='flex-[40%] text-center border bg-[#eeeeee] rounded-lg text-[#0C0E12] hover:bg-slate-500/20'>Withdraw</button>
        </div>
    </div>
  );
}

export default Main_Balance_Cards;