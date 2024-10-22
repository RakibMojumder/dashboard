import Navbar from "./navbar/Navbar";
import { IoSearchOutline } from "react-icons/io5";
import NavItems from "./NavItems";
import CompanyInfo from "./CompanyInfo";

const MainContent = () => {
  return (
    <div className="flex-1 bg-secondary overflow-y-auto scrollbar">
      <Navbar />
      <div className="p-8">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">Settings</h1>
            <p>Manage your dashboard here</p>
          </div>
          <div className="h-12 w-80 border border-neutral-500 rounded-md relative">
            <input
              type="text"
              placeholder="Search what your need"
              className="h-full w-full px-3.5 bg-transparent focus:outline-none"
            />
            <IoSearchOutline
              size={22}
              className="absolute top-2.5 right-3 text-neutral-300"
            />
          </div>
        </div>
      </div>
      <div className="px-8 pb-20 flex items-start gap-8">
        <NavItems />
        <CompanyInfo />
      </div>
    </div>
  );
};

export default MainContent;
