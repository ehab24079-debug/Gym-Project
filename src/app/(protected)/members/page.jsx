
import MembersPageHeader from "@/components/members-components/MembersPageHeader";
import MembersTable from "@/components/members-components/MembersList";
import MembersToolbar from "@/components/members-components/MembersToolbar";

export default function page() {
  return (
    <div className="flex flex-col gap-6 w-full px-4 md:px-8 container mx-auto  h-full overflow-hidden">
      <MembersPageHeader/>
      <MembersToolbar/>
      <MembersTable/>
    </div>
  );
}
