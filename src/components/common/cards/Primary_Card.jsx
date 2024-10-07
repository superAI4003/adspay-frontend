import React from "react"; 

import icon_us from "../../../assets/images/flags/icon_usf.png";
import icon_mastercard from "../../../assets/images/logos/logo_visa.png";
import card_effect_bg from "../../../assets/images/bgs/card_bg_effect.png"
import icon_black_card from "../../../assets/images/icons/icon_black_card.png"
function Primary_Card({className}) {
  return (
    <div className={`rounded-[8px] bg-[#2D323D] px-[15px] pt-[15px] pb-[34px] relative w-full ${className}`}>
        <img src={card_effect_bg} alt="card effect bg" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 "/>
      <div className="flex justify-between items-start pb-[28px]">
        <div className="">
         <p className="text-[10px] font font-medium text-white">Balance</p>
         <p className="font-semibold text-[16px] text-[#B5B5B5]">$2,754,2454</p>
        </div>
        <img src={icon_mastercard} alt="master card" />
      </div>
      <div className="flex gap-[8px] text-[#B5B5B5] pb-[24px]">
        <img src={icon_black_card} alt="icon black card"/>
        <p className="text-[17px] font-medium">1263 3534 **** 7582</p>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
            <p className="text-[10px]  font-medium text-white ">Card Holder Name</p>
            <p className="text-[16px]  font-semibold text-[#B5B5B5] ">John Doe</p>
        </div>
        <div className="flex flex-col gap-1">
            <p  className="text-[10px]  font-medium text-white ">Expiry Date</p>
            <p  className="text-[16px]  font-medium text-[#B5B5B5]">24/10</p>
        </div>
      </div>
    </div>
  );
}

export default Primary_Card;
