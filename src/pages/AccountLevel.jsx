import React from 'react';
import Header from '../components/layouts/header';
 

function AccountLevel() {
  return (
    <div className=" bg-primary-bg-color min-h-screen font-poppins">
        <div className='w-[80%]  mx-auto'>
           <Header/>
           <div className='boder-[#D0D0D0] border bg-[#EEEEEE] rounded-[8px] px-[80px] py-[55px] text-center mb-[55px]'>
            <p className='text-[12px] text-primary-color'>Account Level</p>
            <p className='text-[20px] font-medium text-primary-color pb-[25px]'>Standard</p>
            <div className='flex  bg-[#39C086]/25 rounded-[8px]'>
                <div className='flex-[75%] text-white flex  items-center bg-[#39C086] py-[10px] rounded-[8px] px-8 justify-start text-left'>
                    <p className='text-[12px] flex-1'>Spent in 30 Days: $750</p>
                    <p className='font-bold text-[20px] flex-1'>$750</p>
                </div>
                <div className='flex-[25%] flex items-center justify-end px-8'>
                    <p className='text-[12px] text-primary-color'>$250 left of $1,000</p>
                </div>
            </div>
           </div>

           <div className='w-full rounded-lg border border-[#E9EBEE]'  >
            <div className='text-[12px] text-[#0C0E12] bg-[#ECEFF3] flex px-8 text-left py-[9px] rounded-[8px]  border-[#E9EBEE] border-b'>
                <p className='flex-[25%]'>Level</p>
                <p className='flex-[25%]'>Terms</p>
                <p className='flex-[25%]'>Min. Comission</p>
                <p className='flex-[25%]'>Issue/Renewal</p>
                <p className='flex-[25%]'>Decline Price</p>
            </div>
            <div className='w-full text-[12px] font-medium px-8 flex py-[15px] border-b border-[#E9EBEE]'>
                <p className='flex-[25%]  '>Standard</p>
                <p className='flex-[25%]'>Upon Registration</p>
                <p className='flex-[25%]'>5%</p>
                <p className='flex-[25%]'>$4</p>
                <p className='flex-[25%]'>$0.5</p>
            </div>

            <div className='w-full text-[12px] font-medium px-8 flex py-[15px] border-b border-[#E9EBEE]'>
                <p className='flex-[25%]  '>Silver</p>
                <p className='flex-[25%]'>$1,000</p>
                <p className='flex-[25%]'>4.5%</p>
                <p className='flex-[25%]'>$3.5</p>
                <p className='flex-[25%]'>$0.4</p>
            </div>
            <div className='w-full text-[12px] font-medium px-8 flex py-[15px] border-b border-[#E9EBEE]'>
                <p className='flex-[25%]  '>Gold</p>
                <p className='flex-[25%]'>$10,000</p>
                <p className='flex-[25%]'>4%</p>
                <p className='flex-[25%]'>$3 </p>
                <p className='flex-[25%]'>$0.3</p>
            </div>
            <div className='w-full text-[12px] font-medium px-8 flex py-[15px] border-b border-[#E9EBEE]'>
                <p className='flex-[25%]  '>Platinum</p>
                <p className='flex-[25%]'>$50,000</p>
                <p className='flex-[25%]'>3%</p>
                <p className='flex-[25%]'>$2.5</p>
                <p className='flex-[25%]'>$0.3</p>
            </div>
           
            <div className='w-full text-[12px] font-medium px-8 flex py-[15px]'>
                <p className='flex-[25%]'>Black</p>
                <p className='flex-[25%]'>$100,000</p>
                <p className='flex-[25%]'>2.5%</p>
                <p className='flex-[25%]'>$2</p>
                <p className='flex-[25%]'>$0.2</p>
            </div>
        </div>
        </div>
    </div>
  );
}

export default AccountLevel;