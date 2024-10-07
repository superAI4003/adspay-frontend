import React from 'react';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/header';
import Quick_Tip from '../components/common/alerts/Quick_Tip';
import Main_Balance_Cards from '../components/common/cards/Main_Balance_Cards';
import Total_Balance_Cards from '../components/common/cards/Total_Balance_Cards';
import Ads from '../components/common/ads';
import User_State from '../components/common/User_State';
import News from '../components/common/News';
import Recent_Deposit from '../components/common/tables/Recent_Deposit';


function Dashboard() {
  return (
    <div className=" bg-primary-bg-color">
        <div className='w-[80%]  mx-auto'>
            <Header/>
            <Quick_Tip title="Quick Tip" content='To create a card, deposit first. Click "Add Funds" and get your Visa or Mastercard today!'/>
            <div className='flex justify-between gap-[20px] pt-[21px]'>
                <Main_Balance_Cards/>
                <Total_Balance_Cards/>
            </div>
            <Ads/>
            <User_State active_cards={4} totalbalance={4575.45} auth_time={304} decline_rate={30}/>
            <News/>
            <Recent_Deposit/>
            <Footer/>
        </div>
    </div>
  );
}

export default Dashboard;