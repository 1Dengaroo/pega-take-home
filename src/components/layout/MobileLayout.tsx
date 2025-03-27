import { FC, ReactNode, useMemo } from 'react';
import MobileBottomNav from './MobileBottomNav';
import MobileSidebar from './MobileSidebar';
import { navItems } from '../../constants/nav';

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
      sidebarNavItems: showMore ? navItems.slice(displayCount) : []
    };
  }, []);

  return (
    <div className="bg-background min-h-svh overscroll-none antialiased">
      <main className="relative flex min-h-svh flex-col px-4 pt-4 pb-16">{children}</main>

      <MobileBottomNav navItems={bottomNavItems} />
      <MobileSidebar navItems={sidebarNavItems} />
    </div>
  );
};

export default MobileLayout;
