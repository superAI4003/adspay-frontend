import React from "react";
import Header from "../components/layouts/Header";
import { MdOutlineChevronLeft } from "react-icons/md";
import Primary_Input from "../components/common/buttons/Primary_Input";

function Affiliate() {
  return (
    <div className=" bg-primary-bg-color font-poppins min-h-screen">
      <div className="w-[80%]  mx-auto">
        <Header />
        <div className="flex justify-between items-center pb-[55px]">
          <div className="flex items-center gap-[40px]">
            <button className=" flex justify-center items-center  text-[16px] bg-white rounded-[8px] border border-[#E9EBEE] py-[8px] px-[12px] hover:bg-slate-100">
              <MdOutlineChevronLeft className="text-[20px]" />
              Back
            </button>
            <p className="font-semibold text-[36px] text-[#434750]">
            Affiliate
            </p>
          </div> 
        </div>

        <div className="rounded-[8px] border w-[600px] bg-white overflow-hidden px-[55px] pb-[50px] pt-[25px] mx-auto">
            <h1 className="font-medium text-[20px] text-[#0C0E12]">Affiliate Link</h1>
            <p className="text-[12px] ">You will get<span className="font-medium">$5</span> commission when someone you referred deposits $100 or more</p>
            <Primary_Input value="https://www.figma.com/refer/021212244" copy={true} />
        </div>
      </div>
    </div>
  );
}

export default Affiliate;
