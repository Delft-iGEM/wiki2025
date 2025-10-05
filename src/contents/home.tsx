import { Link } from "react-router-dom";
import { AccentLine } from "@/components/ui/accent-line";

const featureHighlights = [
  {
    title: "Room-temperature stable",
    description:
      "Snaccines can be shipped and stored without an expensive cold chain, unlocking access for remote communities.",
  },
  {
    title: "Oral, painless delivery",
    description:
      "Our bacteriophage capsules survive the gut to deliver mRNA right where it is needed—no needles required.",
  },
  {
    title: "Rapid reprogramming",
    description:
      "From genome to pill in days. Tailor vaccines quickly to new influenza strains or emerging pathogens.",
  },
  {
    title: "Affordable production",
    description:
      "Bacteria grow the payload for us, reducing complex chemistry steps and putting mass immunisation within reach.",
  },
];

const quickLinks = [
  {
    title: "Project Description",
    copy: "Dive into the science behind Snaccine and the engineering choices that make it possible.",
    to: "/description",
  },
  {
    title: "Engineering Success",
    copy: "See how we iterated on our designs, validated parts, and built a robust experimental framework.",
    to: "/engineering",
  },
  {
    title: "Meet the Team",
    copy: "Get to know the multidisciplinary group of students making Snaccine a reality.",
    to: "/members",
  },
];

export function Home() {
  return (
    <div className="flex flex-col gap-24">
      <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-section via-background to-section px-6 py-20 shadow-lg sm:px-12">
        <AccentLine className="mb-6" />
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div className="space-y-6 text-balance">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">TU Delft iGEM 2025</p>
            <h1 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Snaccine: oral mRNA vaccines grown by phages
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              We harness engineered bacteriophages living in the gut to grow protected mRNA vaccines right where
              they are needed. The result is a stable, low-cost, needle-free platform to shield poultry and people
              from fast-moving influenza outbreaks.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/description"
                className="inline-flex min-w-[10rem] items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                Explore the science
              </Link>
              <Link
                to="/members"
                className="inline-flex min-w-[10rem] items-center justify-center rounded-full border border-border px-6 py-3 text-base font-semibold text-foreground transition hover:border-accent hover:text-accent"
              >
                Meet the team
              </Link>
            </div>
            <dl className="grid gap-6 sm:grid-cols-3">
              <div>
                <dt className="text-sm text-muted-foreground">Cold-chain savings</dt>
                <dd className="text-2xl font-semibold">−80&nbsp;°C → 20&nbsp;°C</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Delivery route</dt>
                <dd className="text-2xl font-semibold">Oral capsules</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Production time</dt>
                <dd className="text-2xl font-semibold">Days, not months</dd>
              </div>
            </dl>
          </div>
          <div className="relative mx-auto w-full max-w-xl rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-sm">
            <div className="absolute -top-6 right-12 hidden h-14 w-14 rotate-12 rounded-xl border border-accent/60 bg-accent/10 md:block" />
            <div className="absolute -bottom-8 left-10 hidden h-16 w-16 -rotate-6 rounded-full border border-primary/40 bg-primary/10 md:block" />
            <figure className="relative flex flex-col gap-4">
              <img
                src='https://static.igem.wiki/teams/5649/homegraphics/jar-of-snacks-2.webp'
                alt="Four illustrated steps showing the Snaccine workflow from phage to immune response"
              />
              <figcaption className="text-sm text-muted-foreground">
                Our vaccine will be delivered in ready-to-use capsules
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <div className="space-y-4 text-center">
          <AccentLine className="mx-auto" />
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Why Snaccine changes the playbook</h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground">
            Influenza devastates poultry industries and endangers public health worldwide. Snaccine tackles the twin
            challenges of rapid mutation and fragile logistics with a platform built for accessibility and speed.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featureHighlights.map((feature) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand/0 via-brand/0 to-brand/5 opacity-0 transition group-hover:opacity-100" />
              <div className="relative space-y-3">
                <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                <p className="text-base text-muted-foreground">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-section/60 py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-4">
            <AccentLine />
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Four steps from phage to protection</h2>
            <p className="text-base text-muted-foreground">
              Engineered bacteriophages enter the gut, replicate their instructions inside a safe host microbe, package
              mRNA into protective MS2 virus-like particles, and deliver antigens to the immune system. Each stage is
              designed to be modular, letting us swap payloads or targeting strategies as new threats emerge.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/results"
                className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
              >
                Review our experimental data
              </Link>
              <Link
                to="/human-practices"
                className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
              >
                Explore human practices
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <img
              src='https://static.igem.wiki/teams/5649/svg/4step-min.svg'
              alt="Four illustrated steps showing the Snaccine workflow from phage to immune response"
              className="mx-auto w-full max-w-xl drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-24 sm:px-6">
        <div className="space-y-4 text-center">
          <AccentLine className="mx-auto" />
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Jump into the details</h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground">
            From wet lab notebooks to inclusive design, our documentation captures the story of Snaccine. Pick a page
            to start exploring.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              to={link.to}
              className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-lg"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary group-hover:text-accent">{link.title}</h3>
                <p className="text-sm text-muted-foreground">{link.copy}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3">
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <line x1="5" x2="19" y1="12" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
