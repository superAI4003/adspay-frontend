import React from "react";
import icon_us from "../../../assets/images/flags/icon_usf.png";
import icon_mastercard from "../../../assets/images/logos/logo_visa.png";
import card_effect_bg from "../../../assets/images/bgs/card_bg_effect.png"
import icon_black_card from "../../../assets/images/icons/icon_black_card.png"
function Issue_New_Card() {
  return (
    <div className=" rounded-[8px] bg-[#2D323D] px-[15px] pt-[15px] pb-[34px] relative">
        <img src={card_effect_bg} alt="card effect bg" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 "/>
      <div className="flex justify-between items-start pb-[56px]">
        <div className="w-[27px] h-[27px] rounded-full overflow-hidden">
          <img
            src={icon_us}
            alt="us icon"
            className="object-cover w-full h-full"
          />
        </div>
        <img src={icon_mastercard} alt="master card" />
      </div>
      <div className="flex gap-[8px] text-[#B5B5B5]">
        <img src={icon_black_card} alt="icon black card"/>
        <p className="text-[17px] font-medium">1263 3534 **** 7582</p>
      </div>
    </div>
  );
}

export default Issue_New_Card;
