import { FiUserPlus } from "react-icons/fi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function QuickActions() {
  return (
    <div className="h-full grow p-6 flex flex-col gap-6 ">
      <h2 className="font-semibold text-[18px] leading-7 text-[ #181B20FF]">QuickActions</h2>
      <div className="flex flex-col  gap-3">
        <button className="btn btn-ghost border border-[#E0E2E6FF] text-[14px] font-medium flex items-center justify-center rounded-2xl text-[#181B20FF]"><FiUserPlus className="text-[#3C57DDFF] text-[16px]" /> Add New Member</button>
        <button className="btn btn-ghost border border-[#E0E2E6FF] text-[14px] font-medium flex items-center justify-center rounded-2xl text-[#181B20FF]"><IoCheckmarkCircleOutline className="text-[16px] font-semibold"/> Check-in Member</button>
      </div>
    </div>
  );
}
