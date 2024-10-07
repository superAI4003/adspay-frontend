import React from 'react'; 
 
function Issue_Card({className}) {
  return (
    
    <div className={` border text-center rounded-[8px] font-poppins ${className}`}>
        <p className='text-[16px] font-medium pt-[75px]'>Cards</p>
        <p className='text-[20px] font-medium text-[#2D73FF] pb-[54px]'>04 - Active</p>
        <p className='text-[16px] rounded-b-[8px] bg-[#F3F3F3] py-[18px]'>+ Issue A Card Now</p>
    </div>
  );
}

export default Issue_Card;