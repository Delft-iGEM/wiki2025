import { Link } from "react-router-dom";
import { AccentLine } from "@/components/ui/accent-line";
import { useCallback, useState } from "react";

const quickLinks = [
  {
    title: "Project Description",
    copy: "Dive into the science behind Snaccine and the engineering choices that make it possible.",
    to: "/description",
    image: "https://static.igem.wiki/teams/5649/roundicons/humanpracticesnew.webp", // swapped image
    iconStyle: "h-44 w-44 -translate-y-22 scale-105",
  },
  {
    title: "Engineering Success",
    copy: "See how we iterated on our designs, validated parts, and built a robust experimental framework.",
    to: "/engineering",
    image: "https://static.igem.wiki/teams/5649/roundicons/engineeringnew.webp",
    iconStyle: "h-43 w-43 -translate-y-23",
  },
  {
    title: "Meet the Team",
    copy: "Get to know the multidisciplinary group of students making Snaccine a reality.",
    to: "/members",
    image: "https://static.igem.wiki/teams/5649/roundicons/teamnew.webp",
    iconStyle: "h-45 w-45 -translate-y-20 rotate-6",
  },
];

// StatCard component with click/touch functionality
function StatCard({ 
  number, 
  title, 
  description,
  numberColor = "text-primary" 
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
        <div className={`relative h-full w-full rounded-2xl transition-transform duration-500 group-hover:shadow-xl [transform-style:preserve-3d] ${isFlipped ? "shadow-xl [transform:rotateY(180deg)]" : ""} group-hover:[transform:rotateY(180deg)]`}>
          {/* Front side */}
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl border border-border bg-card shadow-lg [backface-visibility:hidden]">
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
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 text-center shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
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
            <figure className="relative rounded-4xl transition hover:-translate-y-1 hover:shadow-lg">
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
                className="inline-flex min-w-[10rem] items-center justify-center rounded-full bg-tertiary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition hover:bg-tertiary/90 hover:-translate-y-1 hover:shadow-lg"
              >
                learn more &rarr;
              </Link>
              <Link
                to="/members"
                className="inline-flex min-w-[10rem] items-center justify-center rounded-full border border-tertiary px-6 py-3 text-base font-semibold text-tertiary transition hover:border-accent hover:text-accent hover:-translate-y-1 hover:shadow-lg"
              >
                meet the team &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* --- Avian Influenza Section --- */}
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 mt-10">


      <div className="space-y-4 text-center">
        <h2 className="text-6xl font-semibold tracking-tight">about avian influenza</h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
          Bird flu, specifically Highly Pathogenic Avian Influenza H5N1 (HPAI&nbsp;A/H5N1), poses an ongoing threat to birds across the world.
          In the Netherlands, as in most countries, the main control measure for poultry farms is mass preventative killing (culling) of the entire flock.
        </p>
        
        <AccentLine className="mx-auto" />
      </div>

        <div className="relative overflow-hidden rounded-3xl" 
            style={{
              maskImage:       'linear-gradient(to bottom, transparent 0%, black 20%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%)'
            }}>
          <img
            src="https://static.igem.wiki/teams/5649/roundicons/illustration-sans-titre-7-min.webp"
            alt="Illustrated chicken image"
            className="w-full h-96 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <p className="text-lg font-semibold">
              Avian Influenza (Bird Flu) outbreaks are increasing in frequency and severity across Europe.
            </p>
            <p className="text-sm opacity-90 mt-2">
              Illustration
            </p>
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


        {/* --- Snaccine Answer Section --- */}
        <div className="rounded-3xl bg-gradient-to-br from-primary/20 to-transparent px-8 py-12">
          <div className="mx-auto">
            <div className="grid gap-4 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <img
                  src="https://static.igem.wiki/teams/5649/homegraphics/jar-of-snacks-2.webp"
                  alt="A jar of snack capsules representing Snaccine, one capsule is open with phages spilling out"
                  className="w-full h-auto"
                  loading="lazy"
                  
                />
                
              </div>
              <div className="mr-auto w-full max-w-md">
                <h3 className="text-2xl font-semibold">Snaccine is the answer to HPAI outbreaks</h3>
                <AccentLine className="mb-3" />
                <p className="text-lg text-muted-foreground">
                  Our platform addresses the critical gaps in current HPAI control by
                  combining the extremely fast development timeline of mRNA vaccines with
                  the logistical advantages of oral delivery, without the costly ultra-cold
                  storage and transportation infrastructure.
                </p>
                <Link
                  to="/description"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-12 py-6 text-base font-semibold text-primary-foreground shadow-sm transition hover:bg-tertiary/90 hover:-translate-y-1 hover:shadow-lg"
                >
                  read how it works &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* --- Quick Links Section (updated) --- */}
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-24 sm:px-6">
          <div className="space-y-4 text-center">
            <AccentLine className="mx-auto" />
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Jump into the details
            </h2>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground">
              From wet lab notebooks to inclusive design, our documentation captures the story of Snaccine.
              Pick a page to start exploring.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                to={link.to}
                className="group relative flex h-full flex-col justify-between rounded-2xl border border-border bg-card/80 p-6 pt-20 shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-lg"
              >
                <img
                  src={link.image}
                  alt={link.title}
                  className={`absolute left-1/2 -translate-x-1/2 object-contain transition-transform duration-300 ${link.iconStyle}`}
                />
                <div className="space-y-4 text-center mt-12">
                  <h3 className="text-xl font-semibold text-primary group-hover:text-accent">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{link.copy}</p>
                </div>
                <span className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-semibold text-accent group-hover:gap-3">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
