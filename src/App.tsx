import AppRoutes from './routes/AppRoutes';
import SidebarContext from './context/SidebarContext';

function App() {
  return (
    <SidebarContext.Provider>
      <AppRoutes />
    </SidebarContext.Provider>
  );
}

export default App;
