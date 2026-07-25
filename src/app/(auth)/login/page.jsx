"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LuActivity } from "react-icons/lu";

export default function LoginPage() {
  const router = useRouter();
  return (
    <div
      data-theme="light"
      className="w-full h-full flex justify-center items-center  px-4"
    >
      <div className="bg-white w-100 shadow flex flex-col justify-center items-center p-10  rounded-[12px] border-t-2 border-[#256AF4FF] ">
        {/* logo */}
        <div className="flex gap-2 mb-7">
          <div className="bg-[#256AF4FF] text-white p-2 rounded-lg ">
            <LuActivity />
          </div>
          <h1 className="text-[26px] leading-7 font-bold text-[#256AF4FF]">
            Kinetic
          </h1>
        </div>
        {/* Welcome back */}
        <div className="flex flex-col gap-1.5 mb-10">
          <h2 className="text-[#16181DFF] text-2xl leading-8 font-semibold text-center">
            Welcome back
          </h2>
          <p className="text-[14px] leading-5 font-normal text-[#343841FF] text-center">
            Sign in to manage members, <br /> subscriptions, and gym operations.
          </p>
        </div>
        {/* Form */}
        <div className="flex flex-col w-full gap-3">
          {/* email inp */}
          <div className="flex flex-col w-full gap-1.5">
            <p className="text-[12px] leading-5 font-semibold tracking-[1px] uppercase text-gray-400">
              EMAIL ADDRESS
            </p>
            <input
              type="email"
              placeholder="admin@kinetic.com"
              className="  border border-[#E0E2E6FF] rounded-lg p-1.5 placeholder:text-black placeholder:text-[13px] "
            />
          </div>
          {/* pass inp */}
          <div className="flex flex-col w-full gap-1.5">
            <div className="flex justify-between">
              <p className="text-[12px] leading-5 font-semibold tracking-[1px] uppercase text-gray-400 ">
                Password
              </p>
              <Link
                href={"/"}
                className="text-[12px] leading-5 font-semibold tracking-[1px] text-[#256AF4FF]"
              >
                Forget password
              </Link>
            </div>
            <input
              type="password"
              placeholder="admin@123"
              className="  border border-[#E0E2E6FF] rounded-lg p-1.5 placeholder:text-black placeholder:text-[13px] "
            />
          </div>
          {/* Remember me  */}
          <label className="flex gap-1.5 cursor-pointer">
            <input type="checkbox" />
            <p className="text-gray-400">Remember this device</p>
          </label>
          <button
            onClick={() => router.replace("/dashboard")}
            className="btn btn-primary  hover:bg-[#3C57DDFF] text-white font-semibold"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
