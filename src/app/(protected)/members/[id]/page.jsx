export default function MemberOverviewPage() {
  const h2Style = "text-[13px] leading-4 text-[#94A3B8FF] font-bold uppercase tracking-[0.5px]";
  const Pstyle = "text-[15px] leading-6 text-[#0F172AFF] font-semibold";
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  items-start gap-4 lg:grid-cols-3 rounded-2xl p-8 shadow border border-[#CBD5E1FF]  mb-1.5 ">
      {/* Column 1 */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h2 className={h2Style}>FULL NAME</h2>
          <p className={Pstyle}>Sarah jenkins</p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className={h2Style}>GENDER</h2>
          <p className={Pstyle}>Female</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className={h2Style}>CURRENT STATUS</h2>
          <p className="bg-[#ECFDF5FF] text-green-800/90 border border-green-200 rounded-2xl max-w-20 lg:px-3 flex items-center justify-center  ">
            Active
          </p>
        </div>
      </div>
      {/* Column 2 */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h2 className={h2Style}>PHONE NUMBER</h2>
          <p className={Pstyle}>+(555) 234-5678 </p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className={h2Style}>DATE OF BIRTH</h2>
          <p className={Pstyle}>May 14, 1992</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className={h2Style}>TOTAL VISITS</h2>
          <p className={Pstyle}>142 sessions</p>
        </div>
      </div>
      {/* Column 3 */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h2 className={h2Style}>EMAIL ADDRESS</h2>
          <p className={Pstyle}>S.jenkins@example.com</p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className={h2Style}>JOIN DATE</h2>
          <p className={Pstyle}>Oct 12,2023</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 lg:p-7 pt-5 mt-5 border-t border-[#94A3B8FF]  col-span-full  ">
        <h2 className={h2Style}>MEMBER NOTES</h2>
        {/* <textarea className="focus-within:outline-0 border border-gray-200 rounded-2xl p-3"></textarea> */}
        <p className="text-[14px] leading-6 font-normal text-[ #475569FF]">Prefers morning sessions. Interested in personal training next quarter.</p>
      </div>
    </div>
  );
}
