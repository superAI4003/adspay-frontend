import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

import icon_black_calendar from "../../../assets/images/icons/icon_black_calendar.png";
import icon_gray_calendar from "../../../assets/images/icons/icon_gray_calendar.png";

function Transaction() {
  return (
    <div className="font-poppins text-primary-title-color pt-[40px] pb-[18px]">
      {/* search bar */}
      <div className="flex justify-between">
        <div className="rounded-[12px] overflow-hidden p-[12px] w-[550px] bg-white border flex gap-1 items-center">
          <FiSearch className="w-[24px]" />
          <input
            type="text"
            id="input search text"
            placeholder="Search Transaction"
            className="text-[16px] outline-none"
          />
        </div>
        <div className="flex gap-2">
          <button className="text-[12px] text-[#0C0E12] flex items-center gap-1 px-[15px] py-[12px] rounded-[8px] border">
            Pick Date Range
            <img src={icon_black_calendar} alt="icon black calendar" />
          </button>
          <button className="text-[12px] text-[#0C0E12] flex items-center gap-1 px-[15px] py-[12px] rounded-[8px] border">
            Status
            <FiChevronDown />
          </button>
        </div>
      </div>
      {/* table */}

      <div className="w-full rounded-lg border border-[#E9EBEE] font-poppins my-9">
        <div className="text-[12px] text-[#0C0E12] bg-[#ECEFF3] flex px-8 text-left py-[9px] rounded-[8px]  border-[#E9EBEE] border-b">
          <p className="flex-[15%] font-medium">Date</p>
          <p className="flex-[55%] font-medium">Transaction Type</p>
          <p className="flex-[15%] text-center font-medium">Status</p>
          <p className="flex-[15%] font-medium">Amount</p>
        </div>
        <div className="w-full text-[12px] font-medium px-8 flex py-[15px] border-b border-[#E9EBEE] items-center">
          <p className="flex-[15%] text-[#636363] flex gap-1 items-center font-normal">
            {" "}
            <img src={icon_gray_calendar} alt="gray calendar" /> 10 September
            2024
          </p>
          <p className="flex-[55%] text-[#434750] ">DARAZ SEBL_BD</p>
          <p className="flex-[15%]  flex justify-center ">
            <span className="text-center text-[#008900] py-[4px] rounded-[5px] w-[100px] bg-[#BCFFBC] ">authorized</span>
          </p>
          <p className="flex-[15%]">-$290.87</p>
        </div>
        <div className="w-full text-[12px] font-medium px-8 flex py-[15px] border-b border-[#E9EBEE] items-center">
          <p className="flex-[15%] text-[#636363] flex gap-1 items-center font-normal">
            {" "}
            <img src={icon_gray_calendar} alt="gray calendar" /> 10 September
            2024
          </p>
          <p className="flex-[55%] text-[#434750] ">DARAZ SEBL_BD</p>
          <p className="flex-[15%]  flex justify-center ">
            <span className="text-center text-[#008900] py-[4px] rounded-[5px] w-[100px] bg-[#BCFFBC] ">authorized</span>
          </p>
          <p className="flex-[15%]">-$290.87</p>
        </div>
        <div className="w-full text-[12px] font-medium px-8 flex py-[15px]  items-center">
          <p className="flex-[15%] text-[#636363] flex gap-1 items-center font-normal">
            {" "}
            <img src={icon_gray_calendar} alt="gray calendar" /> 10 September
            2024
          </p>
          <p className="flex-[55%] text-[#434750] ">DARAZ SEBL_BD</p>
          <p className="flex-[15%]  flex justify-center ">
            <span className="text-center text-[#008900] py-[4px] rounded-[5px] w-[100px] bg-[#BCFFBC] ">authorized</span>
          </p>
          <p className="flex-[15%]">-$290.87</p>
        </div>
      </div>
    </div>
  );
}
export default Transaction;
