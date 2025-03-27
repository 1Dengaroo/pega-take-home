import { createContext, useState, ReactNode, useContext, useMemo } from 'react';
import { SectionViewType } from '../constants/nav';

interface SidebarContextType {
  open: boolean;
  sectionView: SectionViewType | null;
  searchQuery: string;

  handleSearch: (query: string) => void;
  handleOpenSectionView: (type: SectionViewType) => void;
  handleCloseSectionView: () => void;
  handleLinkClick: () => void;
  handleOpenSidebar: () => void;
  handleCloseSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType>({
  open: true,
  sectionView: null,
  searchQuery: '',

  handleSearch: () => {},
  handleOpenSectionView: () => {},
  handleCloseSectionView: () => {},
  handleLinkClick: () => {},
  handleOpenSidebar: () => {},
  handleCloseSidebar: () => {}
});

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [sectionView, setSectionView] = useState<SectionViewType | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const contextValue = useMemo(() => {
    const handleSearch = (query: string) => {
      setSectionView('search');
      setSearchQuery(query);
      setOpen(true);
    };

    const handleOpenSectionView = (type: SectionViewType) => {
      setSectionView(type);
      setOpen(true);
    };

    const handleCloseSectionView = () => {
      setSectionView(null);
    };

    const handleLinkClick = () => {
      setSectionView(null);
      setOpen(false);
    };

    const handleOpenSidebar = () => {
      setOpen(true);
    };

    const handleCloseSidebar = () => {
      setOpen(false);
      setSectionView(null);
    };

    return {
      open,
      sectionView,
      searchQuery,

      handleSearch,
      handleOpenSectionView,
      handleCloseSectionView,
      handleLinkClick,
      handleOpenSidebar,
      handleCloseSidebar
    };
  }, [open, sectionView, searchQuery]);

  return <SidebarContext.Provider value={contextValue}>{children}</SidebarContext.Provider>;
};

export const useSidebar = () => useContext(SidebarContext);

export default SidebarContext;
