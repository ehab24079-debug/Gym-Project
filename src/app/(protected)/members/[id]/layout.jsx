import MemberDetailsTabs from "../../../../components/member-details-components/MemberDetailsTabs";
import MemberSummaryCard from "../../../../components/member-details-components/MemberSummaryCard";


export default function MemberDetailsLayout({ children }) {
  return (
    <div className="flex flex-col gap-6 w-full px-4 md:px-8 container mx-auto  h-dvh overflow-x-hidden">
      <MemberSummaryCard/>
      <MemberDetailsTabs/>
      {children}
    </div>
  );
}
