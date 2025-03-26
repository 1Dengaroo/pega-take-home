import { FC, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import SidebarContext from "../../context/SidebarContext";
import { NavItem } from "../../types/nav";

interface NavItemComponentProps {
  item: NavItem;
}

const NavItemComponent: FC<NavItemComponentProps> = ({ item }) => {
  const { collapsed } = useContext(SidebarContext);
  const [isOpen, setIsOpen] = useState(false);

  if (item.type === "link" && item.path) {
    return (
      <NavLink to={item.path} className={`flex items-center h-12`}>
        <div className="w-sidebar flex justify-center items-center flex-shrink-0">
          {item.icon && <item.icon />}
        </div>

        <span className="whitespace-nowrap text-ellipsis font-semibold">
          {item.label}
        </span>
      </NavLink>
    );
  }

  if (item.type === "dropdown" && item.nested) {
    if (collapsed && isOpen) setIsOpen(false);

    return (
      <div className="flex flex-col">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center h-12 cursor-pointer"
        >
          <div className="w-sidebar flex justify-center items-center flex-shrink-0">
            {item.icon && <item.icon />}
          </div>

          <span className="whitespace-nowrap text-ellipsis font-semibold">
            {item.label}
          </span>
        </button>

        <div
          className={`
            transition-[max-height] duration-300 ease-in-out overflow-hidden bg-white/5
            ${isOpen ? "max-h-96 overflow-y-auto" : "max-h-0"}
          `}
        >
          {item.nested.map((nestedItem, index) => (
            <NavItemComponent
              key={`${nestedItem.label}-${index}`}
              item={nestedItem}
            />
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default NavItemComponent;
