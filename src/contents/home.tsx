import InteractiveSchematic from "@/components/Interactive_schematic";
import { AccentLine } from "../components/ui/accent-line";

export function Home() {
  return (
    <div className="flex flex-col items-center">
      <AccentLine />
      <span className="text-5xl font-bold">snaccine </span>

      <div id="schmcont" className="flex flex-col items-center justify-center my-8">
        <div className="h-250">
          <InteractiveSchematic />
        </div>
      </div>

      {/* Images section */}
      <div className="flex flex-wrap justify-center gap-6 my-12">
        <img
          src="https://static.igem.wiki/teams/5649/roundicons/illustration-sans-titre-5.webp"
          alt="iGEM Illustration 1"
          className="w-40 h-40 object-contain"
        />
        <img
          src="https://static.igem.wiki/teams/5649/roundicons/illustration-sans-titre-4-1.webp"
          alt="iGEM Illustration 2"
          className="w-40 h-40 object-contain"
        />
        <img
          src="https://static.igem.wiki/teams/5649/roundicons/illustration-sans-titre-2.webp"
          alt="iGEM Illustration 3"
          className="w-40 h-40 object-contain"
        />
      </div>
    </div>
  );
}
