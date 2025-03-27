import { FC, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from '../../constants/nav';
import SidebarIconLabel from './SidebarIconLabel';
import { useSidebar } from '../../hooks/useSidebar';

interface NavItemComponentProps {
  item: NavItem;
}

const NavItemComponent: FC<NavItemComponentProps> = ({ item }) => {
  const { open, handleOpenSectionView, handleLinkClick } = useSidebar();
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown when sidebar collapses
  useEffect(() => {
    if (!open && isOpen) {
      setIsOpen(false);
    }
  }, [open, isOpen]);

  if (item.type === 'link' && item.path) {
    return (
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `h-sidebar-item-height focus:ring-selected flex items-center hover:text-white focus:ring-2 focus:outline-none ${
            isActive ? 'text-selected' : 'text-primary-foreground'
          }`
        }
        onClick={handleLinkClick}
      >
        <SidebarIconLabel
          icon={item.icon && <item.icon />}
          label={item.label}
          notificationCount={item.notificationCount}
        />
      </NavLink>
    );
  }

  if (item.type === 'dropdown' && item.nested) {
    return (
      <div className="flex flex-col">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`h-sidebar-item-height focus:ring-selected flex cursor-pointer items-center hover:text-white focus:ring-2 focus:outline-none ${
            isOpen ? 'text-selected' : 'text-primary-foreground'
          }`}
        >
          <SidebarIconLabel
            icon={item.icon && <item.icon />}
            label={item.label}
            notificationCount={item.notificationCount}
          />
        </button>

        <div
          className={`overflow-hidden bg-black/20 transition-[max-height] duration-300 ease-in-out ${isOpen ? 'max-h-96 overflow-y-auto' : 'max-h-0'} `}
        >
          {item.nested.map((nestedItem, index) => (
            <NavItemComponent key={`${nestedItem.label}-${index}`} item={nestedItem} />
          ))}
        </div>
      </div>
    );
  }

  if (item.type === 'sectionToggle') {
    return (
      <button
        onClick={() => handleOpenSectionView(item.secondaryViewType)}
        className="h-sidebar-item-height focus:ring-selected flex w-full cursor-pointer items-center hover:text-white focus:ring-2 focus:outline-none"
      >
        <SidebarIconLabel
          icon={item.icon && <item.icon />}
          label={item.label}
          notificationCount={item.notificationCount}
        />
      </button>
    );
  }

  return null;
};

export default NavItemComponent;
