import { AiOutlineDollar } from "react-icons/ai";
import { LuActivity } from "react-icons/lu";
import { MdPayment } from "react-icons/md";
import { TbUserCheck } from "react-icons/tb";

export default function StatsCards() {
  return (
    <div className=" flex w-full flex-col gap-8 ">
      {/* Title_Page */}
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold md:font-bold text-[16px] md:text-2xl">
          Dashboard
        </h2>
        <p className="text-[14px] md:text-[16px]">
          Overview of gym operations and membership health
        </p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3  md:gap-6 ">
        {/* Card */}
        <div className="flex gap-4 bg-white shadow-sm rounded-lg py-6  items-center justify-center ">
          {/* Icon */}
          <div className={` p-3 rounded-[14px] bg-[#3C57DD0D] `}>
            <TbUserCheck className="min-w-6 text-[19px] text-[#3C57DDFF] " />
          </div>
          {/* text */}
          <div className="flex flex-col gap-1">
            <p className="text-xs leading-4 uppercase font-bold text-[ #575E6BFF]">
              Total Members
            </p>
            <h2 className="text-2xl leading-8 font-bold text-[#181B20FF]">
              1,284
            </h2>
          </div>
        </div>
        {/* Card */}
        <div className="flex gap-4 bg-white shadow-sm rounded-lg py-6  items-center justify-center ">
          {/* Icon */}
          <div className={` p-3 rounded-[14px] bg-[#3C57DD0D] `}>
            <MdPayment className="min-w-6 text-[19px] text-[#3C57DDFF] " />
          </div>
          {/* text */}
          <div className="flex flex-col gap-1">
            <p className="text-xs leading-4 uppercase font-bold text-[ #575E6BFF]">
              Active Subscriptions
            </p>
            <h2 className="text-2xl leading-8 font-bold text-[#181B20FF]">
              1,142
            </h2>
          </div>
        </div>
        {/* Card */}
        <div className="flex gap-4 bg-white shadow-sm rounded-lg py-6  items-center justify-center ">
          {/* Icon */}
          <div className={` p-3 rounded-[14px] bg-[#3C57DD0D] `}>
            <LuActivity className="min-w-6 text-[19px] text-[#3C57DDFF] " />
          </div>
          {/* text */}
          <div className="flex flex-col gap-1">
            <p className="text-xs leading-4 uppercase font-bold text-[ #575E6BFF]">
              Today's Attendance
            </p>
            <h2 className="text-2xl leading-8 font-bold text-[#181B20FF]">
              186
            </h2>
          </div>
        </div>
        {/* Card */}
        <div className="flex gap-4 bg-white shadow-sm rounded-lg py-6  items-center justify-center ">
          {/* Icon */}
          <div className={` p-3 rounded-[14px] bg-[#3C57DD0D] `}>
            <AiOutlineDollar className="min-w-6 text-[19px] text-[#3C57DDFF] " />
          </div>
          {/* text */}
          <div className="flex flex-col gap-1">
            <p className="text-xs leading-4 uppercase font-bold text-[ #575E6BFF]">
              Outstanding Payments
            </p>
            <h2 className="text-2xl leading-8 font-bold text-[#181B20FF]">
              $2,450
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
