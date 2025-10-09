import { Link } from "react-router-dom";
import { AccentLine } from "@/components/ui/accent-line";
import { useCallback, useState } from "react";


// StatCard component with click/touch functionality
function StatCard({
  number,
  title,
  description,
  numberColor = "text-tertiary"
}: {
  number: string;
  title: string;
  description: React.ReactNode;
  numberColor?: string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handlePointerEnter = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch") {
      setIsFlipped(true);
    }
  }, []);

  const handlePointerLeave = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch") {
      setIsFlipped(false);
    }
  }, []);

  const handleToggle = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleToggle();
      }
    },
    [handleToggle],
  );

  return (
    <div
      className="group relative h-40 cursor-pointer select-none [perspective:1200px]"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
    >
      <div className={`h-full w-full transition-transform duration-500 group-hover:-translate-y-1 ${isFlipped ? "-translate-y-1" : ""}`}>
        <div className={`relative h-full w-full rounded-2xl transition-transform duration-300 [transform-style:preserve-3d] ${isFlipped ? "shadow-xl [transform:rotateY(180deg)]" : ""} group-hover:[transform:rotateY(180deg)]`}>
          {/* Front side */}
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl border border-tertiary bg-card/30 backdrop-blur-xs md:bg-card shadow-lg [backface-visibility:hidden]">
            {/* Flip indicator arrow */}
            <div className="absolute top-3 right-3 opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-neutral-600"
              >
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M3 21v-5h5" />
              </svg>
            </div>
            <div className={`text-5xl font-bold ${numberColor}`}>{number}</div>
          </div>
          {/* Back side */}
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-tertiary bg-card/70 backdrop-blur-xs md:bg-card p-6 text-center shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <h3 className="mb-2 text-lg font-semibold">{title}</h3>
            <div className="text-sm text-muted-foreground text-balance">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Home() {
  return (
    <div className="flex flex-col">
      {/* --- Hero Section --- */}
      <section className="overflow-hidden bg-gradient-to-br lg:bg-gradient-to-tr from-primary/20 via-background to-tertiary/40 px-6 pb-8 shadow-lg sm:px-12 -mt-30 pt-30">
        <div className="mx-3 md:mx-15 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div className="text-balance">
            <img
              src="https://static.igem.wiki/teams/5649/svg/mainlogowithsubtitle.svg"
              alt="Snaccine: a phage-based edible vaccine"
              className="max-w-2xl"
              loading="lazy"
            />
            <p className="max-w-3xl text-2xl font-bold text-primary ml-4">
              Bacteriophages inside our <i>Snaccine</i> capsules hijack bacteria in the gut to produce an mRNA vaccine.
            </p>
            <img
              src="https://static.igem.wiki/teams/5649/svg/4step-min.svg"
              alt="Four illustrated steps showing the Snaccine workflow from phage to immune response"
              className="mx-auto w-full max-w-lg mb-2 -mt-2"
              loading="lazy"
            />
            <p className="max-w-3xl text-lg text-muted-foreground ml-4">
              mRNA vaccines can be developed in days, making them ideal for responding to fast-evolving viruses.
              Unlike traditional mRNA vaccines, Snaccines can be stored at room temperature, are cheaper to produce, and can be delivered orally.
            </p>
          </div>
          <div className="mx-auto w-full max-w-lg space-y-6 mt-5">
            <figure className="relative rounded-4xl transition hover:shadow-lg">
              <img
                src="https://static.igem.wiki/teams/5649/chickenscheme/cockledoodledoo2.webp"
                alt="Chickens eating, with a 3D-printed Snaccine logo on the feeder"
                className="w-full h-auto drop-shadow-lg rounded-4xl"
                loading="lazy"
              />
            </figure>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/description"
                className="inline-flex min-w-[10rem] items-center justify-center rounded-full bg-tertiary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition hover:bg-tertiary/90 hover:shadow-lg hover:-translate-y-1 duration-300"
              >
                learn more &rarr;
              </Link>
              <Link
                to="/members"
                className="inline-flex min-w-[10rem] items-center justify-center rounded-full border border-tertiary px-6 py-3 text-base font-semibold text-tertiary transition hover:border-tertiary/70 hover:text-tertiary/70 hover:shadow-lg hover:-translate-y-1 duration-300"
              >
                meet the team &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* --- Avian Influenza Section --- */}

      
    
      {/* Avian Influenza Section with Background Image */}
      <section className="relative w-full overflow-hidden mb-10">
        {/* Full-width background image */}
        <div className="absolute inset-0 w-full h-full"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 60%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 60%, black 90%, transparent 100%)'
          }}>
          <img
            src="https://static.igem.wiki/teams/5649/teamphotos/chickentable.avif"
            alt="Image of chickens in a farm setting, a coop in the background"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 pt-10 pb-10">
            <div className="flex flex-col lg:flex-row-reverse gap-8 lg:items-center">

              <div className="flex justify-center lg:justify-end">
                <img
                src="https://static.igem.wiki/teams/5649/teamphotos/small-chicks-picture-with-snaccine-logo.webp"
                alt="Small chicks with Snaccine logo"
                className="w-full max-w-xl h-auto rounded-2xl shadow-lg"
                loading="lazy"
                />
              </div>
              <div className="space-y-4 text-center lg:text-left">
                <h2 className="text-6xl font-semibold tracking-tight">about avian influenza</h2>
                <p className="mx-auto lg:mx-0 max-w-2xl text-lg text-foreground text-shadow-white text-shadow-lg/50">
                Bird flu, specifically Highly Pathogenic Avian Influenza H5N1 (HPAI&nbsp;A/H5N1), poses an ongoing threat to birds around the world.
                </p>

                <AccentLine alt className="mx-auto lg:mx-0" />
              </div>
            </div>

          {/* --- Stats Cards --- */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <StatCard
              number="+29%"
              title="Egg prices since 2022"
              description={
                <>
                  Egg price inflation in the Netherlands, Jan 2022 – Aug 2025 <Link to="https://opendata.cbs.nl/statline/#/CBS/nl/dataset/83131NED/table?ts=1759710766335" className="text-primary hover:underline"> (CBS)</Link>
                </>
              }
            />

            <StatCard
              number="1264"
              title="Wild bird cases"
              description={
                <>
                  HPAI detections in wild birds, 24 European countries, Oct 2024 – June 2025 <Link to="/human-practices" className="text-primary hover:underline"> (ECDC)</Link>
                </>
              }
            />

            <StatCard
              number="8M"
              title="Birds culled in four months"
              description={
                <>
                  Birds killed to stop the spread of HPAI, 24 European countries, March 8 – June 6 2025
                  <Link to="/human-practices" className="text-primary hover:underline"> (EFSA)</Link>
                </>
              }
              numberColor="text-destructive"
            />
          </div>

          {/* Text overlay at bottom */}
          <div className="text-white text-center mt-0 md:mt-30 lg:mt-90 mb-0">
            <p className="text-lg opacity-100 max-w-lg font-semibold mx-auto drop-shadow-2xl bg-black/30 backdrop-blur-xs rounded-lg px-6 py-4 mb-10">
              In the Netherlands, as in most countries, the main control measure for poultry farms is mass preventative killing (culling) of the entire flock.
            </p>
            <Link
                to="/human-practices"
                className="inline-flex min-w-[10rem] items-center justify-center rounded-full bg-tertiary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition hover:bg-tertiary/60 hover:tr hover:-translate-y-1 backdrop-blur-sm hover:shadow-lg duration-300"
              >
                see how our work can make an impact &rarr;
            </Link>
          </div>
        </div>
      </section>
      
      {/* --- Completely Redesigned Snaccine Section --- */}
      <div className="relative bg-gradient-to-t from-blue-50 to-primary/10 pt-100 -mt-100 pb-16 px-6 shadow-lg md:rounded-3xl">
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="bg-gradient-to-br from-primary/30 to-transparent w-full h-full rounded-3xl" />
        </div>
        <div className="mx-auto grid gap-12 lg:grid-cols-2 lg:items-center max-w-7xl">
          {/* Text Section */}
          <div className="space-y-8 text-center lg:text-left">
            <h2 className="text-5xl font-extrabold text-primary tracking-tight">
              declaring war on bird flu
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our platform addresses the critical gaps in current HPAI control by combining the extremely fast development timeline of mRNA vaccines with the logistical advantages of oral delivery, without the costly ultra-cold storage and transportation infrastructure.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <Link
                to="/engineering"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-md transition-transform duration-300 hover:scale-105 hover:bg-primary/90"
              >
                our description &rarr;
              </Link>
              <Link
                to="/engineering"
                className="inline-flex items-center justify-center rounded-full border border-primary px-8 py-4 text-lg font-semibold text-primary transition-transform duration-300 hover:scale-105 hover:bg-primary/10"
              >
                our engineering cycle &rarr;
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://static.igem.wiki/teams/5649/homegraphics/jar-of-snacks-2.webp"
              alt="A jar of snack capsules representing Snaccine, one capsule is open with phages spilling out"
              className="w-full max-w-lg rounded-2xl shadow-xl bg-background border duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      
      <section className="w-full relative overflow-hidden -mb-16 -z-10 md:-mt-10">
        <img
          src="https://static.igem.wiki/teams/5649/teamphotos/team-picture-with-franek.webp"
          alt="Team picture of the six Snaccine team members"
          className="w-full h-auto"
          loading="lazy"
        />
      </section>


    </div>
  );
}
