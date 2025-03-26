import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  label: string;
  path: string;
  icon: ReactNode;
}

const NavItem: FC<NavItemProps> = ({ label, path, icon }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 transition-colors ${
          isActive
            ? "bg-gray-800 text-white"
            : "text-gray-300 hover:bg-gray-700 hover:text-white"
        }`
      }
    >
      <div className="w-5 h-5 flex items-center justify-center">{icon}</div>
      <span className="hidden lg:block whitespace-nowrap text-sm">{label}</span>
    </NavLink>
  );
};

export default NavItem;
