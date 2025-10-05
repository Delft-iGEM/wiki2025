/* Footer */
/* MUST mention license AND have a link to team wiki's repository on gitlab.igem.org */
import { stringToSlug } from "../../utils";
import { FooterSection } from "./FooterSection";
import { FooterLink } from "./FooterLink";

export function Footer() {
  const teamYear = import.meta.env.VITE_TEAM_YEAR;
  const teamName = import.meta.env.VITE_TEAM_NAME;
  const teamSlug = stringToSlug(teamName);

  return (
    <footer className="bg-gradient-to-t from-accent-foreground  to-secondary text-secondary-foreground mt-16">
      <div className="max-container py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* About section */}
          <div className="lg:col-span-3">
            <FooterSection title="about our project">
              <p className="text-secondary-foreground leading-relaxed">
                <em>Snaccine</em> is a phage-based edible vaccine. 
                Using bacteriophages in acid-resistant pills, we hijack
                gut bacteria to produce an mRNA vaccine. <em>Snaccines</em> can be stored
                at room temperature, where mRNA vaccines need ultra-cold storage.
              <FooterLink href="./description"><b>Learn more...</b></FooterLink>
              </p>
            </FooterSection>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <FooterSection title="quick links">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                <li><FooterLink href="./">home</FooterLink></li>
                <li><FooterLink href="./description">project overview</FooterLink></li>
                <li><FooterLink href="./results">results</FooterLink></li>
                <li><FooterLink href="./safety-and-security">safety</FooterLink></li>
                <li><FooterLink href="./human-practices">human practices</FooterLink></li>
                <li><FooterLink href="./members">team members</FooterLink></li>
              </ul>
            </FooterSection>
          </div>

          {/* Contact information */}
          <div className="lg:col-span-1">
            <FooterSection title="contact">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-secondary-foreground opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-secondary-foreground">TU Delft, Netherlands</p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-secondary-foreground opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <FooterLink href="mailto:igem@tudelft.nl">igem@tudelft.nl</FooterLink>
                </div>
              </div>
            </FooterSection>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border"></div>

        {/* The following MUST be on every page: license information and link to the repository on gitlab.igem.org */}
        <div className="mt-8 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-secondary-foreground opacity-80">
              <p>
                © {new Date().getFullYear()} - Content on this site is licensed under a{" "}
                <FooterLink
                  href="https://creativecommons.org/licenses/by/4.0/"
                  external
                >
                  Creative Commons Attribution 4.0 International license
                </FooterLink>
                .
              </p>
            </div>
            {/*<div className="flex space-x-6">
              <FooterLink href="./safety-and-security">Safety</FooterLink>
              <FooterLink href="./attributions">Attributions</FooterLink>
            </div>*/}
          </div>
          <div className="text-sm text-secondary-foreground opacity-80">
            <p>
              The repository used to create this website is available at{" "}
              <FooterLink
                href={`https://gitlab.igem.org/${teamYear}/${teamSlug}`}
                external
              >
                gitlab.igem.org/{teamYear}/{teamSlug}
              </FooterLink>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
