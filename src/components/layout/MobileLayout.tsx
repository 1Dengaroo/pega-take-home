import { FC, ReactNode, useState, useMemo } from "react";
import MobileBottomNav from "./MobileBottomNav";
import MobileSidebar from "./MobileSidebar";
import { SectionViewType, navItems } from "../../constants/nav";

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout: FC<MobileLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sectionView, setSectionView] = useState<SectionViewType | null>(null);

  const { bottomNavItems, sidebarNavItems } = useMemo(() => {
    const totalItems = navItems.length;
    const showMore = totalItems >= 6;
    const displayCount = showMore ? 3 : Math.min(totalItems, 4);

    return {
      bottomNavItems: navItems.slice(0, displayCount),
      sidebarNavItems: showMore ? navItems.slice(displayCount) : [],
    };
  }, []);

  const handleMoreClick = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setSectionView(null);
  };

  const handleSearch = () => {
    setSectionView("search");
    setIsSidebarOpen(true);
  };

  const handleOpenSectionView = (type: SectionViewType) => {
    setSectionView(type);
    setIsSidebarOpen(true);
  };

  const handleCloseSectionView = () => {
    setSectionView(null);
  };

  return (
    <div className="min-h-svh overscroll-none antialiased bg-background">
      <main className="min-h-svh flex flex-col relative pb-16 px-4 pt-4">
        {children}
      </main>

      <MobileBottomNav
        navItems={bottomNavItems}
        onMoreClick={handleMoreClick}
        onSearchButtonClick={handleSearch}
      />

      <MobileSidebar
        navItems={sidebarNavItems}
        isOpen={isSidebarOpen}
        sectionView={sectionView}
        onClose={handleCloseSidebar}
        onOpenSectionView={handleOpenSectionView}
        onCloseSectionView={handleCloseSectionView}
      />
    </div>
  );
};

export default MobileLayout;
