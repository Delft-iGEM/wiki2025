import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Pages from "../pages.ts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  // Desktop-only controlled open state for shadcn dropdowns (hover to open)
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState<number | null>(null);
  const hoverCloseTimer = useRef<number | null>(null);

  const openDesktopMenu = (index: number) => {
    if (hoverCloseTimer.current) {
      window.clearTimeout(hoverCloseTimer.current);
      hoverCloseTimer.current = null;
    }
    setDesktopDropdownOpen(index);
  };

  const scheduleCloseDesktopMenu = () => {
    if (hoverCloseTimer.current) {
      window.clearTimeout(hoverCloseTimer.current);
    }
    hoverCloseTimer.current = window.setTimeout(() => {
      setDesktopDropdownOpen(null);
    }, 150);
  };

  const isActive = (path?: string) =>
    path ? location.pathname === path : false;

  const closeMobile = () => setMobileOpen(false);

  // Helpers for stable keys without relying on array indices or any-casts
  const getItemName = (item: unknown): string | undefined => {
    if (typeof item === "object" && item !== null && "name" in item) {
      const n = (item as { name?: unknown }).name;
      return typeof n === "string" ? n : undefined;
    }
    return undefined;
  };

  const getItemPath = (item: unknown): string | undefined => {
    if (typeof item === "object" && item !== null && "path" in item) {
      const p = (item as { path?: unknown }).path;
      return typeof p === "string" ? p : undefined;
    }
    return undefined;
  };

  return (
  <nav className="fixed top-0 inset-x-0 z-50 border-b bg-white/80 backdrop-blur" style={{ overflowAnchor: "none" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="text-base font-semibold tracking-wide text-gray-900 hover:text-gray-700"
            onClick={closeMobile}
          >
            {import.meta.env.VITE_TEAM_NAME}
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 lg:hidden"
            aria-controls="primary-nav"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            {/* Icon: hamburger / close */}
            <svg
              className={`h-6 w-6 ${mobileOpen ? "hidden" : "block"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            </svg>
            <svg
              className={`h-6 w-6 ${mobileOpen ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Desktop nav */}
          <ul
            id="primary-nav"
            className="hidden lg:flex items-center gap-x-4"
          >
            {Pages.map((item, pageIndex) => {
              if ("folder" in item && item.folder) {
                return (
                  <li
                    key={`folder-${getItemName(item) ?? pageIndex}`}
                    className="relative"
                    onMouseEnter={() => openDesktopMenu(pageIndex)}
                    onMouseLeave={scheduleCloseDesktopMenu}
                 >
                    <DropdownMenu
                      modal={false}
                      open={desktopDropdownOpen === pageIndex}
                      onOpenChange={(o) => setDesktopDropdownOpen(o ? pageIndex : null)}
                    >
                      <DropdownMenuTrigger asChild>
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                          aria-haspopup="menu"
                          aria-expanded={desktopDropdownOpen === pageIndex}
                        >
                          {item.name}
                          <svg
                            className="h-4 w-4 text-gray-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="start"
                        sideOffset={6}
                        className="w-56"
                        onCloseAutoFocus={(e) => e.preventDefault()}
                        onMouseEnter={() => {
                          if (hoverCloseTimer.current) {
                            window.clearTimeout(hoverCloseTimer.current);
                            hoverCloseTimer.current = null;
                          }
                        }}
                        onMouseLeave={scheduleCloseDesktopMenu}
                      >
                        {item.folder
                          .filter((sp) => !!sp.path)
                          .map((subpage, subpageIndex) => (
                            <DropdownMenuItem
                              key={`subpage-${getItemName(item) ?? pageIndex}-${subpage.path ?? subpageIndex}`}
                              asChild
                              className={isActive(subpage.path)
                                ? "text-green-700 font-semibold"
                                : undefined}
                            >
                              <Link to={subpage.path!}>{subpage.name}</Link>
                            </DropdownMenuItem>
                          ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                );
              } else if ("path" in item && item.path) {
                return (
                  <li key={getItemPath(item) ?? String(pageIndex)}>
                    <Link
                      to={item.path}
                      className={`rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 ${
                        isActive(item.path)
                          ? "text-green-700"
                          : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileOpen ? "block" : "hidden"}`}>
        <div className="space-y-1 px-4 pb-4 pt-2">
          {Pages.map((item, pageIndex) => {
            if ("folder" in item && item.folder) {
              const expanded = openDropdown === pageIndex;
              return (
                <div key={`m-folder-${getItemName(item) ?? pageIndex}`} className="border-b pb-2">
                  <button
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium text-gray-800 hover:bg-gray-100"
                    onClick={() =>
                      setOpenDropdown((v) => (v === pageIndex ? null : pageIndex))
                    }
                    aria-expanded={expanded}
                    aria-controls={`m-dropdown-${pageIndex}`}
                  >
                    <span>{item.name}</span>
                    <svg
                      className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : "rotate-0"}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div id={`m-dropdown-${pageIndex}`} className={`${expanded ? "mt-1" : "hidden"}`}>
                    {item.folder
                      .filter((sp) => !!sp.path)
                      .map((subpage, subpageIndex) => (
                        <Link
                          key={`m-subpage-${getItemName(item) ?? pageIndex}-${subpage.path ?? subpageIndex}`}
                          to={subpage.path!}
                          onClick={closeMobile}
                          className={`block rounded-md px-6 py-2 text-sm hover:bg-gray-100 ${
                            isActive(subpage.path)
                              ? "text-green-700 font-semibold"
                              : "text-gray-700"
                          }`}
                        >
                          {subpage.name}
                        </Link>
                      ))}
                  </div>
                </div>
              );
            } else if ("path" in item && item.path) {
              return (
                <Link
                  key={getItemPath(item) ?? String(pageIndex)}
                  to={item.path}
                  onClick={closeMobile}
                  className={`block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 ${
                    isActive(item.path) ? "text-green-700" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </nav>
  );
}
