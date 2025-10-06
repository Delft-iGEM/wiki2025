import { Link } from "react-router-dom";
import { AccentLine } from "@/components/ui/accent-line";

export function Home() {
  return (
    <div className="flex flex-col gap-6">
      <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-section via-background to-section px-6 pb-5 shadow-lg sm:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="space-y-6 text-balance">
            <img
              src='https://static.igem.wiki/teams/5649/svg/mainlogowithsubtitle.svg'
              alt="Snaccine: a phage-based edible vaccine"
              className="w-full max-w-2xl -ml-6"
            />
            <p className="max-w-2xl text-2xl font-bold text-foreground ml-4">
              Bacteriophages inside Snaccine capsules hijack bacteria in the gut to produce an mRNA vaccine.
            </p>
            <p className="max-w-2xl text-xl text-muted-foreground ml-4">
              mRNA vaccines can be developed in days, making them ideal for responding to fast-evolving viruses.
              Unlike traditional mRNA vaccines, Snaccines can be stored at room temperature, are cheaper to produce, and can be delivered orally.
            </p>
            {/*<dl className="grid gap-6 sm:grid-cols-3">
              <div>
                <dt className="text-sm text-muted-foreground">Storage & transport</dt>
                <dd className="text-2xl font-semibold">20&nbsp;°C, not −80°C</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Delivery route</dt>
                <dd className="text-2xl font-semibold">Oral capsules</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Vaccine design timeline</dt>
                <dd className="text-2xl font-semibold">Days</dd>
              </div>
            </dl>*/}
          </div>
          <div className="mx-auto w-full max-w-2xl space-y-6">
            <figure className="relative rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute -top-6 right-12 hidden h-14 w-14 rotate-12 rounded-xl border border-accent/60 bg-accent/10 md:block" />
              <div className="absolute -bottom-8 left-10 hidden h-16 w-16 -rotate-6 rounded-full border border-primary/40 bg-primary/10 md:block" />

              <img
                src='https://static.igem.wiki/teams/5649/svg/4step-min.svg'
                alt="Four illustrated steps showing the Snaccine workflow from phage to immune response"
                className="mx-auto w-full" 
              />{/*drop-shadow-lg*/}
              <figcaption className="text-sm text-muted-foreground text-center mt-4">
                caption here?
              </figcaption>
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
              maskImage:       'linear-gradient(to bottom, transparent 0%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)'
            }}>
          <img
            src="https://static.igem.wiki/teams/5649/members/svh-0259-lowercaseextension.webp"
            alt="Don't know what to put here (has to be Creative Commons, not disturbing)"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <p className="text-lg font-semibold">
              placeholder image
            </p>
            <p className="text-sm opacity-90 mt-2">
              Don't know what to put here (has to be Creative Commons, not disturbing). sth w chickens
            </p>
          </div>
        </div>

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

        <div className="rounded-3xl bg-gradient-to-br from-primary/20 to-transparent px-8 py-12">
          <div className="mx-auto">
            <div className="grid gap-4 lg:grid-cols-2 lg:items-center">
              
              <div className="space-y-6">
                <img
                  src='https://static.igem.wiki/teams/5649/homegraphics/jar-of-snacks-2.webp'
                  alt="A jar of snack capsules representing Snaccine, one capsule is open with phages spilling out"
                  className="w-full h-auto"
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
      </section>
    </div>
  );
}
