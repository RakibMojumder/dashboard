import { MdKeyboardArrowLeft } from "react-icons/md";

const Logo = () => {
  return (
    <div className="h-20 w-full flex items-center justify-between px-8">
      <h3 className="text-3xl font-bold">Dexio</h3>
      <div className="flex items-center">
        <MdKeyboardArrowLeft size={18} className="text-neutral-500" />
        <MdKeyboardArrowLeft size={18} className="text-neutral-500 -ml-2.5" />
      </div>
    </div>
  );
};

export default Logo;
