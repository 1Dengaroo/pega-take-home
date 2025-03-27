type SidebarHeaderProps = {
  title: string;
  subtitle?: string;
};

const SidebarHeader = ({ title, subtitle }: SidebarHeaderProps) => {
  return (
    <div className="flex items-center">
      <div className="h-sidebar-header-height w-sidebar flex justify-center items-center flex-shrink-0">
        <span className="font-bold">{title}</span>
      </div>

      <span className="whitespace-nowrap text-ellipsis">{subtitle}</span>
    </div>
  );
};

export default SidebarHeader;
