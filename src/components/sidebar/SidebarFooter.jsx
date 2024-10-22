import { IoMdHelpCircleOutline, IoMdSettings } from "react-icons/io";
import ThemeSwitcher from "./ThemeSwitcher";

const SidebarFooter = () => {
  return (
    <div className="h-40 px-8 py-2 space-y-5">
      <div className="flex items-center gap-x-5">
        <IoMdHelpCircleOutline size={24} />
        <span>Help Center</span>
      </div>
      <div className="flex items-center gap-x-5">
        <IoMdSettings size={24} />
        <span>Setting</span>
      </div>
      <ThemeSwitcher />
    </div>
  );
};

export default SidebarFooter;
