import { decl } from 'postcss';
import React, { useState } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function User_State({active_cards, totalbalance, auth_time, decline_rate}) {
  return (
  <div className='w-full bg-[#E9EBEE] border-[#D0D0D0] rounded-[12px] border flex text-primary-title-color py-[24px] justify-around text-center font-poppins'>
    <div className='flex-1'>
        <p className='font-semibold text-[36px]'>{active_cards}</p>
        <p className='font-semibold text-[16px]'>Active Cards</p>
        <p className='font-light text-[12px]'>The amount of active cards</p>
    </div>
    <div  className='flex-1'>
        <p className='font-semibold text-[36px]'>${totalbalance}</p>
        <p className='font-semibold text-[16px]'>Total Card Balance</p>
        <p className='font-light text-[12px]'>Cards total available amount</p>
    </div>
    <div  className='flex-1'>
        <p className='font-semibold text-[36px]'>{auth_time}</p>
        <p className='font-semibold text-[16px]'>Auth Times</p>
        <p className='font-light text-[12px]'>Authorization times</p>
    </div>
    <div  className='flex-1 flex flex-col items-center  '>
        <div style={{ width: 42, height: 42 }} className='mb-[9px] '>
            <CircularProgressbarWithChildren value={66} counterClockwiss="true"  strokeWidth={16}
                                styles={{
                                    path: {
                                    stroke: '#39C086', // Change this to your desired color
                                    },
                                }}
                                >
                                    <p className='font-medium text-[12px] text-[#39C086]'>{decline_rate}%</p>
                                    
            </CircularProgressbarWithChildren>
        </div>
        <p className='font-semibold text-[16px]'>Decline Rate</p>
        <p className='font-light text-[12px]'>Declined/Auth Times</p>
    </div>

  </div>
  );
}
export default User_State;