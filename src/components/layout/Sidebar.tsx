import { FC } from 'react';
import NavItemComponent from '../sidebar/NavItem';
import Search from '../sidebar/Search';
import { navItems, footerNavItems } from '../../constants/nav';
import SidebarHeader from '../sidebar/Header';
import Separator from '../ui/Separator';
import Profile from '../sidebar/Profile';
import SectionView from '../sidebar/SectionView/SectionView';
import { useSidebar } from '../../hooks/useSidebar';

const Sidebar: FC = () => {
  const { open, handleOpenSidebar, handleCloseSidebar, sectionView, searchQuery } = useSidebar();

  return (
    <aside
      className={` ${!open ? 'w-sidebar' : 'w-sidebar-expanded'} bg-primary text-primary-foreground flex h-screen flex-col overflow-hidden transition-all duration-300`}
      onMouseEnter={() => handleOpenSidebar()}
      onMouseLeave={() => handleCloseSidebar()}
    >
      {sectionView ? (
        <SectionView initialSearchQuery={searchQuery} />
      ) : (
        <>
          <SidebarHeader title="PEGA" subtitle="Demo" />
          <div className="px-sidebar-search-padding mb-4">
            <Search />
          </div>
          <Separator className="my-2" />

          <nav className="overflow-y-auto py-1">
            {navItems.map((item) => (
              <NavItemComponent key={item.label} item={item} />
            ))}
          </nav>

          <nav className="mt-auto">
            <Separator className="my-2" />

            {footerNavItems.map((item) => (
              <NavItemComponent key={item.label} item={item} />
            ))}

            <div className="my-2.5">
              <Profile />
            </div>
          </nav>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
