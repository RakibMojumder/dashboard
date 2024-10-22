import userImg from "../../assets/user.jpg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Avatar = () => {
  return (
    <div className="flex items-center gap-x-3 cursor-pointer">
      <img
        src={userImg}
        alt="user image"
        className="size-9 rounded-full object-cover border"
      />
      <MdOutlineKeyboardArrowDown size={18} className="text-neutral-400" />
    </div>
  );
};

export default Avatar;
