import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface BaseItem { name?: string }
interface PageItem extends BaseItem { path?: string; title?: string; component?: React.FC; lead?: string }
interface FolderItem extends BaseItem { folder?: PageItem[] }
type NavItem = PageItem | FolderItem;

export function Navbar({ pages }: { readonly pages: NavItem[] }) {
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
  <nav className="fixed top-0 inset-x-0 z-50 border-b-2 border-border bg-popover/70 backdrop-blur" style={{ overflowAnchor: "none" }}>
      <div className="max-container">
        <div className="flex h-15 items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="text-base font-semibold tracking-wide text-foreground hover:text-primary"
            onClick={closeMobile}
          >
            <svg className="h-13" viewBox="0 0 513.5 240.63" xmlns="http://www.w3.org/2000/svg">
              <g fill="#004459" >
                <path d="M28.51 120.347c-5.658 0-10.519.834-14.581 2.503-4.063 1.596-7.182 3.808-9.359 6.638-2.104 2.829-3.156 6.094-3.156 9.793 0 3.338.617 6.058 1.85 8.162 1.306 2.103 3.011 3.772 5.115 5.006 2.104 1.233 4.425 2.176 6.964 2.829 2.54.58 5.042 1.052 7.509 1.414 2.539.363 4.86.726 6.964 1.089 2.104.362 3.772.906 5.006 1.631 1.305.653 1.959 1.67 1.959 3.048 0 1.668-.835 2.974-2.504 3.917-1.596.943-4.352 1.415-8.27 1.415-3.554 0-7.181-.508-10.881-1.524-3.628-1.088-6.783-2.466-9.467-4.135L0 174.321c2.684 1.813 6.312 3.337 10.882 4.57 4.643 1.161 9.467 1.741 14.473 1.741 5.876 0 10.845-.798 14.908-2.394 4.135-1.596 7.29-3.772 9.467-6.529 2.176-2.829 3.264-6.058 3.264-9.685 0-3.337-.653-6.02-1.958-8.052-1.306-2.104-3.011-3.736-5.115-4.897-2.031-1.233-4.316-2.176-6.855-2.83a56.175 56.175 0 00-7.618-1.414 120.464 120.464 0 01-6.855-1.197c-2.104-.435-3.809-1.015-5.115-1.74-1.233-.726-1.85-1.815-1.85-3.266 0-1.596.871-2.901 2.612-3.917 1.741-1.015 4.498-1.523 8.27-1.523 2.685 0 5.441.326 8.27.979 2.903.58 5.768 1.705 8.597 3.373l5.659-12.078c-2.757-1.669-6.203-2.938-10.338-3.809-4.135-.87-8.198-1.306-12.188-1.306zm70.514 0c-5.005 0-9.467 1.052-13.384 3.156-2.329 1.25-4.297 2.861-5.985 4.753v-7.039H63.441v58.545h16.976v-28.946c0-3.627.58-6.601 1.74-8.923 1.234-2.321 2.902-4.026 5.006-5.114 2.177-1.161 4.607-1.742 7.291-1.742 3.773 0 6.674 1.125 8.706 3.374 2.103 2.249 3.155 5.731 3.155 10.447v30.904h16.976v-33.516c0-5.949-1.052-10.81-3.156-14.582-2.104-3.845-5.005-6.674-8.705-8.488-3.627-1.886-7.763-2.829-12.406-2.829zm63.224 0c-4.643 0-9.214.617-13.711 1.85-4.498 1.233-8.343 2.974-11.535 5.223l6.094 11.861c2.103-1.668 4.643-2.974 7.617-3.917 3.047-1.016 6.13-1.524 9.25-1.524 4.57 0 7.943 1.016 10.12 3.047 2.249 2.032 3.373 4.86 3.373 8.488h-13.493c-5.949 0-10.773.762-14.473 2.285-3.7 1.451-6.42 3.483-8.161 6.094-1.669 2.612-2.503 5.659-2.503 9.141 0 3.337.87 6.348 2.611 9.032s4.244 4.824 7.509 6.42c3.264 1.524 7.182 2.285 11.752 2.285 5.15 0 9.358-.98 12.623-2.938 2.226-1.336 3.942-3.126 5.223-5.305v7.373h15.888v-33.408c0-8.923-2.467-15.488-7.4-19.696-4.933-4.207-11.861-6.31-20.784-6.31zm72.252 0c-6.312 0-11.934 1.306-16.867 3.917-4.933 2.54-8.814 6.094-11.644 10.665-2.756 4.498-4.135 9.684-4.135 15.56 0 5.804 1.379 10.991 4.135 15.562 2.83 4.57 6.71 8.161 11.644 10.773 4.933 2.539 10.555 3.808 16.867 3.808 6.166 0 11.535-1.27 16.105-3.808 4.57-2.612 7.943-6.276 10.12-10.991l-13.167-7.182c-1.523 2.829-3.446 4.897-5.768 6.203-2.248 1.233-4.715 1.85-7.4 1.85-2.9 0-5.512-.653-7.834-1.959-2.321-1.306-4.171-3.156-5.55-5.55-1.306-2.394-1.958-5.296-1.958-8.705 0-3.41.652-6.312 1.958-8.706 1.379-2.394 3.229-4.244 5.55-5.55 2.322-1.305 4.933-1.958 7.835-1.958 2.684 0 5.15.653 7.4 1.959 2.32 1.305 4.244 3.337 5.767 6.093l13.167-7.073c-2.177-4.788-5.55-8.452-10.12-10.99-4.57-2.612-9.939-3.918-16.105-3.918zm63.57 0c-6.311 0-11.933 1.306-16.866 3.917-4.934 2.54-8.815 6.094-11.644 10.665-2.757 4.498-4.135 9.684-4.135 15.56 0 5.804 1.378 10.991 4.135 15.562 2.829 4.57 6.71 8.161 11.644 10.773 4.933 2.539 10.555 3.808 16.866 3.808 6.167 0 11.535-1.27 16.105-3.808 4.57-2.612 7.944-6.276 10.12-10.991l-13.167-7.182c-1.523 2.829-3.445 4.897-5.767 6.203-2.249 1.233-4.716 1.85-7.4 1.85-2.902 0-5.513-.653-7.835-1.959-2.321-1.306-4.17-3.156-5.55-5.55-1.305-2.394-1.958-5.296-1.958-8.705 0-3.41.653-6.312 1.959-8.706 1.378-2.394 3.228-4.244 5.55-5.55 2.32-1.305 4.932-1.958 7.834-1.958 2.684 0 5.151.653 7.4 1.959 2.322 1.305 4.244 3.337 5.767 6.093l13.167-7.073c-2.176-4.788-5.55-8.452-10.12-10.99-4.57-2.612-9.938-3.918-16.105-3.918zm-136.258 34.93h11.644v5.985c-1.016 2.612-2.648 4.607-4.897 5.986-2.249 1.305-4.788 1.958-7.617 1.958-2.974 0-5.332-.616-7.073-1.85-1.669-1.305-2.503-3.046-2.503-5.223 0-1.958.726-3.59 2.177-4.897 1.523-1.305 4.28-1.958 8.27-1.958zM416.11 120.347c-5.005 0-9.466 1.052-13.384 3.156a21.841 21.841 0 00-5.985 4.686v-6.972h-16.214v58.545h16.976v-28.946c0-3.627.58-6.601 1.74-8.923 1.234-2.321 2.903-4.026 5.007-5.114 2.176-1.161 4.606-1.742 7.29-1.742 3.773 0 6.674 1.125 8.706 3.374 2.103 2.249 3.156 5.731 3.156 10.447v30.904h16.975v-33.516c0-5.949-1.052-10.81-3.156-14.582-2.103-3.845-5.005-6.674-8.705-8.488-3.627-1.886-7.763-2.829-12.405-2.829zm66.92 0c-5.948 0-11.28 1.306-15.996 3.917-4.715 2.54-8.451 6.094-11.208 10.665-2.684 4.498-4.026 9.684-4.026 15.56 0 5.804 1.378 10.991 4.135 15.562 2.757 4.498 6.638 8.052 11.643 10.664 5.078 2.611 10.955 3.917 17.63 3.917 5.295 0 9.974-.798 14.036-2.394 4.063-1.668 7.436-4.026 10.12-7.073l-9.031-9.793c-1.959 1.886-4.136 3.3-6.53 4.243-2.321.943-5.041 1.415-8.16 1.415-3.483 0-6.53-.617-9.142-1.85-2.539-1.306-4.534-3.155-5.985-5.55-.749-1.34-1.276-2.797-1.617-4.352h44.274c.073-.726.145-1.487.218-2.285.072-.87.108-1.633.108-2.286 0-6.311-1.342-11.716-4.026-16.213-2.684-4.57-6.347-8.053-10.99-10.447-4.57-2.467-9.721-3.7-15.453-3.7zm.11 12.84c2.901 0 5.44.653 7.617 1.96 2.176 1.233 3.88 2.974 5.114 5.223.816 1.488 1.336 3.168 1.612 5.005h-28.77c.284-1.805.793-3.451 1.586-4.897 1.233-2.321 2.938-4.098 5.114-5.332 2.25-1.306 4.825-1.958 7.727-1.958z"/>
                </g>
                <g fill="#079"><path d="M292.112 78.661l1.145-8.602a2.362 2.362 0 014.56-.502l1.547 4.224a2.362 2.362 0 01-.225 1.874l-2.648 4.513a2.362 2.362 0 01-4.379-1.507zM293.051 89.18l5.945-10.13a2.362 2.362 0 013.565-.606 10.713 10.713 0 007.151 2.54 29.646 29.646 0 0018.564-7.037 2.362 2.362 0 013.709.892l11.603 27.809a2.362 2.362 0 01-2.827 3.181l-46.32-13.181a2.362 2.362 0 01-1.39-3.468zM331.426 123.563l-29.413-22.36a2.362 2.362 0 012.077-4.152l39.912 11.358a2.362 2.362 0 011.695 2.584l-1.013 7.614a30.412 30.412 0 00-13.258 4.956zM307.224 170.98l-21.333 68.501a.886.886 0 001.663.604l24.63-59.124a4.43 4.43 0 015.307-2.556l24.76 7.08-22.665 11.52a3.388 3.388 0 00-1.744 2.166l-9.92 38.072a.886.886 0 001.678.554l13.98-34.806a1.772 1.772 0 01.787-.89l22.511-12.455-12.764 15.707a2.644 2.644 0 00-.582 1.888l2.575 30.805a.886.886 0 001.768-.047l.88-29.121a1.772 1.772 0 01.531-1.213l17.524-17.155a16.83 16.83 0 01.401-10.32 45.56 45.56 0 01-17.885-4.144.692.692 0 00-.095-.035l-26.798-7.825a4.218 4.218 0 00-5.21 2.795z" />
              </g>
              <g fill="#00a6d6">
                <path d="M407.453 94.01l6.642-49.91a2.362 2.362 0 00-3.5-2.37l-17.553 9.879a2.362 2.362 0 00-1.12 2.68l10.91 40.03a2.362 2.362 0 004.621-.31zM411.37 35.707L371.786 4.853a2.362 2.362 0 00-3.545 2.957l21.462 41.055a2.362 2.362 0 003.252.964l18.123-10.2a2.362 2.362 0 00.294-3.922zM364.254 47.825l20.317 2.703a2.362 2.362 0 002.405-3.436l-8.507-16.273a2.362 2.362 0 00-4.357.418 19.4 19.4 0 01-10.528 12.098 2.362 2.362 0 00.67 4.49zM359.936 48.859l25.014 3.328a2.362 2.362 0 011.555 3.79l-36.963 47.64a2.362 2.362 0 01-4.046-.538l-10.943-26.226a2.362 2.362 0 013.19-3.045l3.174 1.502a9.491 9.491 0 0011.873-3.19l1.004-1.455a23.642 23.642 0 003.533-18.916 2.362 2.362 0 012.61-2.89zM403.796 103.917L391.4 58.44a2.362 2.362 0 00-4.145-.827L351.496 103.7a2.362 2.362 0 001.896 3.81l48.155-.61a2.362 2.362 0 002.25-2.983zM365.77 123.82l26.231-10.642a2.362 2.362 0 00-.918-4.55l-41.494.525a2.362 2.362 0 00-2.311 2.05l-.965 7.248a30.412 30.412 0 0119.458 5.369zM383.3 192.628l5.027 35.783a.886.886 0 01-1.732.357l-8.787-32.137a1.772 1.772 0 00-1.235-1.24l-18.284-5.079a15.354 15.354 0 01.514-10.146 16.24 16.24 0 0014.742-8.435.734.734 0 01.176-.214l23.283-19.207a2.38 2.38 0 013.68.85l33.43 73.397a.886.886 0 01-1.585.787l-32.81-60.926a1.285 1.285 0 00-1.93-.397l-15.383 12.226 7.289-2.526a3.345 3.345 0 014.15 1.797l19.085 42.752a.886.886 0 01-1.575.805l-21.485-37.106a1.772 1.772 0 00-2-.821l-14.925 4.078 8.233 2.83a3.19 3.19 0 012.122 2.572z" />
              </g>
              <g fill="#004459">
                <path d="M351.652 154.423h-9.513a7.322 7.322 0 002.446 12.862h8.306a13.06 13.06 0 01-1.24-12.862zM348.474 139.779h-11.409a7.595 7.595 0 005.234 12.613h8.897a13.227 13.227 0 01-2.722-12.613zM348.332 137.896H336.11a8.946 8.946 0 01-4.796-9.703 9.727 9.727 0 011.482-3.589 28.788 28.788 0 0111.665-4.33 30.71 30.71 0 003.87 17.622zM353.692 168.875a11.598 11.598 0 002.983 9.822 43.494 43.494 0 01-16.704-4.022 4.132 4.132 0 011.693-5.8z" />
                <path d="M351.196 139.779a9.708 9.708 0 003.079 12.613 12.3 12.3 0 0010.58-3.664 7.915 7.915 0 00-1.518-8.95zM363.952 124.558a28.788 28.788 0 00-17.694-4.475 28.938 28.938 0 004.129 17.813h12.09a12.622 12.622 0 001.475-13.338zM356.185 168.875a17.314 17.314 0 0010.022-2.224 10.542 10.542 0 013.803 6.231 1.476 1.476 0 01-.367 1.29 14.173 14.173 0 01-10.641 4.523 8.412 8.412 0 01-2.817-9.82zM354.275 153.894a11.153 11.153 0 008.197-1.063 10.24 10.24 0 014.11 6.213 5.277 5.277 0 01-4.24 6.308l-6.157 1.086a7.972 7.972 0 01-1.91-12.544z" />
              </g>
              <path d="M300.927 73.412l-3.448-9.407a29.528 29.528 0 01-1.546-14.058l.341-2.564a2.905 2.905 0 015.785.382 11.232 11.232 0 0022.397 1.22c.18-1.637 2.126-2.397 3.368-1.314l5.264 4.592a5.262 5.262 0 007.83-1.035 18.075 18.075 0 00-.85-21.291c-.719-.907-.073-2.243 1.084-2.243h9.067c5.343 0 9.674-4.33 9.674-9.673V1.12c0-1.055 1.327-1.524 1.99-.703a59.977 59.977 0 0110.657 20.034c3.52 11.437-5.019 23.02-16.986 23.043a1.65 1.65 0 00-1.586 2.094l1.598 5.721a22.048 22.048 0 01-3.085 18.45l-1.003 1.454a7.897 7.897 0 01-9.879 2.655l-7.949-3.762a3.894 3.894 0 00-4.456.803 28.051 28.051 0 01-19.515 8.48 9.119 9.119 0 01-8.752-5.978z" fill="#005e79" />
              <path d="M298.793 67.588a11.246 11.246 0 0010.794 7.373 23.622 23.622 0 0016.434-7.14 8.323 8.323 0 019.524-1.718l7.95 3.762a3.467 3.467 0 004.337-1.165l1.003-1.455a17.619 17.619 0 002.466-14.743l-1.598-5.722c-1.082-3.87 1.824-7.707 5.844-7.714 8.99-.017 15.404-8.72 12.76-17.312a55.548 55.548 0 00-8.414-16.668V1.12c0-1.055 1.327-1.524 1.99-.703a59.977 59.977 0 0110.657 20.034c3.52 11.437-5.019 23.02-16.985 23.043a1.65 1.65 0 00-1.587 2.094l1.599 5.721a22.048 22.048 0 01-3.086 18.45l-1.003 1.454a7.897 7.897 0 01-9.878 2.655l-7.95-3.762a3.894 3.894 0 00-4.455.803 28.051 28.051 0 01-19.516 8.48 9.119 9.119 0 01-8.752-5.978z" fill="#004459" />
            </svg>
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring lg:hidden"
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
            {pages.map((item, pageIndex) => {
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
                    >
                      <DropdownMenuTrigger asChild>
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          aria-haspopup="menu"
                          aria-expanded={desktopDropdownOpen === pageIndex}
                        >
                          {item.name}
                          <svg
                            className="h-4 w-4 text-muted-foreground"
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
                                ? "text-primary font-semibold"
                                : ""}
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
                      className={`rounded-md px-3 py-2 text-sm font-medium hover:bg-muted ${isActive(item.path)
                        ? "text-primary"
                        : "text-foreground"
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
          {pages.map((item, pageIndex) => {
            if ("folder" in item && item.folder) {
              const expanded = openDropdown === pageIndex;
              return (
                <div key={`m-folder-${getItemName(item) ?? pageIndex}`} className="border-b pb-2">
                  <button
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium text-foreground hover:bg-muted"
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
                          className={`block rounded-md px-6 py-2 text-sm hover:bg-muted ${isActive(subpage.path)
                            ? "text-primary font-semibold"
                            : "text-foreground"
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
                  className={`block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted ${isActive(item.path) ? "text-primary" : "text-foreground"
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
