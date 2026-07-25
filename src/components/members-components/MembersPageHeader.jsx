import { FiUserPlus } from "react-icons/fi";

export default function MembersPageHeader() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2.5 lg:gap-0 border-b border-gray-400/45 pb-6">
        {/* text */}
        <div className="flex flex-col gap-1">
            <h2 className="text-2xl md:text-3xl leading-9 font-bold text-[#181B20FF]">Members</h2>
            <p className="text-[16px] leading-6 font-normal text-[ #575E6BFF]">Manage registered gym members and their membership status.</p>
        </div>
        {/* Add_member_button */}
        <div className="">
            <button className="btn bg-[#3C57DDFF] text-[15px] leading-5 font-medium text-white w-[175px] rounded-2xl"><FiUserPlus className="text-white text-[14px]" />  Add Member</button>
        </div>
    </div>
  )
}
