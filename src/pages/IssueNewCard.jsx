import { React, useState } from "react";
import Header from "../components/layouts/Header";

import * as Switch from "@radix-ui/react-switch";

import { MdOutlineChevronLeft } from "react-icons/md";
import Checkbox from "../components/common/buttons/Checkbox";

import icon_cg from "../assets/images/flags/icon_cgf.png";
import icon_cl from "../assets/images/flags/icon_clf.png";
import icon_us from "../assets/images/flags/icon_usf.png";
import icon_br from "../assets/images/flags/iconf_brf.png";

import icon_mastercard from "../assets/images/icons/icon_mastercard.png";
import icon_visa from "../assets/images/icons/icon_visa.png";
import Issue_New_Card_States from "../components/common/cards/Issue_New_Card_States";
import Primary_Input from "../components/common/buttons/primary_input";
import icon_wallet from "../assets/images/icons/icon_wallet.png";
import Primary_Card from "../components/common/cards/Primary_Card";

import confirm_img from "../assets/images/bgs/confirm_img.png"
function IssueNewCard() {
  const [isSwitchChecked, setIsSwitchChecked] = useState(false);
  const [isCheckedbox, setIsCheckedbox] = useState(false);
  return (
    <div className=" bg-primary-bg-color font-poppins min-h-screen">
      <div className="w-[80%]  mx-auto">
        <Header />
        <div className="flex justify-start items-center gap-[40px]">
          <button className=" flex justify-center items-center  text-[16px] bg-white rounded-[8px] border border-[#E9EBEE] py-[8px] px-[12px] hover:bg-slate-100">
            <MdOutlineChevronLeft className="text-[20px]" />
            Back
          </button>
          <p className="font-semibold text-[36px] text-[#434750]">
            Issue New Card
          </p>
        </div>
        <div className="flex justify-between items-center py-[40px]">
          <div>
            <p className="text-[12px] py-[8px]">Filter</p>
            <div className="flex gap-[12px]">
              <img src={icon_us} alt="icon_us" />
              <img src={icon_br} alt="icon_br" />
              <img src={icon_cg} alt="icon_cg" />
              <img src={icon_cl} alt="icon_cl" />
            </div>
          </div>

          <Switch.Root
            id="airplane-mode"
            onClick={() => setIsSwitchChecked(!isSwitchChecked)}
          >
            <Switch.Thumb />
            {isSwitchChecked ? (
              <div className="flex gap-[16px] p-[7px] bg-[#EEEEEE] rounded-[9px]">
                <img
                  src={icon_mastercard}
                  alt="mastercard"
                  className="px-[8px] rounded-[5px] border bg-white"
                />
                <img
                  src={icon_visa}
                  alt="visa "
                  className="px-[10px] rounded-[5px] opacity-20 "
                />
              </div>
            ) : (
              <div className="flex gap-[16px] p-[7px] bg-[#EEEEEE] rounded-[9px]">
                <img
                  src={icon_mastercard}
                  alt="mastercard"
                  className="px-[8px] rounded-[5px]  opacity-20"
                />
                <img
                  src={icon_visa}
                  alt="visa "
                  className="px-[10px] rounded-[5px] border bg-white"
                />
              </div>
            )}
          </Switch.Root>
          
        </div>
        <p className="text-[16px] text-[#5c5c5c] pb-[50px] max-w-[900px] ">
        Virtual cards are the modern solution for seamless online payments. Whether you’re managing ads or shopping, these cards provide security and flexibility. Easily use them for Google, Facebook, TikTok ads, and more!
        </p>
        <div className="flex flex-col gap-[20px]">
            <Issue_New_Card_States/>
            <Issue_New_Card_States/>
            <Issue_New_Card_States/>

        </div>
{/* 
        <div className="flex mt-[70px] bg-white border rounded-[8px] px-[32px] py-[20px]">
          <div className="flex-1 pr-[38px]">
            <Primary_Input
              placeholder="Main Account Balance"
              value="$547,575"
              className="border-blue-700"
            />
            <Primary_Input placeholder="Card Name" value="Lorem Ipsum" />
            <div className="flex gap-[16px]">
              <div className="flex-[70%]">
                <Primary_Input
                  placeholder="Card Balance Amount"
                  value="$7658"
                />
              </div>
              <div className="flex-[30%]">
                <Primary_Input placeholder="Cards quantity" value={1} />
              </div>
            </div>
            <Checkbox
              text="I am aware of prohibited transaction"
              onClick={() => setIsCheckedbox(!isCheckedbox)}
              checked={isCheckedbox}
              className="pb-[54px] pt-[28px]"
            />
            <button className="flex justify-center w-full items-center gap-2 flex-[60%] bg-primary-button-gradient text-white rounded-lg py-[24px] border hover:bg-primary-button-hover-gradient">
              <img
                src={icon_wallet}
                alt="recive moeny icon"
                className="w-[24px] h-[24px]"
              />
              Get A New Card
            </button>
          </div>
          <div className="flex-1 bg-[#E9EBEE] rounded-[9px] p-[25px] ">
            <div className="w-[350px]">
              <Primary_Card />
            </div>
            <p className="py-[12px] text-[16px] text-[#5C5C5C]">
              Card of this type can be used for any purchases
            </p>
            <div className="px-[25px] rounded-[8px] border bg-white pt-[10px] pb-[40px]">
              <p className="font-medium text-[16px]  pb-[16px]">
                Information about your operation
              </p>
              <div className="flex justify-between pb-[8px]">
                <p className="text-[#2A2A2A] text-[16px]">Card Price</p>
                <p className="text-[#787878] text-[16px] font-semibold">$5.0</p>
              </div>
              <div className="flex justify-between pb-[8px]">
                <p className="text-[#2A2A2A] text-[16px]">Deposit Amount</p>
                <p className="text-[#787878] text-[16px] font-semibold">$100</p>
              </div>
              <div className="flex justify-between pb-[8px]">
                <p className="text-[#2A2A2A] text-[16px]">Topup Fee</p>
                <p className="text-[#787878] text-[16px] font-semibold">5%</p>
              </div>
              <div className="w-full h-[1px] bg-[#CECECE] mt-[5px] mb-[5px]">

              </div>
              <div className="flex justify-between">
                <p className="text-[#2A2A2A] text-[16px] font-semibold">Total Payable Amount</p>
                <p className="text-[#0C0C0C] text-[16px] font-semibold">$107</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="bg-white border rounded-[8px] w-full pb-[36px]">
            <div className="w-full flex rounded-b-[8px] overflow-hidden">
                <div className="bg-[#1AB55F] w-[40%]"></div>
                <div className="bg-[#27D073] w-[60%] flex justify-end ">
                    <p className="font-semibold text-[16px] text-white font-poppins py-[1px] px-[30px]">Maximum: 28:50/30</p>
                </div>
            </div>
            <div className=" w-full">
                <img src={confirm_img} alt="confirm image" className="mx-auto pt-[30px] pb-[10px]"/>
                <p className="text-center text-[16px] text-[#5C5C5C]">0 of 3 confirmations</p>
            </div>
            <div className="w-[507px] h-[1px] mx-auto my-[35px]  bg-[#D2D2D2]">
            </div>
            <div className="w-[350px] mx-auto">
                <Primary_Card/>
            </div>
            <p className="text-[16px] pt-[10px] pb-[35px] text-center text-[#5C5C5C]">Card of this type can be used for any purchases</p>
            <div className="px-[25px] rounded-[8px] border bg-white pt-[10px]  w-[507px] mx-auto">
              <p className="font-medium text-[16px]  pb-[16px]">
                Information about your operation
              </p>
              <div className="flex justify-between pb-[8px]">
                <p className="text-[#2A2A2A] text-[16px]">Card Price</p>
                <p className="text-[#787878] text-[16px] font-semibold">$5.0</p>
              </div>
              <div className="flex justify-between pb-[8px]">
                <p className="text-[#2A2A2A] text-[16px]">Deposit Amount</p>
                <p className="text-[#787878] text-[16px] font-semibold">$100</p>
              </div>
            </div>
        </div> */}
      </div>
    </div>
  );
}

export default IssueNewCard;
