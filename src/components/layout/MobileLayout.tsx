import { FC, ReactNode, useMemo } from "react";
import MobileBottomNav from "./MobileBottomNav";
import MobileSidebar from "./MobileSidebar";
import { navItems } from "../../constants/nav";
import { SidebarProvider } from "../../context/SidebarContext";

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout: FC<MobileLayoutProps> = ({ children }) => {
  const { bottomNavItems, sidebarNavItems } = useMemo(() => {
    const totalItems = navItems.length;
    const showMore = totalItems >= 6;
    const displayCount = showMore ? 3 : Math.min(totalItems, 4);

    return {
      bottomNavItems: navItems.slice(0, displayCount),
      sidebarNavItems: showMore ? navItems.slice(displayCount) : [],
    };
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-svh overscroll-none antialiased bg-background">
        <main className="min-h-svh flex flex-col relative pb-16 px-4 pt-4">
          {children}
        </main>

        <MobileBottomNav navItems={bottomNavItems} />
        <MobileSidebar navItems={sidebarNavItems} />
      </div>
    </SidebarProvider>
  );
};

export default MobileLayout;
