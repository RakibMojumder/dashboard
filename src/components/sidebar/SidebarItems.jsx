import { TbUsers } from "react-icons/tb";
import { IoFileTrayStackedOutline } from "react-icons/io5";
import { PiInvoice } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const sidebarItems = [
  {
    id: 101,
    label: "Home",
    icon: TbUsers,
    children: [
      {
        id: 1001,
        label: "Manage Employees",
      },
      {
        id: 1002,
        label: "Time Off",
      },
      {
        id: 1003,
        label: "Recruitment",
      },
      {
        id: 1004,
        label: "Payroll",
      },
      {
        id: 1005,
        label: "Outsider Collaborators",
      },
    ],
  },
  {
    id: 102,
    label: "Projects",
    icon: IoFileTrayStackedOutline,
  },
  {
    id: 103,
    label: "Invoicing",
    icon: PiInvoice,
  },
];

const SidebarItems = () => {
  const [showId, setShowId] = useState(101);

  const handleShow = (id) => {
    if (showId === id) {
      return setShowId(null);
    }

    return setShowId(id);
  };

  return (
    <div className="space-y-3 mt-8">
      {sidebarItems.map((item) => {
        const { id, label, icon: Icon } = item;

        return (
          <div onClick={() => handleShow(item.id)} key={id}>
            <div className="flex items-center justify-between cursor-pointer py-2">
              <div className="flex items-center gap-x-5">
                <Icon className="text-xl" />
                {label}
              </div>
              <IoIosArrowDown className="text-neutral-300" />
            </div>
            {item?.children && showId === item.id && (
              <div className="ml-3 space-y-2 relative before:absolute before:top-0 before:left-0 before:h-calc-100-10 before:w-[1px] before:bg-neutral-500">
                {item?.children?.map((child) => (
                  <div
                    key={child.id}
                    className="py-2.5 pl-3 ml-5 rounded-lg duration-200 hover:bg-secondary cursor-pointer relative before:absolute before:top-1 before:-left-5 before:h-4 before:w-5 before:border-l before:border-b before:rounded-bl-lg before:border-neutral-500"
                  >
                    {child.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SidebarItems;
