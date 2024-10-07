import React from "react"; 

import icon_us from "../../../assets/images/flags/icon_usf.png";
import icon_mastercard from "../../../assets/images/logos/logo_visa_md.png";
import card_effect_bg from "../../../assets/images/bgs/card_bg_effect_md.png"
import icon_black_card from "../../../assets/images/icons/icon_black_card_md.png"
function Primary_Card_Md({className}) {
  return (
    <div className={`rounded-[15px] bg-[#2D323D] px-[30px] pt-[24px] pb-[34px] relative  ${className}`}>
        <img src={card_effect_bg} alt="card effect bg" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 "/>
      <div className="flex justify-between items-start pb-[40px]">
        <div className="">
         <p className="text-[16px] font font-medium text-white">Balance</p>
         <p className="font-semibold text-[26px] text-[#B5B5B5]">$2,754,2454</p>
        </div>
        <img src={icon_mastercard} alt="master card" />
      </div>
      <div className="flex gap-[8px] text-[#B5B5B5] pb-[35px]">
        <img src={icon_black_card} alt="icon black card"/>
        <p className="text-[32px] font-medium">1263 3534 **** 7582</p>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
            <p className="text-[16px]  font-medium text-white ">Card Holder Name</p>
            <p className="text-[26px]  font-semibold text-[#B5B5B5] ">John Doe</p>
        </div>
        <div className="flex flex-col gap-1 text-right">
            <p  className="text-[16px]  font-medium text-white ">Expiry Date</p>
            <p  className="text-[26px]  font-medium text-[#B5B5B5]">24/10</p>
        </div>
      </div>
    </div>
  );
}

export default Primary_Card_Md;
