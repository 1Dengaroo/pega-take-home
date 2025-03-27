import { FC, ReactNode } from 'react';

interface SidebarIconLabelProps {
  icon?: ReactNode;
  label: string;
  notificationCount?: string;
}

const SidebarIconLabel: FC<SidebarIconLabelProps> = ({ icon, label, notificationCount }) => {
  return (
    <>
      <div className="w-sidebar flex flex-shrink-0 items-center justify-center">
        <div className="relative">
          {icon}
          {notificationCount && (
            <span className="bg-destructive text-destructive-foreground absolute -top-2.5 -right-2.5 flex items-center justify-center rounded-full px-1 text-xs">
              {notificationCount}
            </span>
          )}
        </div>
      </div>

      <span className="font-semibold text-ellipsis whitespace-nowrap">{label}</span>
    </>
  );
};

export default SidebarIconLabel;
