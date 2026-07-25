import MemberCard from "./MemberCard";
import MembersTable from "./MembersTable";

export default function MembersList() {
  return (
    <div className="overflow-y-auto scrollbar-none">
      <div className="rounded-box border border-base-content/5 bg-base-100 ">
        {/* table lg */}
        <MembersTable />
        {/* card sm/md */}
        <MemberCard />
      </div>
    </div>
  );
}
