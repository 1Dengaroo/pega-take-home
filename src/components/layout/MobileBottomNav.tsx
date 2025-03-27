import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { MoreHorizontal, Search } from 'lucide-react';
import { NavItem } from '../../constants/nav';
import { useSidebar } from '../../hooks/useSidebar';

interface MobileBottomNavProps {
  navItems: NavItem[];
}

const MobileBottomNav: FC<MobileBottomNavProps> = ({ navItems }) => {
  const { handleOpenSidebar, handleSearch } = useSidebar();
  const showMoreButton = navItems.length >= 3;

  return (
    <div className="bg-primary border-border h-mobile-navbar-height fixed right-0 bottom-0 left-0 z-50 border-t">
      <div className="max-w-mobile-navbar-container-width mx-auto flex h-full items-center justify-around">
        {navItems.map((item, index) => {
          if (item.type === 'link') {
            return (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex w-full flex-col items-center justify-center pt-1 text-xs hover:text-white ${isActive ? 'text-selected' : 'text-muted-foreground'} `
                }
              >
                {item.icon && (
                  <div className="relative">
                    <item.icon />
                    {item.notificationCount && (
                      <span className="bg-destructive text-destructive-foreground absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-xs">
                        {item.notificationCount}
                      </span>
                    )}
                  </div>
                )}
                <span className="mt-1">{item.label}</span>
              </NavLink>
            );
          } else if (item.type === 'dropdown') {
            // Not entirely sure how to handle dropdowns in the mobile nav
            const firstNestedPath = item.nested[0].type === 'link' ? item.nested[0].path : '#';

            return (
              <NavLink
                key={index}
                to={firstNestedPath}
                className={({ isActive }) =>
                  `flex w-full flex-col items-center justify-center pt-1 text-xs hover:text-white ${isActive ? 'text-selected' : 'text-muted-foreground'} `
                }
              >
                {item.icon && (
                  <div className="relative">
                    <item.icon />
                    {item.notificationCount && (
                      <span className="bg-destructive text-destructive-foreground absolute -top-2.5 -right-2.5 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-xs">
                        {item.notificationCount}
                      </span>
                    )}
                  </div>
                )}
                <span className="mt-1">{item.label}</span>
              </NavLink>
            );
          }

          return null;
        })}

        <button
          onClick={() => handleSearch('')}
          className="text-muted-foreground flex w-full cursor-pointer flex-col items-center justify-center pt-1 text-xs hover:text-white"
        >
          <Search />
          <span className="mt-1">Search</span>
        </button>

        {showMoreButton && (
          <button
            onClick={handleOpenSidebar}
            className="text-muted-foreground flex w-full cursor-pointer flex-col items-center justify-center pt-1 text-xs hover:text-white"
          >
            <MoreHorizontal />
            <span className="mt-1">More</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MobileBottomNav;
