import { createContext } from "react";

interface SidebarContextType {
  collapsed: boolean;
}

const SidebarContext = createContext<SidebarContextType>({
  collapsed: true,
});

export default SidebarContext;
