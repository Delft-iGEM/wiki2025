import InteractiveSchematic from "@/components/Interactive_schematic";
import { AccentLine } from "../components/ui/accent-line";

export function Home() {
  return (
    <div className="flex flex-col items-center">
      <AccentLine />
      <span className="text-5xl font-bold">snaccine </span>

      {/* Interactive schematic */}
      <div id="schmcont" className="flex flex-col items-center justify-center my-8">
        <div className="h-250">
          <InteractiveSchematic />
        </div>
      </div>

      {/* Images section */}
      <div className="flex flex-wrap justify-center items-start gap-6 my-12">
        {/* Human Practices */}
        <div className="w-50 h-50 flex items-center justify-center overflow-hidden">
          <img
            src="https://static.igem.wiki/teams/5649/roundicons/human-practices-cb.webp"
            alt="Human Practices Illustration"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Engineering */}
        <div className="w-50 h-50 flex items-center justify-center overflow-hidden -mt-2 rotate-3">
          <img
            src="https://static.igem.wiki/teams/5649/roundicons/engineering-cb.webp"
            alt="Engineering Illustration"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Team */}
        <div className="w-50 h-50 flex items-center justify-center overflow-hidden rotate-6">
          <img
            src="https://static.igem.wiki/teams/5649/roundicons/team-clear-background.webp"
            alt="Team Illustration"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
