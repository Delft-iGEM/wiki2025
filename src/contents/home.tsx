import { Link } from "react-router-dom"; // 👈 import Link
import InteractiveSchematic from "@/components/Interactive_schematic";
import { AccentLine } from "../components/ui/accent-line";

export function Home() {
  return (
    <div className="flex flex-col items-center">
      <AccentLine />
      <span className="text-5xl font-bold">snaccine</span>

      {/* Interactive schematic */}
      <div
        id="schmcont"
        className="flex flex-col items-center justify-center my-8"
      >
        <div className="h-250">
          <InteractiveSchematic />
        </div>
      </div>

      {/* Icons section (staggered layout, with different sizes) */}
      <div className="flex flex-col items-center gap-10 my-12">
        {/* Top row */}
        <div className="flex gap-16">
          {/* Description (bigger) */}
          <Link
            to="/description"
            className="w-52 h-52 flex items-center justify-center overflow-hidden transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src="https://static.igem.wiki/teams/5649/roundicons/descriptionicon.webp"
              alt="Description"
              className="max-w-full max-h-full object-contain"
            />
          </Link>

          {/* Engineering (smaller) */}
          <Link
            to="/engineering"
            className="w-36 h-36 flex items-center justify-center overflow-hidden transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src="https://static.igem.wiki/teams/5649/roundicons/engineering-cb.webp"
              alt="Engineering"
              className="max-w-full max-h-full object-contain"
            />
          </Link>
        </div>

        {/* Bottom row */}
        <div className="flex gap-16">
          {/* Members (was Team) */}
          <Link
            to="/members"
            className="w-40 h-40 flex items-center justify-center overflow-hidden transform transition-transform duration-300 hover:scale-110 rotate-6"
          >
            <img
              src="https://static.igem.wiki/teams/5649/roundicons/team-clear-background.webp"
              alt="Members"
              className="max-w-full max-h-full object-contain"
            />
          </Link>

          {/* Results (bigger) */}
          <Link
            to="/results"
            className="w-48 h-48 flex items-center justify-center overflow-hidden transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src="https://static.igem.wiki/teams/5649/roundicons/resultsicon.webp"
              alt="Results"
              className="max-w-full max-h-full object-contain"
            />
          </Link>

          {/* Human Practices */}
          <Link
            to="/human-practices"
            className="w-36 h-36 flex items-center justify-center overflow-hidden transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src="https://static.igem.wiki/teams/5649/roundicons/human-practices-cb.webp"
              alt="Human Practices"
              className="max-w-full max-h-full object-contain"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
