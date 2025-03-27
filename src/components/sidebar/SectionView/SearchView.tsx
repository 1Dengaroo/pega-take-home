import { FC, useState } from "react";
import { searchItems } from "../../../constants/sample";
import Search from "../Search";
import { Bookmark } from "lucide-react";

interface SearchViewProps {
  initialSearchQuery?: string;
}

const SearchView: FC<SearchViewProps> = ({ initialSearchQuery }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <div className="py-2">
      <div className="mb-4">
        <Search
          initialSearchQuery={initialSearchQuery}
          onSearch={handleSearch}
        />
      </div>
      {searchItems.map((item, index) => (
        <div
          key={index}
          className={`
            py-3 px-2 cursor-pointer space-y-1.5 transition-colors
            hover:text-white focus:outline-none 
            ${
              selectedItem === index
                ? "text-selected"
                : "text-primary-foreground"
            }
            ${item.title.length > 30 ? "h-auto" : ""}
          `}
          onClick={() => setSelectedItem(index)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSelectedItem(index);
            }
          }}
        >
          <div className="flex justify-between items-start">
            <div className="overflow-hidden">
              <div className="font-medium text-sm">{item.title}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {item.type}
              </div>
            </div>
            <button className="focus:outline-none focus:ring-2 focus:ring-selected rounded p-1">
              <Bookmark size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchView;
