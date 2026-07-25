import StatsCards from "../../../components/dashboard-components/StatsCards";
import MembershipDistribution from "../../../components/dashboard-components/MembershipDistribution";
import QuickActions from "../../../components/dashboard-components/QuickActions";

export default function page() {
  return (
    <div className="flex flex-col gap-8 w-full px-4 md:px-8 container mx-auto   h-full overflow-x-hidden overflow-y-auto">
      <StatsCards />
      <div className="flex flex-col lg:flex-row gap-14">
        <MembershipDistribution />
        <QuickActions/>
      </div>
    </div>
  );
}
