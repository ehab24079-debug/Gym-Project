"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { MdOutlineAccessTime, MdOutlinePayment, MdOutlinePayments } from "react-icons/md";
import { TbCategory } from "react-icons/tb";

export default function MemberDetailsTabs() {
  const LinkStyle="flex flex-col lg:flex-row text-[12px] lg:text-[16px]  justify-center items-center duration-300 ease-in-out rounded-2xl gap-1 lg:gap-2.5 p-2"
    const pathname=usePathname()
    const {id} =useParams()
  return (
    <div className="shadow rounded-2xl">
      <nav className="grid grid-cols-4 gap-1.5  ">
        {/* Overview */}
        <Link
          href={`/members/${id}`}
          className={` ${LinkStyle}
            ${pathname === `/members/${id}`
              ? "bg-[#0F172AFF] text-white  "
              : "hover:bg-[#CBD5E1FF]  "}
          `}
        > <TbCategory />
          Overview
        </Link>
        {/* Subscription */}
        <Link
          href={`/members/${id}/member-subscription`}
          className={` ${LinkStyle}
            ${pathname === `/members/${id}/member-subscription`
              ? "bg-[#0F172AFF] text-white  "
              : "hover:bg-[#CBD5E1FF] "}
          `}
        >
          <MdOutlinePayment />
          Subscription
        </Link>
        {/* Payments */}
        <Link
          href={`/members/${id}/member-payments`}
          className={ ` ${LinkStyle}
            ${pathname === `/members/${id}/member-payments`
              ? "bg-[#0F172AFF] text-white "
              : "hover:bg-[#CBD5E1FF] "}
          `}
        >
          <MdOutlinePayments />
          Payments
        </Link>
        {/* attendance */}
        <Link
          href={`/members/${id}/member-attendance`}
          className={` ${LinkStyle}
            ${pathname === `/members/${id}/member-attendance`
              ? "bg-[#0F172AFF] text-white"
              : "hover:bg-[#CBD5E1FF] "}
          `}
        >
          <MdOutlineAccessTime />
          Attendance
        </Link>
        
      </nav>
    </div>
  );
}
