import React from "react";
import IssueNewCard from "../../../pages/IssueNewCard";
import Issue_New_Card from "./Issue_New_Card";

function Issue_New_Card_States() {
  return (
    <div className="flex rounded-[12px] p-[12px] border gap-[20px] ">
      <div className="flex-1">
        <Issue_New_Card />
      </div>
      <div className="flex-1 flex flex-col justify-center gap-[15px] items-center">
        <p className="font-bold text-[#434750] text-[24px]"> $4</p>
        <p className="text-[#727272] text-[20px] font-light">Issue Fee</p>
      </div>
      <div className="flex-1  flex flex-col justify-center gap-[15px] items-center">
        <p className="font-bold text-[#434750] text-[24px]"> $0.5</p>
        <p className="text-[#727272] text-[20px] font-light">Each Decline costs</p>
      </div>
      <div className="flex-1 flex items-center w-full pr-[30px]">
          <button className="text-[#434750] text-[16px] w-full py-[8px] rounded-[10px] border bg-[#CEFFC2] hover:bg-[#A7D99C] ">
        Purchase this Card
       </button>
       </div>
    </div>
  );
}

export default Issue_New_Card_States;
