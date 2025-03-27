import { FC } from "react";
import { NavItem } from "../../constants/nav";
import NavItemComponent from "../sidebar/NavItem";
import Profile from "../sidebar/Profile";
import SectionView from "../sidebar/SectionView/SectionView";
import Separator from "../ui/Separator";
import { footerNavItems } from "../../constants/nav";
import { useSidebar } from "../../context/SidebarContext";

interface MobileSidebarProps {
  navItems: NavItem[];
}

const MobileSidebar: FC<MobileSidebarProps> = ({ navItems }) => {
  const { sectionView, handleCloseSidebar, open } = useSidebar();

  return (
    <div
      className={`
        fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity
        ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      onClick={handleCloseSidebar}
    >
      <div
        className={`
          absolute top-0 right-0 w-mobile-sidebar-width h-full bg-primary text-primary-foreground
          transform transition-transform duration-300 overflow-hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {sectionView ? (
          <SectionView />
        ) : (
          <>
            <nav className="overflow-y-auto my-2">
              {/* Only render remaining nav items if there are any */}
              {navItems.length > 0 && (
                <>
                  {navItems.map((item, index) => (
                    <NavItemComponent
                      key={`sidebar-${item.label}-${index}`}
                      item={item}
                    />
                  ))}

                  <Separator className="my-4" />
                </>
              )}

              {/* Always render footer nav items */}
              {footerNavItems.map((item, index) => (
                <NavItemComponent
                  key={`footer-${item.label}-${index}`}
                  item={item}
                />
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
