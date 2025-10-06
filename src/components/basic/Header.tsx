import type { ReactNode } from "react";

interface HeaderProps {
  readonly children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header 
      className="bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: "url('https://static.igem.wiki/teams/5649/frontpagelogo/chicken-apoca-better-diff-colours-min.webp')",
        backgroundPosition: "center 45%"
      }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="narrow-container py-5 relative z-10">
        {children}
      </div>
    </header>
  );
}
