import {React, useState,useRef, useEffect} from "react";

import icon_us from "../../../assets/images/flags/icon_usf.png";
import icon_visa from "../../../assets/images/logos/logo_visa.png";
import icon_mastercard from "../../../assets/images/icons/icon_mastercard.png";
import card_effect_bg_visa from "../../../assets/images/bgs/card_bg_effect_visa.png";
import card_effect_bg_master from "../../../assets/images/bgs/card_bg_effect_master.png";
import icon_my_card from "../../../assets/images/icons/icon_my_card.png";
import { BsThreeDots } from "react-icons/bs";

function My_Card({ type, className }) {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(); // Create a ref

    // Add event listener to document
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);
  return (
    <div className={`font-poppins border rounded-[8px]  ${className}`}>
        <div className="py-[12px] px-[20px] flex justify-between items-center bg-white rounded-t-[8px] ">
            <div>
                    <p className="text-[12px] text-[#4E4E4E">Balance</p>
                    <p className="font-semibold text-[16px] text-[#2A2A2A]">$2,754,2454</p>
            </div>
            <div className="relative" ref={menuRef}>
                <div className="px-3 py-3 hover:bg-slate-300/20 rounded-md" onClick={()=>setShowMenu(!showMenu)}>
                <BsThreeDots />
                </div>
                {showMenu && (
                <div className="absolute  z-40 text-[11px] font-medium bg-white border rounded-[8px] text-[#434750] pt-[10px]  w-[130px] shadow-md">
                   <p className="py-1  px-[15px]">Overview</p>
                   <p className="py-1  px-[15px]">Topup</p>
                   <p className="py-1  px-[15px]">Transfer</p>
                   <p className="py-1  px-[15px] bg-[#F8F8F8] rounded-b-[8px] border-t">Block</p>

                </div>
                )}
            </div>
        </div>
      <div
        className={` rounded-[8px] ${
          type == "visa" ? "bg-[#3620FF]" : "bg-[#E6BB7B]"
        } px-[15px] py-[15px]  relative w-full `}
      >
        <img
          src={type === "visa" ? card_effect_bg_visa : card_effect_bg_master}
          alt="card effect bg"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 "
        />
        <div className="flex justify-end items-start">
          {type=="visa"?<img
            src={icon_visa}
            alt="master card"
            className="w-[50px] h-[15px]"
          />:<img
          src={icon_mastercard}
          alt="master card"
          className="w-[42px] h-[32px]"
        />}
       
          
        </div>
        <div className="flex gap-[8px] text-white py-[40px]">
          <img src={icon_my_card} alt="icon black card" />
          <p className="text-[20px] font-medium">1263 3534 **** 7582</p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-[16px]  font-semibold text-white ">John Doe</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[16px]  font-medium text-white">24/10</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default My_Card;
