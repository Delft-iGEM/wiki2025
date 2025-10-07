import { Link } from "react-router-dom";
import { AccentLine } from "@/components/ui/accent-line";

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

export function Home() {
  return (
    <div className="flex flex-col gap-6">
      {/* --- Hero Section --- */}
      <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-section via-background to-section px-6 pb-8 shadow-lg sm:px-12">
        <div className="mx-15 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div className="text-balance">
            <img
              src="https://static.igem.wiki/teams/5649/svg/mainlogowithsubtitle.svg"
              alt="Snaccine: a phage-based edible vaccine"
              className="w-full max-w-2xl -ml-6 mb-0 -mt-3"
              loading="lazy"
            />
            <p className="max-w-3xl text-2xl font-bold text-primary ml-4">
              Bacteriophages inside our <i>Snaccine</i> capsules hijack bacteria in the gut to produce an mRNA vaccine.
            </p>
            <img
              src="https://static.igem.wiki/teams/5649/svg/4step-min.svg"
              alt="Four illustrated steps showing the Snaccine workflow from phage to immune response"
              className="mx-auto w-full max-w-lg"
              loading="lazy"
            />
            <p className="max-w-3xl text-lg text-muted-foreground ml-4">
              mRNA vaccines can be developed in days, making them ideal for responding to fast-evolving viruses.
              Unlike traditional mRNA vaccines, Snaccines can be stored at room temperature, are cheaper to produce, and can be delivered orally.
            </p>
          </div>
          <div className="mx-auto w-full max-w-lg space-y-6 mt-20">
            <figure className="relative rounded-3xl border border-border bg-card/60 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute -top-6 right-12 hidden h-14 w-14 rotate-12 rounded-xl border border-accent/60 bg-accent/10 md:block" />
              <div className="absolute -bottom-8 left-10 hidden h-16 w-16 -rotate-6 rounded-full border border-primary/40 bg-primary/10 md:block" />
              <img
                src="https://static.igem.wiki/teams/5649/homegraphics/jar-of-snacks-2.webp"
                alt="A jar of snack capsules representing Snaccine, one capsule is open with phages spilling out"
                className="w-full h-auto drop-shadow-lg"
                loading="lazy"
              />
            </figure>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/description"
                className="inline-flex min-w-[10rem] items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 hover:-translate-y-1 hover:shadow-lg"
              >
                learn more &rarr;
              </Link>
              <Link
                to="/members"
                className="inline-flex min-w-[10rem] items-center justify-center rounded-full border border-border px-6 py-3 text-base font-semibold text-foreground transition hover:border-accent hover:text-accent hover:-translate-y-1 hover:shadow-lg"
              >
                meet the team &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Avian Influenza Section --- */}
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-6xl font-semibold tracking-tight">about avian influenza</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
            Bird flu, specifically Highly Pathogenic Avian Influenza H5N1 (HPAI&nbsp;A/H5N1), poses an ongoing threat to birds across Europe.
            The main control measure for poultry farms is mass preventative killing (culling) of the entire flock.
          </p>
          
          <AccentLine className="mx-auto" />
        </div>

        <div className="relative overflow-hidden rounded-3xl" 
            style={{
              maskImage:       'linear-gradient(to bottom, transparent 0%, black 0%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 0%)'
            }}>
          <img
            src="https://static.igem.wiki/teams/5649/frontpagelogo/chicken-apoca-better.webp"
            alt="Placeholder Creative Commons chicken image"
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
          <div className="rounded-2xl border border-border bg-card p-6 text-center">
            <div className="mb-4 text-4xl font-bold text-primary">+29%</div>
            <h3 className="mb-2 text-lg font-semibold">Egg prices since 2022</h3>
            <p className="text-sm text-muted-foreground text-balance">
              Egg price inflation in the Netherlands, Jan 2022 &ndash; Aug 2025 <Link to="https://opendata.cbs.nl/statline/#/CBS/nl/dataset/83131NED/table?ts=1759710766335" className="text-primary hover:underline"> (CBS)</Link>
            </p>
          </div>
          
          <div className="rounded-2xl border border-border bg-card p-6 text-center">
            <div className="mb-4 text-4xl font-bold text-primary">1264</div>
            <h3 className="mb-2 text-lg font-semibold">Wild bird cases</h3>
            <p className="text-sm text-muted-foreground text-balance">
              HPAI detections in wild birds, 24 European countries, Oct 2024 – June 2025 <Link to="/human-practices" className="text-primary hover:underline"> (ECDC)</Link>
            </p>
          </div>
          
          <div className="rounded-2xl border border-border bg-card p-6 text-center">
            <div className="mb-4 text-4xl font-bold text-destructive">8 million</div>
            <h3 className="mb-2 text-lg font-semibold">Birds culled in four months</h3>
            <p className="text-sm text-muted-foreground text-balance">
              Birds killed to stop the spread of HPAI, 24 European countries, March 8 &ndash; June 6 2025
              <Link to="/human-practices" className="text-primary hover:underline"> (EFSA)</Link>
            </p>
          </div>
        </div>

        {/* --- Current Control Methods --- */}
        <div className="rounded-3xl border border-border bg-card/60 px-8 py-12 backdrop-blur-sm">
          <div className="mx-auto max-w-4xl space-y-8">
            <h3 className="text-center text-2xl font-semibold">Current Control Methods Fall Short</h3>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-destructive">Mass Culling</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                    <span>Devastating animal welfare impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                    <span>Economic losses for farmers and government</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                    <span>Does nothing to prevent future outbreaks</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-amber-600">Existing Vaccines</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-600"></span>
                    <span>Require injection of individual chicks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-600"></span>
                    <span>Slow and expensive to update for new strains</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border pt-8 text-center">
              <p className="text-lg text-muted-foreground">
                The poultry industry faces an impossible choice: <strong>endure mass culling or accept prolonged outbreaks</strong>. 
                Both options carry similar costs but devastating consequences for animal welfare and farm sustainability.
              </p>
            </div>
          </div>
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
                  className="inline-flex min-w-[20rem] items-center justify-center rounded-full bg-primary px-12 py-6 text-base font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 hover:-translate-y-1 hover:shadow-lg"
                >
                  read more about how Snaccine works &rarr;
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
