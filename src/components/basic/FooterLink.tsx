interface FooterLinkProps {
    readonly href: string;
    readonly children: React.ReactNode;
    readonly external?: boolean;
}

export function FooterLink({ href, children, external = false }: FooterLinkProps) {
    return (
        <a
            href={href}
            className="text-secondary-foreground hover:text-brand transition-colors duration-200 inline-flex items-center-safe gap-1"
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        >
            {children}
            {external && (
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="h-3" viewBox="-10 0 800 800">
                    <path fill="currentColor" d="M80 160h32h13h83h28c11 0 20 8 20 19v58c0 11 -9 19 -20 19h-28h-96c-9 0 -16 7 -16 16v416c0 9 7 16 16 16h416c9 0 16 -7 16 -16v-96v-29c0 -11 8 -19 19 -19h57c11 0 20 8 20 19v29v66v30v32c0 44 -36 80 -80 80h-32h-416h-32c-44 0 -80 -36 -80 -80v-32v-416v-32 c0 -44 36 -80 80 -80zM464 0h36h240c33 0 60 27 60 60v240v27v9c0 6 -2 12 -7 17s-11 7 -17 7h-54h-18c-6 0 -12 -2 -17 -7s-7 -11 -7 -17v-36v-95l-238 237l-25 26c-4 4 -10 7 -17 7s-13 -3 -17 -7l-51 -51c-4 -4 -7 -10 -7 -17s3 -13 7 -17l25 -25l238 -238h-95h-27h-9 c-6 0 -12 -2 -17 -7s-7 -11 -7 -17v-72c0 -6 2 -12 7 -17s11 -7 17 -7z" />
                </svg>
            )}
        </a>
    );
}