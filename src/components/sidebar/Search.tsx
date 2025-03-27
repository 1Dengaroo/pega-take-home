import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

type SearchProps = {
  initialSearchQuery?: string;
  onSearch: (query: string) => void;
};

const Search = ({ initialSearchQuery = "", onSearch }: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

  return (
    <div className="relative flex items-center">
      <div className="absolute left-3">
        <SearchIcon size={16} />
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (searchQuery.trim() === "") return;
            onSearch(searchQuery);
          }
        }}
        className={`
          w-full py-2 pl-10 bg-white/10 rounded-full
          focus:outline-none focus:ring-1 focus:ring-secondary/50
          text-sm text-primary-foreground placeholder:text-muted-foreground placeholder:italic
          transition-all duration-300 focus:bg-black/20 h-sidebar-search-height
        `}
      />
    </div>
  );
};

export default Search;
