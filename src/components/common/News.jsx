import React, { useState } from 'react'; 
function News() {
  return (
   <div className='pt-[32px] pb-[25px] pl-[40px] pr-[60px] border rounded-[12px] font-poppins text-primary-title-color mt-[74px]' >
    <h1 className='font-medium text-[20px]'>Latest Updates</h1>
    <br/>
    <div className='text-[15px]'>
    We've made some exciting updates to the app to enhance your experience! Our latest version includes improved user interface design for smoother navigation, faster loading times, and added security features for safer transactions. You can now easily manage multiple virtual cards, track spending in real-time, and get instant notifications for every transaction. 
    <br/><br/>
    We've also introduced a more streamlined process for deposits and withdrawals. Try out the new features and enjoy a hassle-free experience like never before! (Demo text for display purposes only.)
    <br/><br/>
    <b>What's New in the App:</b><br/>
    <ul style={{ listStyleType: 'disc' }} className='px-6'>
        <li>Enhanced User Interface: Experience smoother navigation with an improved design.</li>
        <li>Faster Performance: Enjoy quicker load times for a seamless experience.</li>
        <li>Advanced Security: Added layers of security to protect your transactions.</li>
        <li>Multiple Card Management: Effortlessly manage multiple virtual cards in one place.</li>
        <li>Real-Time Spending Tracker: Stay updated with real-time transaction monitoring.</li>
        <li>Instant Notifications: Get notified instantly for every deposit, withdrawal, or transfer.</li>
        <li>Simplified Deposits/Withdrawals: Streamlined process for quicker, hassle-free payments.</li>
    </ul>
    <span className='font-bold underline'>September 2024</span>
    </div>
   </div>
  );
}
export default News;