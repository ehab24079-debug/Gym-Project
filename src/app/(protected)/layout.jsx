import Header from "@/components/main-components/Header";
import Sidebar from "@/components/main-components/Sidebar";

export default function ProtectedLayout({ children }) {
  return (
    <div className="container mx-auto w-full h-dvh bg-white overflow-hidden  ">
      <div className="flex h-full">
        <Sidebar />
        <div className="w-full h-full flex flex-col ">
          <Header />
          { children }
        </div>
      </div>
    </div>
  );
}
