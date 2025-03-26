import { FC, useState } from "react";
import SidebarContext from "../../context/SidebarContext";
import NavItemComponent from "../sidebar/NavItem";
import Search from "../sidebar/Search";
import { navItems, footerNavItems } from "../../types/nav";
import SidebarHeader from "../sidebar/Header";
import Separator from "../ui/Separator";
import Profile from "../sidebar/Profile";

const Sidebar: FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <SidebarContext.Provider value={{ collapsed }}>
      <aside
        className={`
          ${collapsed ? "w-sidebar" : "w-sidebar-expanded"}
          bg-primary text-primary-foreground
          h-screen overflow-hidden transition-all duration-300 flex flex-col
        `}
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
      >
        <SidebarHeader title="PEGA" subtitle="Demo" />
        <Search onSearch={handleSearch} />
        <Separator className="my-2" />

        <nav className="overflow-y-scroll">
          {navItems.map((item, i) => (
            <NavItemComponent key={`${item.label}-${i}`} item={item} />
          ))}
        </nav>

        <nav className="mt-auto">
          <Separator className="my-2" />

          {footerNavItems.map((item, i) => (
            <NavItemComponent key={`${item.label}-${i}`} item={item} />
          ))}

          <div className="my-2.5">
            <Profile />
          </div>
        </nav>
      </aside>
    </SidebarContext.Provider>
  );
};

export default Sidebar;
