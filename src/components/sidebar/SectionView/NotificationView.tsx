import { FC, useState } from "react";
import { notificationItems } from "../../../constants/sample";
import { Bookmark } from "lucide-react";

const NotificationsView: FC = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <div className="py-2">
      {notificationItems.map((item, index) => (
        <div
          key={index}
          className={`
            py-3 px-2 cursor-pointer transition-colors
            hover:text-white focus:outline-none h-auto
            ${
              selectedItem === index
                ? "text-selected"
                : "text-primary-foreground"
            }
          `}
          onClick={() => setSelectedItem(index)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSelectedItem(index);
            }
          }}
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0 overflow-hidden">
              <img
                src={item.avatar}
                alt=""
                className="w-sidebar-avatar-dimensions h-sidebar-avatar-dimensions object-cover"
              />
            </div>
            <div className="flex-1 space-y-1.5 overflow-hidden">
              <div className="font-medium text-sm">{item.title}</div>
              <div className="text-sm">{item.subtitle}</div>
              <div className="text-xs text-muted-foreground font-medium">
                {item.timestamp} • {item.type}
              </div>
            </div>
            <button className="focus:outline-none focus:ring-2 focus:ring-selected rounded p-1 flex-shrink-0">
              <Bookmark
                size={16}
                fill={item.bookmarked ? "currentColor" : "none"}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationsView;
