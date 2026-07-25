
export default function MembershipDistribution() {
  return (
    <div className="flex flex-col gap-6 w-full lg:w-8/12 h-full">
        <h2 className="text-[18px] leading-7 font-semibold text-[#181B20FF]">Members by Membership Type</h2>
        {/* Types */}
        <div className="flex flex-col gap-6">
            {/* Type_1 */}
            <div className="flex flex-col gap-2">
                {/* Title */}
                <div className="flex items-center justify-between">
                    <p className="font-medium leading-5 text-[14px] ">Monthly</p>
                    <p className="text-[#575E6BFF]">450 members (35%)</p>
                </div>
                {/* Progress */}
                <progress className="progress w-full bg-[#F9FAFBFF] text-[#3C57DDFF]" value="55" max="100"></progress>
            </div>
            {/* Type_2 */}
            <div className="flex flex-col gap-2">
                {/* Title */}
                <div className="flex items-center justify-between">
                    <p className="font-medium leading-5 text-[14px] ">3 Months</p>
                    <p className="text-[#575E6BFF]">320 members (25%)</p>
                </div>
                {/* Progress */}
                <progress className="progress w-full bg-[#F9FAFBFF] text-[#3C57DDFF]" value="30" max="100"></progress>
            </div>
            {/* Type_3 */}
            <div className="flex flex-col gap-2">
                {/* Title */}
                <div className="flex items-center justify-between">
                    <p className="font-medium leading-5 text-[14px] ">6 Months</p>
                    <p className="text-[#575E6BFF]">210 members (16%)</p>
                </div>
                {/* Progress */}
                <progress className="progress w-full bg-[#F9FAFBFF] text-[#3C57DDFF]" value="20" max="100"></progress>
            </div>
            {/* Type_4 */}
            <div className="flex flex-col gap-2">
                {/* Title */}
                <div className="flex items-center justify-between">
                    <p className="font-medium leading-5 text-[14px] ">Annual</p>
                    <p className="text-[#575E6BFF]">304 members (24%)</p>
                </div>
                {/* Progress */}
                <progress className="progress w-full bg-[#F9FAFBFF] text-[#3C57DDFF]" value="35" max="100"></progress>
            </div>
        </div>
    </div>
  )
}
