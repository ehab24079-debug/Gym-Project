import MemberCard from "./MemberCard";
import MembersTable from "./MembersTable";

export default function MembersList({memberId}) {
  return (
    <div className="overflow-y-auto scrollbar-none">
      <div className="rounded-box border border-base-content/5 bg-base-100 ">
        {/* table lg */}
        <MembersTable memberId={memberId} />
        {/* card sm/md */}
        <MemberCard memberId={memberId} />
      </div>
    </div>
  );
}
