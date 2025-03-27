import { FC, ReactNode } from 'react';
import Sidebar from './Sidebar';
import { SidebarProvider } from '../../context/SidebarContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="bg-background min-h-svh overscroll-none antialiased">
        <div className="fixed left-0 z-50 h-screen">
          <Sidebar />
        </div>
        <main className="ml-sidebar relative flex min-h-svh flex-col">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
