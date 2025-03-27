import { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { useSidebar } from '../../hooks/useSidebar';

type SearchProps = {
  initialSearchQuery?: string;
};

const Search = ({ initialSearchQuery = '' }: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const { handleSearch } = useSidebar();

  const processSearch = (query: string) => {
    if (query.trim() === '') return;
    handleSearch(query);
  };

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
          if (e.key === 'Enter') {
            processSearch(searchQuery);
          }
        }}
        className={`focus:ring-secondary/50 text-primary-foreground placeholder:text-muted-foreground h-sidebar-search-height w-full rounded-full bg-white/10 py-2 pl-10 text-sm transition-all duration-300 placeholder:italic focus:bg-black/20 focus:ring-1 focus:outline-none`}
      />
    </div>
  );
};

export default Search;
