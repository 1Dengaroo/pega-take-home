import { FC } from "react";
import { NavLink } from "react-router-dom";
import { MoreHorizontal, Search } from "lucide-react";
import { NavItem } from "../../constants/nav";

interface MobileBottomNavProps {
  navItems: NavItem[];
  onMoreClick: () => void;
  onSearchButtonClick: () => void;
}

const MobileBottomNav: FC<MobileBottomNavProps> = ({
  navItems,
  onMoreClick,
  onSearchButtonClick,
}) => {
  const showMoreButton = navItems.length >= 3;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary border-t border-border h-mobile-navbar-height z-50">
      <div className="mx-auto max-w-mobile-navbar-container-width flex items-center justify-around h-full">
        {navItems.map((item, index) => {
          if (item.type === "link") {
            return (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) => `
                flex flex-col items-center justify-center w-full text-xs pt-1 hover:text-white
                ${isActive ? "text-selected" : "text-muted-foreground"}
              `}
              >
                {item.icon && (
                  <div className="relative">
                    <item.icon />
                    {item.notificationCount && (
                      <span className="absolute -top-1.5 -right-1.5 px-1 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center min-w-5 h-5">
                        {item.notificationCount}
                      </span>
                    )}
                  </div>
                )}
                <span className="mt-1">{item.label}</span>
              </NavLink>
            );
          } else if (item.type === "dropdown") {
            // Not entirely sure how to handle dropdowns in the mobile nav
            const firstNestedPath =
              item.nested[0].type === "link" ? item.nested[0].path : "#";

            return (
              <NavLink
                key={index}
                to={firstNestedPath}
                className={({ isActive }) => `
                flex flex-col items-center justify-center w-full text-xs pt-1 hover:text-white
                ${isActive ? "text-selected" : "text-muted-foreground"}
              `}
              >
                {item.icon && (
                  <div className="relative">
                    <item.icon />
                    {item.notificationCount && (
                      <span className="absolute -top-2.5 -right-2.5 px-1 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center min-w-5 h-5">
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
          onClick={onSearchButtonClick}
          className="flex flex-col items-center justify-center w-full text-xs pt-1 text-muted-foreground hover:text-white cursor-pointer"
        >
          <Search />
          <span className="mt-1">Search</span>
        </button>

        {showMoreButton && (
          <button
            onClick={onMoreClick}
            className="flex flex-col items-center justify-center w-full text-xs pt-1 text-muted-foreground hover:text-white cursor-pointer"
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
