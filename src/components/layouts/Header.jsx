import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import icon_add_funds_active from "../../assets/images/icons/icon_add_funds_active.png";
import icon_add_funds from "../../assets/images/icons/icon_add_funds.png";
import icon_dashboard_active from "../../assets/images/icons/icon_dashboard_active.png";
import icon_dashboard from "../../assets/images/icons/icon_dashboard.png";
import icon_transaction_active from "../../assets/images/icons/icon_transaction_active.png";
import icon_transaction from "../../assets/images/icons/icon_transaction.png";
import icon_mycards from "../../assets/images/icons/icon_mycards.png";
import icon_mycards_active from "../../assets/images/icons/icon_mycards_active.png";
import Nav_Button from "../common/buttons/Nav_Button";
import dash_state_bg from "../../assets/images/bgs/dash_state_bg.png";

import icon_dash_state_receive_money from "../../assets/images/icons/icon_dash_state_receive_money.png";
import icon_dash_state_balance from "../../assets/images/icons/icon_dash_state_balance.png";

import logo from "../../assets/images/logos/logo.png";
import avatar from "../../assets/images/avatars/avatar1.png";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import icon_bell from "../../assets/images/icons/icon_bell.png";
import icon_setting from "../../assets/images/icons/icon_setting.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Header() {
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
    <div className="w-full flex justify-center flex-col items-center ">
      <div className="flex w-full">
        <div className="flex-[35%] flex justify-start items-center gap-[40px]">
          <img src={logo} />
          <div>
            <div className="flex justify-center items-center gap-2">
              <p className="text-[12px]">Account Level</p>
              <div style={{ width: 24, height: 24 }}>
                <CircularProgressbarWithChildren
                  value={66}
                  counterClockwiss="true"
                  strokeWidth={16}
                  styles={{
                    path: {
                      stroke: "#39C086", // Change this to your desired color
                    },
                  }}
                >
                  <p className="font-medium text-[12px] text-[#39C086]">66</p>
                </CircularProgressbarWithChildren>
              </div>
            </div>
            <p className="text-[20px] font-medium">Standard1</p>
          </div>
        </div>
        <div className="flex-[30%]  relative h-[90px] justify-center items-center flex gap-[20px]">
          <img
            src={dash_state_bg}
            alt="dash_state_bg"
            className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 "
          />
          <div className="flex z-20  gap-3 p-1 items-center">
            <img src={icon_dash_state_balance} alt="balance icon" />
            <p className="text-[25px]">$2,754</p>
          </div>
          <button className="text-[16px] flex z-20 text-[#546782] gap-[8px] py-[8px] px-[16px] bg-white rounded-[10px]">
            <img src={icon_dash_state_receive_money} alt="receive icon" />
            Add Funds
          </button>
        </div>
        <div className="flex-[35%] flex justify-end items-center gap-[8px]">
          <button className="hover:bg-slate-300 p-1 hover:rounded-md">
            <img src={icon_bell} alt="icon bell" />
          </button>
          <button className="hover:bg-slate-300 p-1 hover:rounded-md">
            <img src={icon_setting} alt="icon_setting" />
          </button>

          <div className="text-[20px] font-medium flex items-center gap-1 cursor-pointer relative" ref={menuRef}
           onClick={()=>setShowMenu(!showMenu)}
          >
            <img className="" src={avatar} alt="avatar" />
            <p>Henry Bins</p>
            <MdOutlineKeyboardArrowDown />
            {showMenu &&(
            <div
            className="absolute rounded-[16px] z-50 overflow-hidden font-medium text-[#434750] text-[20px] top-14 right-0 border shadow-lg w-[250px]">
              <div className="px-[30px] py-[16px] bg-[#F1FFF2] border-b flex flex-col gap-1">
                <p className="hover:text-[#434750]/50">Profile</p>
                <p className="text-[#31C737] hover:text-[#31C737]/50">Balance:79,687</p>
              </div>
              <div className="px-[30px] py-[16px] bg-white border-b flex flex-col gap-1">
                <p className="hover:text-[#434750]/50">Deposit</p>
                <p className="hover:text-[#434750]/50">Withdraw</p>
                <p className="hover:text-[#434750]/50">Trnsaction</p>
              </div>
              <div className="px-[30px] py-[16px] bg-white border-b flex flex-col gap-1">
                <p className="hover:text-[#434750]/50">Affiliate</p>
                <p className="hover:text-[#434750]/50">Email Us</p>
                <p className="text-[#2437FB] hover:text-[#2437FB]/50">Join Our Telegram</p>
              </div>
              <p className="px-[30px] py-[16px] bg-[#F8F8F8] hover:text-[#2437FB]/50">Logout</p>
            </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-3 justify-center bg-[#eeeeee] p-[8px] rounded-[21px] my-[50px]">
        <Nav_Button
          text="Dashboard"
          icon={icon_dashboard}
          active_icon={icon_dashboard_active}
          active={true}
          to="/"
        />
        <Nav_Button
          text="My Cards"
          icon={icon_mycards}
          active_icon={icon_mycards_active}
          active={false}
          to="/"
        />
        <Nav_Button
          text="Transaction History"
          icon={icon_transaction}
          active_icon={icon_transaction_active}
          active={false}
          to="/"
        />
        <Nav_Button
          text="Add Funds"
          icon={icon_add_funds}
          active_icon={icon_add_funds_active}
          active={false}
          to="/"
        />
      </div>
    </div>
  );
}

export default Header;
