import { FC, useState } from 'react';
import { notificationItems } from '../../../constants/sample';
import { Bookmark } from 'lucide-react';

const NotificationsView: FC = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <div className="py-2">
      {notificationItems.map((item, index) => (
        <div
          key={index}
          className={`h-auto cursor-pointer px-2 py-3 transition-colors hover:text-white focus:outline-none ${
            selectedItem === index ? 'text-selected' : 'text-primary-foreground'
          } `}
          onClick={() => setSelectedItem(index)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setSelectedItem(index);
            }
          }}
        >
          <div className="flex items-start gap-3">
            <div className="w-sidebar-avatar-dimensions h-sidebar-avatar-dimensions flex-shrink-0 overflow-hidden rounded-full bg-white">
              <img
                src={item.avatar}
                alt=""
                className="w-sidebar-avatar-dimensions h-sidebar-avatar-dimensions object-cover p-1"
              />
            </div>
            <div className="flex-1 space-y-1.5 overflow-hidden">
              <div className="text-sm font-medium">{item.title}</div>
              <div className="text-sm">{item.subtitle}</div>
              <div className="text-muted-foreground text-xs font-medium">
                {item.timestamp} • {item.type}
              </div>
            </div>
            <button className="focus:ring-selected flex-shrink-0 rounded p-1 focus:ring-2 focus:outline-none">
              <Bookmark size={16} fill={item.bookmarked ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationsView;
