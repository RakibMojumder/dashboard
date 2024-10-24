import Avatar from "./Avatar";
import NavILinks from "./NavLinks";
import SearchBox from "./SearchBox";
import { MdOutlineMail } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { RiMenu2Fill } from "react-icons/ri";
import { useState } from "react";
import MobileSidebar from "../sidebar/MobileSidebar";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="h-20 bg-primary flex items-center justify-between gap-x-5 px-8 sticky top-0 z-50">
        <div
          onClick={() => setShowSidebar(true)}
          className="lg:hidden p-2 cursor-pointer"
        >
          <RiMenu2Fill size={24} />
        </div>
        <SearchBox />
        <NavILinks />
        <div className="flex items-center gap-x-8">
          <span className="relative after:absolute after:top-0 after:right-0 after:size-2 after:bg-red-500 after:rounded-full">
            <MdOutlineMail size={25} />
          </span>
          <span className="relative after:absolute after:top-0 after:right-0 after:size-2 after:bg-red-500 after:rounded-full">
            <TbMessage size={25} />
          </span>
          <Avatar />
        </div>
      </div>

      {showSidebar && <MobileSidebar setShowSidebar={setShowSidebar} />}
    </>
  );
};

export default Navbar;
