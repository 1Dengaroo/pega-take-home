import { FC, useState } from "react";
import { recentItems } from "../../../constants/sample";
import { Bookmark } from "lucide-react";

const RecentsView: FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <div className="py-2">
        <div className="py-2 font-semibold text-sm text-white">Bookmarks</div>
        {recentItems.bookmarks.map((item, index) => (
          <div
            key={index}
            className={`
              py-2 px-2 cursor-pointer flex justify-between items-start transition-colors
              hover:text-white focus:outline-none
              ${
                selected === item.id
                  ? "text-selected"
                  : "text-primary-foreground"
              }
              ${item.title.length > 30 ? "h-auto" : ""}
            `}
            onClick={() => setSelected(item.id)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSelected(item.id);
              }
            }}
          >
            <div className="overflow-hidden">
              <div className="text-sm font-medium">{item.title}</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">
                {item.type}
              </div>
            </div>
            <button
              className="focus:outline-none focus:ring-2 focus:ring-selected rounded p-1 flex-shrink-0"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Bookmark size={16} fill="currentColor" />
            </button>
          </div>
        ))}
      </div>

      <div className="py-2 border-t border-white/10">
        <div className="py-2 font-semibold text-sm text-white">
          Recently viewed items
        </div>
        {recentItems.recentlyViewed.map((item, index) => (
          <div
            key={index}
            className={`
              py-2 px-2 cursor-pointer flex justify-between items-start transition-colors
              hover:text-white focus:outline-none
              ${
                selected === item.id
                  ? "text-selected"
                  : "text-primary-foreground"
              }
              ${item.title.length > 30 ? "h-auto" : ""}
            `}
            onClick={() => setSelected(item.id)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSelected(item.id);
              }
            }}
          >
            <div className="overflow-hidden">
              <div className="text-sm font-medium">{item.title}</div>
              <div className="text-xs text-muted-foreground font-medium mt-1">
                {item.type}
              </div>
            </div>
            <button
              className="focus:outline-none focus:ring-2 focus:ring-selected rounded p-1 flex-shrink-0"
              onClick={(e) => {
                e.stopPropagation();
                // Bookmark toggle logic would go here
              }}
            >
              <Bookmark
                size={16}
                fill={item.bookmarked ? "currentColor" : "none"}
              />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecentsView;
