export default function MemberSubscription() {
  const h2Style =
    "text-[13px] leading-4 text-[#94A3B8FF] font-bold uppercase tracking-[0.5px]";
  const Pstyle = "text-[15px] leading-6 text-[#0F172AFF] font-semibold";
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  items-start gap-4 lg:grid-cols-3 rounded-2xl p-8 shadow border border-[#CBD5E1FF]  mb-1.5 ">
      {/* Column 1 */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h2 className={h2Style}>CURRENT PLAN</h2>
          <p className={Pstyle}>Annual</p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className={h2Style}>PRICE</h2>
          <p className={Pstyle}>$599.00</p>
        </div>
        
      </div>
      {/* Column 2 */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h2 className={h2Style}>START DATE</h2>
          <p className={Pstyle}>2023-10-12</p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className={h2Style}>STATUS</h2>
          <p className="bg-[#ECFDF5FF] text-green-800/90 border border-green-200 rounded-2xl max-w-20 lg:px-3 flex items-center justify-center  ">
            Active
          </p>
        </div>
        
      </div>
      {/* Column 3 */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h2 className={h2Style}>END DATE</h2>
          <p className={Pstyle}>2024-10-11</p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className={h2Style}>REMAINNG DAYS</h2>
          <p className={Pstyle}>245 Days</p>
        </div>
      </div>
    </div>
  );
}
