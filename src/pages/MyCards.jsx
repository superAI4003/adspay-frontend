import React from 'react';
import Header from '../components/layouts/header';
import Issue_Card from '../components/common/cards/Issue_Card';
import My_Card from '../components/common/cards/My_Card';



function MyCards() {
  return (
    <div className=" bg-primary-bg-color">
        <div className='w-[80%]  mx-auto'>
            <Header/>
           
            <div className='flex gap-[28px] items-start'>
              <Issue_Card className="w-[220px]"/>
              <div className="grid grid-cols-3 gap-7 w-full">
                <My_Card type="master" />
                <My_Card type="master" />
                <My_Card type="master" />
                <My_Card type="visa" />
                <My_Card type="visa" />
                <My_Card type="visa" />
              </div>
            </div>
        </div>
    </div>
  );
}

export default MyCards;