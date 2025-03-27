import { FC } from "react";
import { NavItem, SectionViewType } from "../../constants/nav";
import NavItemComponent from "../sidebar/NavItem";
import Profile from "../sidebar/Profile";
import SectionView from "../sidebar/SectionView/SectionView";
import Separator from "../ui/Separator";
import { footerNavItems } from "../../constants/nav";

interface MobileSidebarProps {
  navItems: NavItem[];
  isOpen: boolean;
  sectionView: SectionViewType | null;

  onClose: () => void;
  onOpenSectionView: (type: SectionViewType) => void;
  onCloseSectionView: () => void;
}

const MobileSidebar: FC<MobileSidebarProps> = ({
  navItems,
  isOpen,
  onClose,
  sectionView,
  onOpenSectionView,
  onCloseSectionView,
}) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div
      className={`
        fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      onClick={onClose}
    >
      <div
        className={`
          absolute top-0 right-0 w-mobile-sidebar-width h-full bg-primary text-primary-foreground
          transform transition-transform duration-300 overflow-hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {sectionView ? (
          <SectionView type={sectionView} onClose={onCloseSectionView} />
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
                      onOpenSection={onOpenSectionView}
                      onLinkClick={handleLinkClick}
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
                  onOpenSection={onOpenSectionView}
                  onLinkClick={handleLinkClick}
                />
              ))}
            </nav>

            <div className="absolute bottom-0 left-0 right-0 border-t border-white/10">
              <Profile />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileSidebar;
