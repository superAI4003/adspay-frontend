import React from "react";
import Header from "../components/layouts/header";
import { MdOutlineChevronLeft } from "react-icons/md";
import Primary_Input from "../components/common/buttons/primary_input";
import avatar from "../assets/images/avatars/avatar.png";
import { AiOutlineEdit } from "react-icons/ai";

function Profile() {
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
            <p className="font-semibold text-[36px] text-[#434750]">Profile</p>
          </div>
        </div>
<div className="pb-[54px] flex flex-col gap-[34px]">
        <div className="rounded-[8px] border w-[600px] bg-white overflow-hidden px-[35px] pb-[45px] pt-[25px] mx-auto">
          <h1 className="font-medium text-[20px] text-[#0C0E12]">
            Profile Details
          </h1>
          <div className="relative w-[164px] h-[164px] mx-auto my-[35px] rounded-[8px] overflow-hidden">
            <img src={avatar} alt="avatar" className="w-full h-full" />
            <div className="absolute right-1 bottom-1 p-[10px] rounded-[8px] bg-black/60">
              <AiOutlineEdit color="white" />
            </div>
          </div>
          <Primary_Input placeholder="Full Name" />
          <Primary_Input placeholder="Email" />
          <Primary_Input placeholder="Phone Number" />
          <Primary_Input placeholder="Country" />
          <Primary_Input placeholder="City" />
          <button className="border mt-[64px] border-primary-button-strike text-[16px] text-white rounded-[10px] bg-primary-button-gradient hover:bg-primary-button-hover-gradient w-full py-[12px]">
            Save Changes
          </button>
        </div>

        <div className="rounded-[8px] border w-[600px] bg-white overflow-hidden px-[35px] pb-[45px] pt-[25px] mx-auto">
          <h1 className="font-medium text-[20px] text-[#0C0E12]">
          Security
          </h1>
          
          <Primary_Input placeholder="Current Password" />
          <Primary_Input placeholder="New Password" />
          <Primary_Input placeholder="Re-type New Password" />
          <button className="border mt-[64px] border-primary-button-strike text-[16px] text-white rounded-[10px] bg-primary-button-gradient hover:bg-primary-button-hover-gradient w-full py-[12px]">
            Save Changes
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
