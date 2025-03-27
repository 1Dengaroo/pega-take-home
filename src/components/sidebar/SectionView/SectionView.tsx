import { FC } from "react";
import { ChevronLeft } from "lucide-react";
import SearchView from "./SearchView";
import NotificationsView from "./NotificationView";
import RecentsView from "./RecentsView";
import { useSidebar } from "../../../context/SidebarContext";

interface SectionViewProps {
  initialSearchQuery?: string;
}

const SectionView: FC<SectionViewProps> = ({ initialSearchQuery }) => {
  const { handleCloseSectionView, sectionView: type } = useSidebar();
  if (!type) return null;
  return (
    <div className="h-full flex flex-col text-primary-foreground px-sidebar-content-padding">
      <div className="relative flex items-center h-sidebar-header-height">
        <button
          onClick={handleCloseSectionView}
          className="absolute left-0 flex justify-center items-center cursor-pointer"
        >
          <ChevronLeft size={20} />
        </button>

        <span className="absolute left-1/2 transform -translate-x-1/2 font-bold">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>

        <button
          onClick={handleCloseSectionView}
          className="cursor-pointer absolute right-0 text-muted-foreground hover:text-primary-foreground underline"
        >
          See all
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-1">
        {type === "search" && (
          <SearchView initialSearchQuery={initialSearchQuery} />
        )}

        {type === "notifications" && <NotificationsView />}

        {type === "recents" && <RecentsView />}
      </div>
    </div>
  );
};

export default SectionView;
