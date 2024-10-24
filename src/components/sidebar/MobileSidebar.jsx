import { RxCross2 } from "react-icons/rx";
import Logo from "./Logo";
import SidebarFooter from "./SidebarFooter";
import SidebarItems from "./SidebarItems";
import { MdOutlineDashboard } from "react-icons/md";

const MobileSidebar = ({ setShowSidebar }) => {
  return (
    <div className="fixed inset-0 bg-black/35 z-50 lg:hidden">
      <div className="flex w-[280px] h-full py-6 flex-col justify-between bg-primary border-r border-secondary overflow-y-auto scrollbar">
        <div className="h-20 w-full flex items-center justify-between px-8">
          <h3 className="text-3xl font-bold">Dexio</h3>
          <RxCross2
            size={24}
            className="cursor-pointer"
            onClick={() => setShowSidebar(false)}
          />
        </div>
        <div className="flex-1 pb-10 px-8 mt-5">
          <button className="w-full py-2 px-4 flex justify-between bg-accent text-white rounded-md">
            Dahboard <MdOutlineDashboard size={24} />
          </button>
          <SidebarItems />
        </div>
        <SidebarFooter />
      </div>
    </div>
  );
};

export default MobileSidebar;
