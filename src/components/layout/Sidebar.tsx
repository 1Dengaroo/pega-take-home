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
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSectionView("search");
    setSearchQuery(query);
    setCollapsed(false);
  };

  const handleOpenSectionView = (type: SectionViewType) => {
    setSectionView(type);
    setCollapsed(false);
  };

  const handleCloseSectionView = () => {
    setSectionView(null);
  };

  const handleLinkClick = () => {
    setSectionView(null);
    setCollapsed(true);
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
          <SectionView
            type={sectionView}
            initialSearchQuery={searchQuery}
            onClose={handleCloseSectionView}
          />
        ) : (
          <>
            <SidebarHeader title="PEGA" subtitle="Demo" />
            <div className="px-sidebar-search-padding mb-4">
              <Search onSearch={handleSearch} />
            </div>
            <Separator className="my-2" />

            <nav className="overflow-y-auto py-1">
              {navItems.map((item) => (
                <NavItemComponent
                  key={item.label}
                  item={item}
                  onOpenSection={handleOpenSectionView}
                  onLinkClick={handleLinkClick}
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
                  onLinkClick={handleLinkClick}
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
