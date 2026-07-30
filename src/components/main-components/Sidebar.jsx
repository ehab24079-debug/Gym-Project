"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import {
    LuActivity,
  LuLayoutDashboard,
} from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { TbCreditCard, TbReceiptDollar, TbUsers } from "react-icons/tb";

export default function Sidebar() {
  const LinkStyle =
    "flex items-center gap-2.5 text-[16px] font-medium leading-6 duration-200 text-gray-200 ";
  const pathname = usePathname();
  return (
    <div className="group hidden lg:flex w-64  duration-300 md:w-[256px] h-dvh  bg-[#0F172AFF] shadow p-6  flex-col border-r-2 border-gray-100 overflow-hidden">
      <div className=" flex gap-2.5 items-center mb-11 ">
        <div className="flex gap-2 mb-7 items-center self-center">
          <div className="bg-[#256AF4FF] text-white p-2 rounded-lg ">
            <LuActivity />
          </div>
          <h1 className="text-[26px] leading-7 font-bold text-[#256AF4FF] hidden md:flex">
            Kinetic
          </h1>
        </div>
      </div>
      {/* Nav */}
      <nav className="flex flex-col gap-5 grow ">
        {/* Dashboard Page */}
        <Link
          href={"/dashboard"}
          title="dashboard"
          className={`${LinkStyle}  ${pathname === "/dashboard" ? "text-white  bg-[#2563EBFF] p-2 rounded-lg " : " hover:text-black hover:bg-[#CBD5E1FF]  p-2 rounded-lg duration-200"} `}
        >
          <LuLayoutDashboard className="min-w-6  " />
          <span className="opacity-0 group-hover:opacity-100 group-hover:delay-75 md:opacity-100  duration-300  ">
            Dashboard
          </span>
        </Link>
        {/* Members page */}
        <Link
          href={"/members"}
          title="Members"
          className={` ${LinkStyle} ${
            pathname === "/members"
              ? "text-white  bg-[#2563EBFF] p-2 rounded-lg "
              : " hover:text-black hover:bg-[#CBD5E1FF]  p-2 rounded-lg duration-200"
          } `}
        > 
          <TbUsers className="min-w-6  " />
          <span className="opacity-0 group-hover:opacity-100 group-hover:delay-75 md:opacity-100  duration-300 ">
            Members
          </span>
        </Link>
        {/* Subscriptions page */}
        <Link
          href={"/subscriptions"}
          title="Subscriptions"
          className={` ${LinkStyle}  ${
            pathname === "/subscriptions"
              ? "text-white  bg-[#2563EBFF] p-2 rounded-lg "
              : " hover:text-black hover:bg-[#CBD5E1FF]  p-2 rounded-lg duration-200"
          } `}
        >
          <TbCreditCard className="min-w-6  " />
          <span className="opacity-0 group-hover:opacity-100 group-hover:delay-75 md:opacity-100  duration-300 ">
            Subscriptions
          </span>
        </Link>
        {/* Attendance page */}
        <Link
          href={"/attendance"}
          title="Attendance"
          className={` ${LinkStyle} ${
            pathname === "/attendance"
              ? "text-white  bg-[#2563EBFF] p-2 rounded-lg "
              : " hover:text-black hover:bg-[#CBD5E1FF]  p-2 rounded-lg duration-200"
          } `}
        >
          <FaRegCalendarCheck className="min-w-6  " />
          <span className="opacity-0 group-hover:opacity-100 group-hover:delay-75 md:opacity-100  duration-300 ">
            Attendance
          </span>
        </Link>
        {/* Payments page */}
        <Link
          href={"/payments"}
          title="Payments"
          className={` ${LinkStyle} ${
            pathname === "/payments"
              ? "text-white  bg-[#2563EBFF] p-2 rounded-lg "
              : " hover:text-black hover:bg-[#CBD5E1FF]  p-2 rounded-lg duration-200"
          } `}
        >
          <TbReceiptDollar  className="min-w-6  " />
          <span className="opacity-0 group-hover:opacity-100 group-hover:delay-75 md:opacity-100  duration-300 ">
            Payments
          </span>
        </Link>
      </nav>
      {/* Footer */}
      <div className="flex flex-col gap-3 items-start mb-6 md:border-t-2 pt-3.5 md:border-[#432DD7] ">
        <div className="flex gap-1 text-gray-200 items-center ">
            <IoSettingsOutline className="min-w-6  " />
            <p className=" leading-5 font-medium  cursor-pointer">Setting</p>
        </div>
        <div className="flex gap-1 text-[#FB7185FF] items-center ">
            <MdLogout className="min-w-6  " />
            <p className=" leading-5 font-medium  cursor-pointer">Logout</p>
        </div>
      </div> 
    </div>
  );
}
