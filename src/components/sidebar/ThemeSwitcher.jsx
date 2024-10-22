import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(true);

  return (
    <div className="w-full bg-secondary p-2 rounded-full text-sm">
      <div
        className={`flex items-center p-2 z-20 relative before:absolute before:top-0 before:h-full before:w-1/2 before:bg-primary before:rounded-full before:-z-10 before:duration-200 ${
          theme ? "before:left-0" : "before:left-1/2"
        }`}
      >
        <div
          onClick={() => setTheme((prev) => !prev)}
          className="flex items-center justify-center gap-x-2.5 w-full cursor-pointer"
        >
          <MdOutlineWbSunny /> Light
        </div>
        <div
          onClick={() => setTheme((prev) => !prev)}
          className="flex items-center justify-center gap-x-2.5 w-full cursor-pointer"
        >
          <IoMoonOutline /> Dark
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
