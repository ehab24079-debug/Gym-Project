import { LuFilter } from "react-icons/lu";

export default function MembersToolbar() {
  return (
    <div className="flex items-center gap-2 justify-between">
      {/* serch */}
      <label className="input focus-within:outline-0 border border-gray-200 rounded-2xl ">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" className="text-[14px] leading-5 " placeholder="Search by name, phone, or email" />
      </label>
      {/* Filter */}
      <div className="">
        <button className="btn bg-white text-black font-medium rounded-2xl text-[14px] hidden md:flex"> Filter By :</button>
        <button className="btn bg-white rounded-full text-[#3B5BDB] flex md:hidden"> <LuFilter  /></button>
      </div>
    </div>
  );
}
