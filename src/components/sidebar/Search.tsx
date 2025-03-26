import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

type SearchProps = {
  onSearch: (query: string) => void;
};

const Search = ({ onSearch }: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="px-5 mb-4">
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
          text-sm text-primary-foreground placeholder:text-muted-foreground
          transition-all duration-300
        `}
        />
      </div>
    </div>
  );
};

export default Search;
