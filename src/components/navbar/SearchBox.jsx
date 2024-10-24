import { IoSearchOutline } from "react-icons/io5";
import { RiCommandLine } from "react-icons/ri";

const SearchBox = () => {
  return (
    <div className="bg-secondary hidden xl:flex items-center gap-x-2 px-3.5 h-9 rounded-md">
      <IoSearchOutline size={22} />
      <input
        type="text"
        className="bg-transparent h-full focus:outline-none text-sm"
        placeholder="Search anything..."
      />
      <div className="flex items-center gap-x-2">
        <RiCommandLine />
        <span className="text-log">F</span>
      </div>
    </div>
  );
};

export default SearchBox;
