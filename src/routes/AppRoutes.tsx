import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import MobileLayout from "../components/layout/MobileLayout";
import * as Pages from "../pages";
import useWindowWidth from "../hooks/useWindowWidth";

const AppRoutes = () => {
  const { isMobile } = useWindowWidth();
  const LayoutComponent = isMobile ? MobileLayout : Layout;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route
          path="/*"
          element={
            <LayoutComponent>
              <Routes>
                <Route path="home" element={<Pages.Home />} />
                <Route path="bugs" element={<Pages.Bugs />} />
                <Route path="epics" element={<Pages.Epics />} />
                <Route path="documents" element={<Pages.Documents />} />
                <Route path="spaces" element={<Pages.Spaces />} />
                <Route path="goals" element={<Pages.Goals />} />
                <Route path="dashboard" element={<Pages.Dashboard />} />
                <Route path="applications" element={<Pages.Applications />} />
                <Route path="create/:type" element={<Pages.Create />} />
              </Routes>
            </LayoutComponent>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
