type SidebarHeaderProps = {
  title: string;
  subtitle?: string;
};

const SidebarHeader = ({ title, subtitle }: SidebarHeaderProps) => {
  return (
    <div className="flex items-center">
      <div className="h-sidebar-header-height w-sidebar flex flex-shrink-0 items-center justify-center">
        <span className="font-bold">{title}</span>
      </div>

      <span className="text-ellipsis whitespace-nowrap">{subtitle}</span>
    </div>
  );
};

export default SidebarHeader;
