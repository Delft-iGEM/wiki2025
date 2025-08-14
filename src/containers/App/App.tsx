import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { getPathMapping, stringToSlug } from "../../utils";
import { useEffect } from "react";
// If you want the top nav on non-Home pages, keep this import:
import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { NotFound } from "../../components/NotFound";
import { Footer } from "../../components/Footer";

const App = () => {
  const pathMapping = getPathMapping();

  // Normalize current path relative to the iGEM team slug (works locally & on static site)
  const currentPath =
    location.pathname.split(`${stringToSlug(import.meta.env.VITE_TEAM_NAME)}`).pop() || "/";

  // Home detection using the normalized path
  const isHome = currentPath === "/";

  // Set page title
  const title =
    currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";

  useEffect(() => {
    document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - iGEM ${import.meta.env.VITE_TEAM_YEAR}`;
  }, [title]);

  return (
    <>
      {/* Show the big Navbar ONLY when not on Home */}
      {!isHome && <Navbar />}

      <Routes>
        {Object.entries(pathMapping).map(
          ([path, { title, lead, component: Component }]) => (
            <Route
              key={path}
              path={path}
              element={
                path === "/" ? (
                  // HOME: no Header, no Bootstrap container (so your fullpage sections can be full-bleed)
                  <Component />
                ) : (
                  // OTHER PAGES: keep Header + container as before
                  <>
                    <Header title={title || ""} lead={lead || ""} />
                    <div className="container">
                      <Component />
                    </div>
                  </>
                )
              }
            />
          )
        )}

        <Route
          path="*"
          element={
            <>
              <Header
                title="Not Found"
                lead="The requested URL was not found on this server."
              />
              <NotFound />
            </>
          }
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
