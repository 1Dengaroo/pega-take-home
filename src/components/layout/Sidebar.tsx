import { FC, useState } from "react";
import SidebarContext from "../../context/SidebarContext";
import NavItemComponent from "../sidebar/NavItem";
import Search from "../sidebar/Search";
import { navItems, footerNavItems, SectionViewType } from "../../constants/nav";
import SidebarHeader from "../sidebar/Header";
import Separator from "../ui/Separator";
import Profile from "../sidebar/Profile";
import SectionView from "../sidebar/SectionView/SectionView";

const Sidebar: FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [sectionView, setSectionView] = useState<SectionViewType | null>(null);

  const handleSearch = (query: string) => {
    setSectionView("search");
    setCollapsed(false);
  };

  const handleOpenSectionView = (type: SectionViewType) => {
    setSectionView(type);
    setCollapsed(false);
  };

  const handleCloseSectionView = () => {
    setSectionView(null);
  };

  return (
    <SidebarContext.Provider value={{ collapsed }}>
      <aside
        className={`
          ${collapsed && !sectionView ? "w-sidebar" : "w-sidebar-expanded"}
          bg-primary text-primary-foreground
          h-screen overflow-hidden transition-all 
          duration-300 flex flex-col
        `}
        onMouseEnter={() => !sectionView && setCollapsed(false)}
        onMouseLeave={() => !sectionView && setCollapsed(true)}
      >
        {sectionView ? (
          <SectionView type={sectionView} onClose={handleCloseSectionView} />
        ) : (
          <>
            <SidebarHeader title="PEGA" subtitle="Demo" />
            <Search onSearch={handleSearch} />
            <Separator className="my-2" />

            <nav className="overflow-y-auto">
              {navItems.map((item) => (
                <NavItemComponent
                  key={item.label}
                  item={item}
                  onOpenSection={handleOpenSectionView}
                />
              ))}
            </nav>

            <nav className="mt-auto">
              <Separator className="my-2" />

              {footerNavItems.map((item) => (
                <NavItemComponent
                  key={item.label}
                  item={item}
                  onOpenSection={handleOpenSectionView}
                />
              ))}

              <div className="my-2.5">
                <Profile />
              </div>
            </nav>
          </>
        )}
      </aside>
    </SidebarContext.Provider>
  );
};

export default Sidebar;
