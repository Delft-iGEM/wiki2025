import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { getPathMapping, stringToSlug } from "./utils";
import { useEffect, useMemo } from "react";
import { Navbar } from "./components/Navbar";
import { NotFound } from "./components/NotFound";
import { Footer } from "./components/Footer";

// Content components 
import Test from "./mdx/test.mdx";
import {
  Attributions,
  Contribution,
  Description,
  Engineering,
  Experiments,
  Home,
  HumanPractices,
  Notebook,
  Results,
  SafetyAndSecurity,
  Members,
  Education,
  Entrepreneurship,
  Hardware,
  Inclusivity,
  Measurement,
  Model,
  Plant,
  Software,
  Sustainability,
} from "./contents";

// Types formerly in pages.ts
interface BaseItem { name?: string }
interface PageItem extends BaseItem { title?: string; path?: string; component?: React.FC }
interface FolderItem extends BaseItem { folder?: PageItem[] }
export type NavItem = PageItem | FolderItem;

// Pages array formerly in pages.ts
const Pages: NavItem[] = [
  {
    name: "Home",
    title: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Team",
    folder: [
      {
        name: "Test",
        title: "test",
        path: "/test",
        component: Test,
      },
      {
        name: "Members",
        title: "Meet Our Team",
        path: "/team",
        component: Members,
      },
      {
        name: "Attributions",
        title: "Attributions",
        path: "/attributions",
        component: Attributions,
      },
    ],
  },
  {
    name: "Project",
    folder: [
      {
        name: "Description",
        title: "Project Description",
        path: "/description",
        component: Description,
      },
      {
        name: "Engineering",
        title: "Engineering Success",
        path: "/engineering",
        component: Engineering,
      },
      {
        name: "Results",
        title: "Results",
        path: "/results",
        component: Results,
      },
      {
        name: "Contribution",
        title: "Contribution",
        path: "/contribution",
        component: Contribution,
      },
    ],
  },
  {
    name: "Wet Lab",
    folder: [
      {
        name: "Experiments",
        title: "Experiments",
        path: "/experiments",
        component: Experiments,
      },
      {
        name: "Notebook",
        title: "Notebook",
        path: "/notebook",
        component: Notebook,
      },
      {
        name: "Measurement",
        title: "Measurement",
        path: "/measurement",
        component: Measurement,
      },
      {
        name: "Plant",
        title: "Plant",
        path: "/plant",
        component: Plant,
      },
      {
        name: "Safety and Security",
        title: "Safety and Security",
        path: "/safety-and-security",
        component: SafetyAndSecurity,
      },
    ],
  },
  {
    name: "Dry Lab",
    folder: [
      {
        name: "Model",
        title: "Model",
        path: "/model",
        component: Model,
      },
      {
        name: "Software",
        title: "Software",
        path: "/software",
        component: Software,
      },
      {
        name: "Hardware",
        title: "Hardware",
        path: "/hardware",
        component: Hardware,
      },
    ],
  },
  {
    name: "Engagement",
    folder: [
      {
        name: "Entrepreneurship",
        title: "Entrepreneurship",
        path: "/entrepreneurship",
        component: Entrepreneurship,
      },
      {
        name: "Human Practices",
        title: "Human Practices",
        path: "/human-practices",
        component: HumanPractices,
      },
      {
        name: "Education",
        title: "Education",
        path: "/education",
        component: Education,
      },
      {
        name: "Inclusivity",
        title: "Diversity and Inclusion",
        path: "/inclusivity",
        component: Inclusivity,
      },
      {
        name: "Sustainability",
        title: "Sustainability",
        path: "/sustainability",
        component: Sustainability,
      },
    ],
  },
];


function App() {
  // Use React Router's useLocation to get reactive pathname
  const location = useLocation();
  
  // Memoize mapping to avoid recalculating every render
  const pathMapping = useMemo(() => getPathMapping(Pages), []);

  const currentPath =
    location.pathname
      .replace(`/${stringToSlug(import.meta.env.VITE_TEAM_NAME)}`, "") || "/";

  const title = currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";

  useEffect(() => {
    document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - iGEM ${import.meta.env.VITE_TEAM_YEAR}`;
  }, [title]);

  return (
    <>
      <Navbar pages={Pages} />
      <main className="min-h-screen" id="container">
        <Routes>
          {Object.entries(pathMapping).map(([path, page]) => (
            <Route
              key={path}
              path={path}
              element={page.component ? <page.component /> : <div>Component missing</div>}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App
