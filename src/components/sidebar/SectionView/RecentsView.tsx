import { FC, useState } from 'react';
import { recentItems } from '../../../constants/sample';
import { Bookmark } from 'lucide-react';

const RecentsView: FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <div className="py-2">
        <div className="py-2 text-sm font-semibold text-white">Bookmarks</div>
        {recentItems.bookmarks.map((item, index) => (
          <div
            key={index}
            className={`flex cursor-pointer items-start justify-between px-2 py-2 transition-colors hover:text-white focus:outline-none ${
              selected === item.id ? 'text-selected' : 'text-primary-foreground'
            } ${item.title.length > 30 ? 'h-auto' : ''} `}
            onClick={() => setSelected(item.id)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setSelected(item.id);
              }
            }}
          >
            <div className="overflow-hidden">
              <div className="text-sm font-medium">{item.title}</div>
              <div className="text-muted-foreground mt-1 text-xs font-medium">{item.type}</div>
            </div>
            <button className="focus:ring-selected flex-shrink-0 rounded p-1 focus:ring-2 focus:outline-none">
              <Bookmark size={16} fill="currentColor" />
            </button>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 py-2">
        <div className="py-2 text-sm font-semibold text-white">Recently viewed items</div>
        {recentItems.recentlyViewed.map((item, index) => (
          <div
            key={index}
            className={`flex cursor-pointer items-start justify-between px-2 py-2 transition-colors hover:text-white focus:outline-none ${
              selected === item.id ? 'text-selected' : 'text-primary-foreground'
            } ${item.title.length > 30 ? 'h-auto' : ''} `}
            onClick={() => setSelected(item.id)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setSelected(item.id);
              }
            }}
          >
            <div className="overflow-hidden">
              <div className="text-sm font-medium">{item.title}</div>
              <div className="text-muted-foreground mt-1 text-xs font-medium">{item.type}</div>
            </div>
            <button className="focus:ring-selected flex-shrink-0 rounded p-1 focus:ring-2 focus:outline-none">
              <Bookmark size={16} fill={item.bookmarked ? 'currentColor' : 'none'} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecentsView;
