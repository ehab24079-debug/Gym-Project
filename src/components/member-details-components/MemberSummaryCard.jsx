import { CiCalendar, CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { TbEdit } from "react-icons/tb";

export default function MemberSummaryCard() {
  const ContactDetails =
    "text-[14px] leading-5 font-normal lg:text-[#64748BFF] text-[ #181B20FF] flex items-center gap-2 shadow lg:shadow-none p-3 lg:p-0 rounded-2xl lg:rounded-none  ";
  return (
    <div className="shadow p-7 rounded-2xl border border-[#E2E8F0FF]">
      <div className="flex  flex-col items-center gap-2.5 lg:gap-5 lg:flex-row lg:justify-start">
        {/* img */}
        <div className="w-20 h-20 bg-gray-300 rounded-full shrink-0 "></div>
        {/* Text */}
        <div className="flex flex-col gap-1.5 w-full">
          {/* Name & State */}
          <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-2 lg:mb-0 ">
            <div className="flex gap-2.5 flex-col lg:flex-row lg:items-center">
              <h2 className="text-2xl leading-8 font-bold">Sarah Jenkins</h2>
              <p className="bg-[#ECFDF5FF] text-green-800/90 border border-green-200 rounded-2xl  lg:px-3 flex items-center justify-center  ">
                Active
              </p>
            </div>
            {/* Button */}
            <button className="btn btn-active bg-white border border-[#E2E8F0FF] rounded-xl text-[14px] leading-6 font-medium text-[#334155FF]  items-center hidden lg:flex">
              <TbEdit className="text-[18px]" /> Edit Member
            </button>
          </div>
          {/* Contact Details */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-3.5">
            <p className={ContactDetails}>
              <LuPhone className=" text-[16px]" /> +1(555) 234-5678
            </p>
            <p className={ContactDetails}>
              <CiMail className=" text-[16px]" /> S.jenkins@example.com
            </p>
            <p className={ContactDetails}>
              <CiCalendar className=" text-[16px]" /> Joined Oct 12,2023
            </p>
            <button className="btn btn-active bg-[#3C57DDFF] border border-[#E2E8F0FF] rounded-xl text-[14px] leading-6 font-medium text-white flex items-center lg:hidden">
              <TbEdit className="text-[18px]" /> Edit Member
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
