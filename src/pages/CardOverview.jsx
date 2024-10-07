import React from "react";
import Header from "../components/layouts/header";
import { MdOutlineChevronLeft } from "react-icons/md";
import Primary_Card_Md from "../components/common/cards/Primary_Card_md";
import icon_copy from "../assets/images/icons/icon_copy.png";
import Primary_Input from "../components/common/buttons/primary_input";
import icon_card_receive from "../assets/images/icons/icon_card_receive.png";
import Transaction from "../components/common/tables/transaction";
import Checkbox from "../components/common/buttons/Checkbox";
function CardOverview() {
  return (
    <div className=" bg-primary-bg-color font-poppins">
      <div className="w-[80%]  mx-auto">
        <Header />
        {/* title bar */}
        <div className="flex justify-between items-center pb-[55px]">
          <div className="flex items-center gap-[40px]">
            <button className=" flex justify-center items-center  text-[16px] bg-white rounded-[8px] border border-[#E9EBEE] py-[8px] px-[12px] hover:bg-slate-100">
              <MdOutlineChevronLeft className="text-[20px]" />
              Back
            </button>
            <p className="font-semibold text-[36px] text-[#434750]">
              Card Name
            </p>
          </div>
          <div className="flex gap-[12px] p-[8px] rounded-full border ">
            <p className="text-[16px] px-[16px] py-[8px] rounded-full bg-white border cursor-pointer">
              Overview
            </p>
            <p className="text-[16px] px-[16px] py-[8px] rounded-full hover:bg-white  cursor-pointer">
              Topup
            </p>
            <p className="text-[16px] px-[16px] py-[8px] rounded-full hover:bg-white  cursor-pointer">
              Transfer
            </p>
            <p className="text-[16px] px-[16px] py-[8px] rounded-full hover:bg-white  cursor-pointer">
              Block
            </p>
          </div>
        </div>

        {/* overview */}

        {/* <div className="rounded-[8px] border bg-white p-[32px] flex gap-[38px] items-center">
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <p className="font-medium text-[20px] text-[#0C0E12]">
                Card Details
              </p>
              <button className="px-[16px] py-[8px] flex gap-2 items-center text-[#546782] border border-[#546782] rounded-[10px]">
                <img src={icon_copy} alt="icon compy" />
                Copy All Info
              </button>
            </div>
            <Primary_Input placeholder="Card Number" copy={true} />
            <div className="flex gap-3">
              <Primary_Input
                placeholder="Expiry Date"
                copy={true}
                className="flex-[70%]"
              />
              <Primary_Input
                placeholder="CVC/CVV"
                copy={true}
                className="flex-[30%]"
              />
            </div>
            <Primary_Input placeholder="Card Owner" copy={true} />
            <Primary_Input placeholder="Address" copy={true} />
            <button className="bg-black text-[16px] font-poppins text-white flex gap-1 mt-[16px] w-full py-[18px] rounded-[10px] bg-green-button-gradient justify-center items-center hover:bg-green-button-hover-gradient">
              <img src={icon_card_receive} alt="icon_receive" />
              Balance Top Up
            </button>
          </div>
          <div className="flex-1 rounded-[28px] bg-[#F6F8FA] p-[30px]">
            <Primary_Card_Md className="w-[600px] mx-auto" />
          </div>
        </div>

        <Transaction/> */}

        {/* topup */}

        {/* <div className="border rounded-[8px] bg-white p-[32px] overflow-hidden w-[600px] mx-auto">
          <h1 className="text-[#0C0E12] font-medium text-[20px]">
            Card Balance Top Up
          </h1>
          <p className="text-[12px] pt-[8px] pb-[24px]">
            Top up your card balance easily by entering the amount you want. See
            your total expenses at a glance before confirming the top-up.
          </p>
          <p className="font-medium text-[16px] text-[#0C0E12]">
            Enter the amount to deposit card balance
          </p>
          <Primary_Input placeholder="Amount" />
          <div className="flex justify-between pt-[16px]">
            <p className="text-[16px]">Topup</p>
            <p className="text-[16px] font-semibold text-[#787878]">5%</p>
          </div>
          <div className="flex justify-between pt-[16px]">
            <p className="text-[16px]">Topup Amount</p>
            <p className="text-[16px] font-semibold text-[#787878]">$100</p>
          </div>
          <div className="w-full h-[1px] my-[13px] bg-[#CECECE]"></div>
          <div className="flex justify-between text-[#2A2A2A] pb-[50px]">
            <p className="text-[16px] font-semibold">Total Expenses</p>
            <p className="text-[16px] font-semibold">$105</p>
          </div>
          <button className="text-center py-[18px] bg-black-buton-gradient w-full rounded-[10px] overflow-hidden text-white hover:bg-black-buton-hover-gradient">
            TopUp Card Balance
          </button>
        </div> */}

        {/* Transfer */}
        {/* <div className="border rounded-[8px] bg-white p-[32px] overflow-hidden w-[600px] mx-auto">
            <h1 className="text-[20px] font-medium">Transfer Card Balance To Another Card</h1>
            <p className="w-[515px] text-[13px]  pt-[10px]">To transfer your card balance, simply select the source and destination cards, then click "Transfer Balance" to complete the process.</p>
            <div className="pt-[32px]">
                <p className="font-medium text-[16px]">Source</p>
                <Primary_Input placeholder="Card Number" /> 
            </div>

            <div className="pt-[32px]">
                <p className="font-medium text-[16px]">Destination</p>
                <Primary_Input placeholder="Card Number" /> 
            </div>

            <div className="pt-[32px]">
                <p className="font-medium text-[16px]">Sum</p>
                <Primary_Input placeholder="Amount" /> 
            </div>
            <p className="text-[#5C5C5C] text-[16px] py-[24px]">Transfer Fee: 5%</p>
            <p className="text-[#787878] font-medium pb-[34px]">Card Transfer Amount: <span className="text-[#0C0E12]">$454</span></p>

            <button className="text-white text-[16px] text-center w-full py-[18px] bg-primary-button-gradient hover:bg-primary-button-hover-gradient rounded-[10px] overflow-hidden">
            Transfer Balance
            </button>
        </div> */}

        {/* Block */}
        <div className="flex p-[32px] rounded-[8px] border bg-white gap-[30px] items-center mb-[50px]">
            <div className="flex-1">
                <p className="font-medium text-[20px] text-[#0C0E12] pb-[8px]">Card Block</p>
                <p className="text-[12px] text-[#E84918]">Confirm the blocking of card Card Name 5475 7584 **** 4657. Once blocked, the card will be permanently removed from our server.</p>
                <p className="font-medium text-[16px] pt-[24px]">Card Will Blocked</p>
                <Primary_Input placeholder="Selected card"/>
                <p className="font-medium text-[16px] pt-[24px]">Withdrawal To Account</p>
                <Primary_Input placeholder="Your Account"/>
                <p className="text-[16px] text-[#5C5C5C] py-[19px]">Withdraw Fee: 5%</p>
                <p className="text-[16px] text-[#5C5C5C] py-[12px]">Card Withdrawal Amount:<span className="font-semibold"> $37454</span></p>
                <Checkbox text="I accept the conditions of closing the card" className="pb-[20px]"/>
                    <button className="text-white bg-[#FF2B1C] rounded-[10px] overflow-hidden w-full py-[18px]">Block This Card</button>
            </div>
            <div className="flex-1 py-[35px] px-[55px] rounded-[28px] overflow-hidden bg-[#F6F8FA]">
                <Primary_Card_Md/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CardOverview;
