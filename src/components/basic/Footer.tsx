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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* About section */}
          <div className="lg:col-span-1">
            <FooterSection title="About Our Project">
              <p className="text-secondary-foreground leading-relaxed">
                We are developing innovative solutions in synthetic biology to address real-world challenges. 
                Our team combines cutting-edge research with practical applications to make a positive impact.
              </p>
            </FooterSection>
          </div>

          {/* Quick links */}
          <div>
            <FooterSection title="Quick Links">
              <ul className="space-y-3">
                <li><FooterLink href="./project">Project Overview</FooterLink></li>
                <li><FooterLink href="./results">Results</FooterLink></li>
                <li><FooterLink href="./safety-and-security">Safety</FooterLink></li>
                <li><FooterLink href="./human-practices">Human Practices</FooterLink></li>
                <li><FooterLink href="./members">Team Members</FooterLink></li>
                <li><FooterLink href="./notebook">Lab Notebook</FooterLink></li>
              </ul>
            </FooterSection>
          </div>

          {/* Contact information */}
          <div>
            <FooterSection title="Contact">
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
            <div className="flex space-x-6">
              <FooterLink href="./safety-and-security">Safety</FooterLink>
              <FooterLink href="./attributions">Attributions</FooterLink>
            </div>
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
