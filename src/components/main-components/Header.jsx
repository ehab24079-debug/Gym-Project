
export default function Header() {
  return (
    <div className=" bg-white py-4 px-6 border-b-2 border-gray-100 shadow shadow-gray-300 flex justify-between items-center w-full mb-8  ">
      <h1 className=" text-[12px] md:text-[20px] font-bold text-[#0F172B] leading-7">
       Stronger Every Day
      </h1>
      <div className="flex items-center gap-4 ">
        {/* name */}
        <div className="flex-col text-end hidden md:flex">
          <h2 className="text-[14px] text-[#181B20FF] leading-3.5 font-medium">Ehab Mohamed</h2>
          <p className="text-[#575E6BFF] text-[13px] leading-4 font-normal">Admin</p>
        </div>
        {/* img */}
        <div className="w-10 h-10 bg-gray-500 rounded-full shrink-0 "></div>
      </div>
    </div>
  );
}
