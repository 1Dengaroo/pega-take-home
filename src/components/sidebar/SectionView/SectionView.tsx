import { FC } from "react";
import { ChevronLeft } from "lucide-react";
import { SectionViewType } from "../../../constants/nav";
import {
  notificationItems,
  recentItems,
  searchItems,
} from "../../../constants/sample";

interface SectionViewProps {
  type: SectionViewType;
  onClose: () => void;
}

const SectionView: FC<SectionViewProps> = ({ type, onClose }) => {
  return (
    <div className="h-full flex flex-col bg-primary text-primary-foreground">
      <div className="flex items-center h-16">
        <button
          onClick={onClose}
          className="w-sidebar flex justify-center items-center flex-shrink-0"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="font-bold">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
        <div className="ml-auto mr-4">
          <button
            onClick={onClose}
            className="text-primary-foreground/70 hover:text-primary-foreground underline"
          >
            See all
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {type === "search" && (
          <>
            <div className="px-4 py-2">
              <div className="relative flex items-center mb-4">
                <div className="absolute left-3">
                  <ChevronLeft size={16} className="hidden" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-2 pl-10 bg-white/10 rounded-full
                    focus:outline-none focus:ring-1 focus:ring-secondary/50
                    text-sm text-primary-foreground placeholder:text-muted-foreground
                    transition-all duration-300"
                />
              </div>
              {searchItems.map((item) => (
                <div
                  key={item.id}
                  className="py-3 cursor-pointer hover:bg-white/5"
                >
                  <div className="flex justify-between">
                    <div className="font-medium">{item.title}</div>
                    {item.bookmarked !== undefined && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className={`${
                          item.bookmarked
                            ? "text-secondary"
                            : "text-primary-foreground/50"
                        }`}
                      >
                        <span className="text-xl">⭐</span>
                      </button>
                    )}
                  </div>
                  <div className="text-xs text-primary-foreground/50 mt-1">
                    {item.type}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {type === "notifications" && (
          <div className="py-2">
            {notificationItems.map((item) => (
              <div
                key={item.id}
                className="px-4 py-3 cursor-pointer hover:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0 overflow-hidden">
                    <img
                      src={item.avatar}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-primary-foreground/70 mt-1">
                      {item.subtitle}
                    </div>
                    <div className="text-xs text-primary-foreground/50 mt-1">
                      {item.timestamp} • {item.type}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {type === "recents" && (
          <>
            <div className="py-2">
              <div className="px-4 py-2 font-medium text-sm text-primary-foreground/80">
                Bookmarks
              </div>
              {recentItems.bookmarks.map((item) => (
                <div
                  key={item.id}
                  className="px-4 py-2 cursor-pointer hover:bg-white/5 flex justify-between"
                >
                  <div>
                    <div className="text-sm">{item.title}</div>
                    <div className="text-xs text-primary-foreground/50">
                      {item.type}
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="text-white"
                  >
                    <span className="text-xl">⭐</span>
                  </button>
                </div>
              ))}
            </div>

            <div className="py-2 border-t border-white/10">
              <div className="px-4 py-2 font-medium text-sm text-primary-foreground/80">
                Recently viewed items
              </div>
              {recentItems.recentlyViewed.map((item) => (
                <div
                  key={item.id}
                  className="px-4 py-2 cursor-pointer hover:bg-white/5 flex justify-between"
                >
                  <div>
                    <div className="text-sm">{item.title}</div>
                    <div className="text-xs text-primary-foreground/50">
                      {item.type}
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className={`${
                      item.bookmarked
                        ? "text-white"
                        : "text-primary-foreground/30"
                    }`}
                  >
                    <span className="text-xl">⭐</span>
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SectionView;
