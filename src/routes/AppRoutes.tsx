import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Bugs from "../pages/Bugs";
import Epics from "../pages/Epics";
import Create from "../pages/Create";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="home" element={<Home />} />
                <Route path="bugs" element={<Bugs />} />
                <Route path="epics" element={<Epics />} />
                <Route path="create/:type" element={<Create />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
