import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { getPathMapping, stringToSlug } from "./utils";
import { useEffect, useMemo } from "react";
import { Navbar } from "./components/basic/Navbar";
import { NotFound } from "./components/NotFound";
import { Footer } from "./components/basic/Footer";

// Content components TSX
import { Home } from "./contents/home.tsx";

// Content components MDX
import HumanPractices from "./mdx/human_practices.mdx";
import DryLab from "./mdx/dry_lab.mdx";


// Team
import Members from "./mdx/team/members.mdx";
import Attributions from "./contents/attributions.tsx";

//Project
import Description from "./mdx/project/description.mdx";
import Engineering from "./mdx/project/engineering.mdx";
import Results from "./mdx/project/results.mdx";
import Contribution from "./mdx/project/contribution.mdx";

//wetlab
import  Experiments  from "./mdx/wetlab/experiments.mdx";
import  Parts  from "./mdx/wetlab/parts.mdx";
import  Protocols  from "./mdx/wetlab/protocols.mdx";
import  Safety  from "./mdx/wetlab/safety.mdx";
import  Notebook  from "./mdx/wetlab/notebook.mdx";





// Types formerly in pages.ts
interface BaseItem { name?: string }
interface PageItem extends BaseItem { title?: string; path?: string; component?: React.FC }
interface FolderItem extends BaseItem { folder?: PageItem[] }
export type NavItem = PageItem | FolderItem;

// Pages array formerly in pages.ts
const Pages: NavItem[] = [
  {
    name: "home",
    title: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "team",
    folder: [{
        name: "members",
        title: "Meet Our Team",
        path: "/members",
        component: Members,
      },
      {
        name: "attributions",
        title: "Attributions",
        path: "/attributions",
        component: Attributions,
      }
    ],
  },
  {
    name: "project",
    folder: [
      {
        name: "description",
        title: "Project Description",
        path: "/description",
        component: Description,
      },
      {
        name: "engineering",
        title: "Engineering Success",
        path: "/engineering",
        component: Engineering,
      },
      {
        name: "results",
        title: "Results",
        path: "/results",
        component: Results,
      },
      {
        name: "contribution",
        title: "Contribution",
        path: "/contribution",
        component: Contribution,
      },
    ],
  },
  {
    name: "wet lab",
    folder: [
      {
        name: "experiments",
        title: "Experiments",
        path: "/experiments",
        component: Experiments,
      },
      {
        name: "safety and security",
        title: "Safety and Security",
        path: "/safety-and-security",
        component: Safety,
      },
      {
        name: "parts",
        title: "Parts",
        path: "/parts",
        component: Parts,
      },
      {
        name: "protocols",
        title: "Protocols",
        path: "/protocols",
        component: Protocols,
      },
      {
        name: "notebook",
        title: "Notebook",
        path: "/notebook",
        component: Notebook,
      },
    ],
  },
  // {
  //   name: "Dry Lab",
  //   folder: [
  //     {
  //       name: "Model",
  //       title: "Model",
  //       path: "/model",
  //       component: Model,
  //     },
  //     {
  //       name: "Software",
  //       title: "Software",
  //       path: "/software",
  //       component: Software,
  //     },
  //     {
  //       name: "Hardware",
  //       title: "Hardware",
  //       path: "/hardware",
  //       component: Hardware,
  //     },
  //   ],
  // },
  {
        name: "human practices",
        title: "Human Practices",
        path: "/human-practices",
        component: HumanPractices,
  },
        {
        name: "dry lab",
        title: "Dry Lab",
        path: "/dry-lab",
        component: DryLab,
      },
  // {
  //   name: "Engagement",
  //   folder: [
  //     {
  //       name: "Entrepreneurship",
  //       title: "Entrepreneurship",
  //       path: "/entrepreneurship",
  //       component: Entrepreneurship,
  //     },
  //     {
  //       name: "Human Practices",
  //       title: "Human Practices",
  //       path: "/human-practices",
  //       component: HumanPractices,
  //     },
  //     {
  //       name: "Education",
  //       title: "Education",
  //       path: "/education",
  //       component: Education,
  //     },
  //     {
  //       name: "Inclusivity",
  //       title: "Diversity and Inclusion",
  //       path: "/inclusivity",
  //       component: Inclusivity,
  //     },
  //     {
  //       name: "Sustainability",
  //       title: "Sustainability",
  //       path: "/sustainability",
  //       component: Sustainability,
  //     },
  //   ],
  // },
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
