import { FC, useState } from 'react';
import { searchItems } from '../../../constants/sample';
import Search from '../Search';
import { Bookmark } from 'lucide-react';

interface SearchViewProps {
  initialSearchQuery?: string;
}

const SearchView: FC<SearchViewProps> = ({ initialSearchQuery }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <div className="py-2">
      <div className="mb-4">
        <Search initialSearchQuery={initialSearchQuery} />
      </div>
      {searchItems.map((item, index) => (
        <div
          key={index}
          className={`cursor-pointer space-y-1.5 px-2 py-3 transition-colors hover:text-white focus:outline-none ${
            selectedItem === index ? 'text-selected' : 'text-primary-foreground'
          } ${item.title.length > 30 ? 'h-auto' : ''} `}
          onClick={() => setSelectedItem(index)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setSelectedItem(index);
            }
          }}
        >
          <div className="flex items-start justify-between">
            <div className="overflow-hidden">
              <div className="text-sm font-medium">{item.title}</div>
              <div className="text-muted-foreground mt-1 text-xs">{item.type}</div>
            </div>
            <button className="focus:ring-selected rounded p-1 focus:ring-2 focus:outline-none">
              <Bookmark size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchView;
