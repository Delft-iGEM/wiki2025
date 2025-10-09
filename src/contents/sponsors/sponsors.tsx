import { Link } from "react-router-dom";
import { Content, Header, AccentLine } from "@/components";
import companiesData from "./companies.json";
import donorsData from "./donors.json";

type Company = {
    name: string;
    url: string;
    logo?: string;
    description: string;
};

type Donor = {
    name: string;
    description?: string;
};

const companies = companiesData as Company[];
const donors = donorsData as Donor[];
const DEFAULT_DONOR_DESCRIPTION = "Crowdfunding supporter";
const COMPANY_LOGO_BASE_URL = "https://static.igem.wiki/teams/5649/sponsorlogos/";
const DEFAULT_COMPANY_LOGO = "https://static.igem.wiki/teams/5649/svg/mainlogowithsubtitle.svg";

export default function Sponsors() {
    return (
        <>
            <Header>
                <div className="htitle">our sponsors</div>
                <div className="hsubtitle">supporting innovation in synthetic biology</div>
            </Header>

            <Content items="center" wide>
                {/* Hero Section */}
                <div className="relative overflow-hidden pb-8 text-center">

                    <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Partnership & Innovation
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                        We are deeply grateful to our sponsors whose generous support makes our research and innovation possible.
                        Their commitment to advancing synthetic biology and supporting student-driven research is invaluable to the success of Team TU Delft.
                    </p>
                    <AccentLine className="mx-auto" />

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {companies.map((sponsor) => (
                        <Link
                            key={sponsor.name}
                            to={sponsor.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden flex flex-col items-center p-8 bg-card rounded-3xl border border-border transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5"
                        >
                            <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"></div>
                            <div className="absolute -bottom-4 -left-4 h-12 w-12 rounded-full bg-gradient-to-br from-accent/10 to-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12"></div>

                            <div className="relative flex items-center justify-center h-28 w-full mb-6 rounded-2xl bg-gradient-to-br from-background/50 to-card/50 backdrop-blur-sm border border-border/50 group-hover:border-primary/20 transition-all duration-300">
                                <img
                                    src={(() => {
                                        if (!sponsor.logo) return DEFAULT_COMPANY_LOGO;
                                        if (sponsor.logo.includes("://")) return sponsor.logo;
                                        return `${COMPANY_LOGO_BASE_URL}${sponsor.logo}`;
                                    })()}
                                    alt={sponsor.name}
                                    className="max-h-20 w-auto object-contain transition-all duration-300 filter group-hover:brightness-110"
                                />
                            </div>
                            <div className="relative text-center space-y-3">
                                <h3 className="font-bold text-xl group-hover:text-primary transition-all duration-300">{sponsor.name}</h3>
                                <p className="text-sm text-muted-foreground text-balance leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                                    {sponsor.description}
                                </p>
                            </div>

                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                                    <svg className="h-3 w-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mb-6 text-center w-full">
                    <h2 className="text-2xl font-semibold">Our generous donors</h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {donors.map((sponsor) => (
                        <div
                            key={sponsor.name}
                            className="group relative overflow-hidden flex flex-row items-center w-full p-6 bg-muted rounded-lg border border-border/30 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                        >
                            {/* Subtle decorative accent */}
                            <div className="absolute -top-3 -right-3 h-10 w-10 rounded-full bg-primary/5 transition-all duration-300 group-hover:scale-105"></div>

                            {/* Avatar with initials (left) */}
                            <div className="flex-shrink-0 mr-6">
                                <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-xl">
                                    {(() => {
                                        const parts = sponsor.name.split(" ").filter(Boolean);
                                        if (parts.length === 0) return "";
                                        if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
                                        const first = parts[0][0];
                                        const last = parts[parts.length - 1][0];
                                        return (first + last).toUpperCase();
                                    })()}
                                </div>
                            </div>

                            {/* Text (right) */}
                            <div className="flex-1 text-left">
                                <h3 className="font-semibold text-xl group-hover:text-primary transition-colors duration-200">{sponsor.name}</h3>
                                <p className="text-base text-muted-foreground leading-relaxed">{sponsor.description?.trim() || DEFAULT_DONOR_DESCRIPTION}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </Content>
        </>
    );
}
