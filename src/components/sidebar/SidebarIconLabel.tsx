import { FC, ReactNode } from "react";

interface SidebarIconLabelProps {
  icon?: ReactNode;
  label: string;
  notificationCount?: string;
}

const SidebarIconLabel: FC<SidebarIconLabelProps> = ({
  icon,
  label,
  notificationCount,
}) => {
  return (
    <>
      <div className="w-sidebar flex justify-center items-center flex-shrink-0">
        <div className="relative">
          {icon}
          {notificationCount && (
            <span className="absolute -top-2.5 -right-2.5 px-1 py-0.5 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
              {notificationCount}
            </span>
          )}
        </div>
      </div>

      <span className="whitespace-nowrap text-ellipsis font-semibold">
        {label}
      </span>
    </>
  );
};

export default SidebarIconLabel;
