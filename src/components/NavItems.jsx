import { IoIosInformationCircleOutline } from "react-icons/io";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";
import {
  RiStackLine,
  RiLockPasswordLine,
  RiNotification3Line,
} from "react-icons/ri";
import { AiOutlineSchedule, AiOutlineSetting } from "react-icons/ai";
import { LuNetwork } from "react-icons/lu";
import { MdOutlineSubscriptions } from "react-icons/md";

const navItems = [
  { label: "Company Info", icon: IoIosInformationCircleOutline },
  { label: "Offices", icon: HiBuildingOffice2 },
  { label: "Department", icon: TbWorld },
  { label: "Job Titles", icon: RiStackLine },
  { label: "Work Schedule", icon: AiOutlineSchedule },
  { label: "Work Schedule", icon: AiOutlineSchedule },
  { label: "Permission", icon: AiOutlineSetting },
  { label: "Integration", icon: LuNetwork },
  { label: "Subscription", icon: MdOutlineSubscriptions },
  { label: "Password", icon: RiLockPasswordLine },
  { label: "Notifications", icon: RiNotification3Line },
];

const NavItems = () => {
  return (
    <div className="w-[280px] bg-primary p-5 space-y-2 rounded-2xl hidden md:block">
      {navItems.map((item, index) => {
        const { label, icon: Icon } = item;

        return (
          <div
            key={index + label}
            className="flex items-center gap-x-5 p-3 px-5 rounded-xl group duration-200 hover:bg-secondary cursor-pointer"
          >
            <Icon className="text-xl group-hover:text-accent duration-200" />
            {label}
          </div>
        );
      })}
    </div>
  );
};

export default NavItems;
