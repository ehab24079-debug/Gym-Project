"use client";

import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuActivity, LuLayoutDashboard } from "react-icons/lu";
import { TbCreditCard, TbReceiptDollar, TbUsers } from "react-icons/tb";
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

export default function MobileSidebarDrawer() {
    const closeDrawer = () => {
  const drawer = document.getElementById("my-drawer-1");

  if (drawer) {
    drawer.checked = false;
  }
};
  const pathname = usePathname();
  const LinkStyle =
    "flex items-center gap-2.5 text-[16px] font-medium leading-6 duration-200 text-white ";
  return (
    <div className="drawer w-fit  lg:hidden">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-1"
          className="bg-[#256AF4FF] text-white p-2 rounded-lg flex cursor-pointer  "
        >
          <IoIosMenu />
        </label>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-1"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <nav className="flex flex-col gap-6 grow bg-[#0F172AFF]  h-screen p-5  ">
          <div className="flex gap-2 mb-7 items-center px-1.5 ">
            <div className="bg-[#256AF4FF] text-white p-2 rounded-lg ">
              <LuActivity />
            </div>
            <h1 className="text-[20px] leading-7  font-bold text-[#256AF4FF] ">
              Kinetic
            </h1>
          </div>
          {/* Dashboard Page */}
          <Link
            href={"/dashboard"}
            title="dashboard"
            onClick={closeDrawer}
            className={`${LinkStyle}  ${pathname === "/dashboard" ? "text-white  bg-[#2563EBFF] p-2 rounded-lg " : " hover:text-black hover:bg-[#CBD5E1FF]  p-2 rounded-lg duration-200"} `}
          >
            <LuLayoutDashboard className="min-w-6  " />
            <span className="opacity-100 group-hover:delay-75  duration-300  ">
              Dashboard
            </span>
          </Link>
          {/* Members page */}
          <Link
            href={"/members"}
            title="Members"
            onClick={closeDrawer}
            className={` ${LinkStyle} ${
              pathname === "/members"
                ? "text-white  bg-[#2563EBFF] p-2 rounded-lg "
                : " hover:text-black hover:bg-[#CBD5E1FF]  p-2 rounded-lg duration-200"
            } `}
          >
            <TbUsers className="min-w-6  " />
            <span className="opacity-100  group-hover:delay-75   duration-300 ">
              Members
            </span>
          </Link>
          {/* Subscriptions page */}
          <Link
            href={"/subscriptions"}
            title="Subscriptions"
            onClick={closeDrawer}
            className={` ${LinkStyle}  ${
              pathname === "/subscriptions"
                ? "text-white  bg-[#2563EBFF] p-2 rounded-lg "
                : " hover:text-black hover:bg-[#CBD5E1FF]  p-2 rounded-lg duration-200"
            } `}
          >
            <TbCreditCard className="min-w-6  " />
            <span className="opacity-100  group-hover:delay-75   duration-300 ">
              Subscriptions
            </span>
          </Link>
          {/* Attendance page */}
          <Link
            href={"/attendance"}
            title="Attendance"
            onClick={closeDrawer}
            className={` ${LinkStyle} ${
              pathname === "/attendance"
                ? "text-white  bg-[#2563EBFF] p-2 rounded-lg "
                : " hover:text-black hover:bg-[#CBD5E1FF]  p-2 rounded-lg duration-200"
            } `}
          >
            <FaRegCalendarCheck className="min-w-6  " />
            <span className="opacity-100  group-hover:delay-75   duration-300 ">
              Attendance
            </span>
          </Link>
          {/* Payments page */}
          <Link 
            href={"/payments"}
            title="Payments"
            onClick={closeDrawer}
            className={` ${LinkStyle} ${
              pathname === "/payments"
                ? "text-white  bg-[#2563EBFF] p-2 rounded-lg "
                : " hover:text-black hover:bg-[#CBD5E1FF]  p-2 rounded-lg duration-200"
            } `}
          >
            <TbReceiptDollar className="min-w-6  " />
            <span className="opacity-100  group-hover:delay-75   duration-300 ">
              Payments
            </span>
          </Link>
          {/* Logout / settings */}
          <div className="flex flex-col gap-3 items-start   h-full justify-end  ">
          <div className="border-t-2  border-[#432DD7] w-full mb-2"></div>
            <div className="flex gap-1 text-gray-200 items-center cursor-pointer ">
              <IoSettingsOutline className="min-w-6  " />
              <p className=" leading-5 font-medium flex">Setting</p>
            </div>
            <div className="flex gap-1 text-[#FB7185FF] items-center  cursor-pointer ">
              <MdLogout className="min-w-6  " />
              <p className=" leading-5 font-medium  flex ">Logout</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
