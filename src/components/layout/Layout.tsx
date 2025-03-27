import { FC, ReactNode } from "react";
import Sidebar from "./Sidebar";
import { SidebarProvider } from "../../context/SidebarContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="min-h-svh overscroll-none antialiased bg-background">
        <div className="fixed left-0 z-50 h-screen">
          <Sidebar />
        </div>
        <main className="min-h-svh flex flex-col relative ml-sidebar">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
