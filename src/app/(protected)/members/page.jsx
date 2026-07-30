
import MembersPageHeader from "../../../components/members-components/MembersPageHeader";
import MembersToolbar from "../../../components/members-components/MembersToolbar";
import MembersList from "../../../components/members-components/MembersList";

export default function page() {
  return (
    <div className="flex flex-col gap-6 w-full px-4 md:px-8 container mx-auto  h-full overflow-x-hidden">
      <MembersPageHeader/>
      <MembersToolbar/>
      <MembersList/>
    </div>
  );
}
