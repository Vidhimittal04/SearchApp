import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
// import AccountantDetails from "pages/AccountDetails";
const MichaelJackson = React.lazy(() => import("pages/MichaelJackson"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const AccountantDetails = React.lazy(() => import("pages/AccountDetails"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/michaeljackson" element={<MichaelJackson />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
          <Route path="/accountant/:id" element={<AccountantDetails />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
