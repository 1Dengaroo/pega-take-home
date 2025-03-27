import { FC } from 'react';
import { ChevronLeft } from 'lucide-react';
import SearchView from './SearchView';
import NotificationsView from './NotificationView';
import RecentsView from './RecentsView';
import { useSidebar } from '../../../hooks/useSidebar';

interface SectionViewProps {
  initialSearchQuery?: string;
}

const SectionView: FC<SectionViewProps> = ({ initialSearchQuery }) => {
  const { handleCloseSectionView, sectionView: type } = useSidebar();
  if (!type) return null;
  return (
    <div className="text-primary-foreground px-sidebar-content-padding flex h-full flex-col">
      <div className="h-sidebar-header-height relative flex items-center">
        <button
          onClick={handleCloseSectionView}
          className="absolute left-0 flex cursor-pointer items-center justify-center"
        >
          <ChevronLeft size={20} />
        </button>

        <span className="absolute left-1/2 -translate-x-1/2 transform font-bold">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>

        <button
          onClick={handleCloseSectionView}
          className="text-muted-foreground hover:text-primary-foreground absolute right-0 cursor-pointer underline"
        >
          See all
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-1">
        {type === 'search' && <SearchView initialSearchQuery={initialSearchQuery} />}

        {type === 'notifications' && <NotificationsView />}

        {type === 'recents' && <RecentsView />}
      </div>
    </div>
  );
};

export default SectionView;
