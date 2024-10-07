import React, { useState } from 'react'; 

function Recent_Deposit() {
  return (
   <div className='font-poppins text-primary-title-color pt-[40px]'>
    <h2 className=' font-medium text-[20px] pb-[15px]'>Recent Deposit</h2>

    <div className='w-full rounded-lg border border-[#E9EBEE]'  >
        <div className='text-[12px] text-[#0C0E12] bg-[#ECEFF3] flex px-8 text-left py-[9px] rounded-[8px]  border-[#E9EBEE] border-b'>
            <p className='flex-[25%]'>AMOUT</p>
            <p className='flex-[25%]'>DATE</p>
            <p className='flex-[25%]'>Funding Source</p>
            <p className='flex-[25%]'>Funding Source</p>
        </div>
        <div className='w-full text-[12px] font-medium px-8 flex py-[15px] border-b border-[#E9EBEE]'>
            <p className='flex-[25%] text-[#16B526]'>+6493 USD</p>
            <p className='flex-[25%]'>Sep 16, 2024 3:20</p>
            <p className='flex-[25%]'>USDT</p>
            <p className='flex-[25%]'>Complete</p>
        </div>
        <div className='w-full text-[12px] font-medium px-8 flex py-[15px] border-b border-[#E9EBEE]'>
            <p className='flex-[25%] text-[#16B526]'>+6493 USD</p>
            <p className='flex-[25%]'>Sep 16, 2024 3:20</p>
            <p className='flex-[25%]'>USDT</p>
            <p className='flex-[25%]'>Complete</p>
        </div>
        <div className='w-full text-[12px] font-medium px-8 flex py-[15px] border-b border-[#E9EBEE]'>
            <p className='flex-[25%] text-[#16B526]'>+6493 USD</p>
            <p className='flex-[25%]'>Sep 16, 2024 3:20</p>
            <p className='flex-[25%]'>USDT</p>
            <p className='flex-[25%]'>Complete</p>
        </div>
        <div className='w-full text-[12px] font-medium px-8 flex py-[15px]'>
            <p className='flex-[25%] text-[#16B526]'>+6493 USD</p>
            <p className='flex-[25%]'>Sep 16, 2024 3:20</p>
            <p className='flex-[25%]'>USDT</p>
            <p className='flex-[25%]'>Complete</p>
        </div>
    </div>
   </div>
  );
}
export default Recent_Deposit;