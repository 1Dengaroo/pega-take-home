import { FC } from 'react';
import { NavItem } from '../../constants/nav';
import NavItemComponent from '../sidebar/NavItem';
import Profile from '../sidebar/Profile';
import SectionView from '../sidebar/SectionView/SectionView';
import Separator from '../ui/Separator';
import { footerNavItems } from '../../constants/nav';
import { useSidebar } from '../../hooks/useSidebar';

interface MobileSidebarProps {
  navItems: NavItem[];
}

const MobileSidebar: FC<MobileSidebarProps> = ({ navItems }) => {
  const { sectionView, handleCloseSidebar, open } = useSidebar();

  return (
    <div
      className={`bg-opacity-50 fixed inset-0 z-50 bg-black transition-opacity ${open ? 'opacity-100' : 'pointer-events-none opacity-0'} `}
      onClick={handleCloseSidebar}
    >
      <div
        className={`w-mobile-sidebar-width bg-primary text-primary-foreground absolute top-0 right-0 h-full transform overflow-hidden transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} `}
        onClick={(e) => e.stopPropagation()}
      >
        {sectionView ? (
          <SectionView />
        ) : (
          <>
            <nav className="my-2 overflow-y-auto">
              {/* Only render remaining nav items if there are any */}
              {navItems.length > 0 && (
                <>
                  {navItems.map((item, index) => (
                    <NavItemComponent key={`sidebar-${item.label}-${index}`} item={item} />
                  ))}

                  <Separator className="my-4" />
                </>
              )}

              {/* Always render footer nav items */}
              {footerNavItems.map((item, index) => (
                <NavItemComponent key={`footer-${item.label}-${index}`} item={item} />
              ))}

              <div className="my-1.5">
                <Profile />
              </div>
            </nav>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileSidebar;
