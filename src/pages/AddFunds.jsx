import React from "react";
import Header from "../components/layouts/Header";
import Primary_Input from "../components/common/buttons/Primary_Input";
import { GrUpload } from "react-icons/gr";
import { FaCheck } from "react-icons/fa6";

import icon_ether from "../assets/images/icons/icon_ether.png";
import icon_bitcoin from "../assets/images/icons/icon_bitcoin.png";
import icon_usdt from "../assets/images/icons/icon_usdt.png";
import qr_code from "../assets/images/logos/qr_code.png";
import Transaction from "../components/common/tables/Transaction";
function AddFunds() {
  return (
    <div className=" bg-primary-bg-color min-h-screen font-poppins flex flex-col gap-[60px]">
      <div className="w-[80%]  mx-auto">
        <Header />
        <div className="border rounded-[8px] flex bg-white">
          <div className="flex-[40%] px-[45px] py-[50px] font-poppins border-r">
            <p className="text-[20px] text-[#0C0E12]">Deposit Amount</p>
            <p className="text-[13px] text-[#0c0e12] py-[15px]">
              Select your payment method, send funds to the provided wallet
              address, and your balance will update automatically once the
              transfer is complete.
            </p>
            <div className="pr-[100px]">
              <Primary_Input placeholder="Amount" />
              <div className="w-full justify-between flex pt-[30px]">
                <p className="text-[16px] text-[#2A2A2A]">Deposit Fee</p>
                <p className="font-semibold text-[16px] text-[#787878]">2%</p>
              </div>
              <div className="w-full h-[1px] bg-[#CECECE] my-[12px]"></div>
              <div className="flex justify-between font-semibold text-[16px]">
                <p className=" text-[#2A2A2A]">Total Amount</p>
                <p className=" text-[#0C0C0C]">$107</p>
              </div>
              <h1 className="text-[20px] text-[#0C0E12] pt-[30px] pb-[20px]">
                Manual Payments
              </h1>
              <div className="flex  justify-between pb-[30px]">
                <div className=" flex flex-col gap-1 items-center w-[105px] h-[105px] pt-[20px] bg-[#EEFFF8]  border border-[#00A478] rounded-[12px] ">
                  <img src={icon_usdt} alt="icon ether" />
                  <p className="font-medium text-[12px] text-[#434750]">
                    USDT (TRC20)
                  </p>
                </div>
                <div className=" flex flex-col gap-1 items-center w-[105px] h-[105px] pt-[20px] bg-[#ffffff]  border border-[#F7931A] rounded-[12px] ">
                  <img src={icon_bitcoin} alt="icon ether" />
                  <p className="font-medium text-[12px] text-[#434750]">
                    Bitcoin
                  </p>
                </div>
                <div className=" flex flex-col gap-1 items-center p-[10px] bg-[#ffffff]  border border-[#3D3D3D] rounded-[12px] w-[105px] h-[105px] pt-[20px] ">
                  <img src={icon_ether} alt="icon ether" />
                  <p className="font-medium text-[12px] text-[#434750]">
                    Ethereum
                  </p>
                </div>
              </div>
              <button className="bg-black text-[16px] font-poppins text-white flex gap-1 mt-[16px] w-full py-[18px] rounded-[10px] bg-green-button-gradient justify-center items-center hover:bg-green-button-hover-gradient">
                Add Funds
              </button>
            </div>
          </div>
          <div className="flex-[60%] pl-[105px] pr-[75px]">
            <img src={qr_code} alt="qr code" className="mx-auto py-[25px]" />
            <p className="text-[16px] text-[#5c5c5c] text-center">
              Sacn <span className="font-bold">QR </span> code for payment in
              the amount <span className="font-bold">100 USDT</span>
            </p>
            <div className="flex gap-1 items-center justify-center py-[30px]">
              <img src={icon_usdt} alt="usdt" className="w-[25px] h-[25px]" />
              <p className="text-[20px] font-medium text-[#0C0E12]">
                USDT TRC-20
              </p>
            </div>
            <div className="flex gap-[13px]">
              <Primary_Input className="flex-[70%]" copy={true} />
              <Primary_Input className="flex-[30%]" copy={true} />
            </div>
            <p className="text-[12px] w-[380px] text-center mx-auto pt-[26px] pb-[36px]">
              Please submit a screenshot with transaction hash. Supported file
              <span className="font-bold">type: </span>Jpeg, png, gif. Max Size:
              4MB
            </p>
            <p className="font-medium text-[20px] pb-[20px] ">Submit Proof</p>
            <button className="flex justify-center items-center gap-2 text-[16px] text-[#434750] bg-[#EEEEEE] py-[8px] w-full text-center rounded-[10px] overflow-hidden border">
            <GrUpload />

            Upload Screenshot{" "}
            </button>
            <p className="text-[16px] text-[#5C5C5C] pt-[20px] pb-[60px]">
              Please submit a screenshot with transaction hash. Supported file
              type: Jpeg, png, gif. Max Size: 4MB
            </p>
            <button className=" bg-black text-[16px] font-poppins text-white flex gap-1 mb-[60px] w-full py-[18px] rounded-[10px] bg-green-button-gradient justify-center items-center hover:bg-green-button-hover-gradient">
            <FaCheck />
            I have paid the amount
            </button>
          </div>
        </div>
      </div>
      <div className="w-[80%]  mx-auto ">
        <Transaction/>  
      </div>
    </div>
  );
}

export default AddFunds;
