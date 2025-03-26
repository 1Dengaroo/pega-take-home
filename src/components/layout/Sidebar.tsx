import { FC } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../../types/nav";
import CreateMenu from "./CreateMenu";

const Sidebar: FC = () => {
  return (
    <aside className="w-[var(--navbar-width)] hover:w-64 bg-gray-900 text-white h-screen transition-all duration-300">
      <div className="p-4 text-lg font-bold">PEGA</div>
      <CreateMenu />
      <nav className="mt-4 flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 transition-colors ${
                isActive ? "bg-gray-800" : "hover:bg-gray-700"
              }`
            }
          >
            <item.icon />
            <span className="hidden lg:inline">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
