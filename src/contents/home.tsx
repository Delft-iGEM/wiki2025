import InteractiveSchematic from "@/components/Interactive_schematic";
import { AccentLine } from "../components/ui/accent-line";

export function Home() {
  return (
    <div>
      <AccentLine />
      <span className="text-5xl font-bold">snaccine </span>

      <div id="schmcont" className="flex flex-col items-center justify-center">
        <div className="h-250"><InteractiveSchematic /></div>
        
      </div>

    </div>
  );
}
