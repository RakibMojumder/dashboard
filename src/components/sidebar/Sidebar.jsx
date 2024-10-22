import Logo from "./Logo";
import SidebarFooter from "./SidebarFooter";
import SidebarItems from "./SidebarItems";
import { MdOutlineDashboard } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="w-[280px] h-full flex flex-col justify-between bg-primary border-r border-secondary">
      <Logo />
      <div className="flex-1 overflow-y-auto pb-10 px-8 scrollbar">
        <button className="w-full py-2 px-4 flex justify-between bg-accent text-white rounded-md">
          Dahboard <MdOutlineDashboard size={24} />
        </button>
        <SidebarItems />
      </div>
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
