# Snaccine Wiki · TU Delft iGEM 2025

The TU Delft iGEM 2025 team is building **Snaccine**: a modular, oral vaccine platform that couples engineered T7 bacteriophages with MS2 virus-like particles (VLPs) to safely deliver RNA payloads in the gut. This repository contains the code for our public wiki, which documents the research, engineering progress, and human practices behind the project.

Images, illustrations, and fonts must continue to be hosted on [static.igem.wiki](https://static.igem.wiki) via [tools.igem.org](https://tools.igem.org), and videos must be embedded from [iGEM Video Universe](https://video.igem.org). Refer to the official deliverable checklist for the latest compliance expectations.

## Project Snapshot

- **Snaccine vision:** engineer T7 phages so that a single infection event programs *E. coli* to produce immunogenic MS2 VLPs carrying therapeutic RNA cargos.
- **Wetlab modules:**
  - **Module A – T7 engineering:** establish plaque assays, DNA purification, and genome editing workflows with fluorescent read-outs.
  - **Module B – Stability:** characterize phage viability across food-relevant conditions and simulated gastrointestinal environments.
  - **Module C – VLP production:** express MS2 maturation and coat proteins in BL21(DE3), validate folding via SDS-PAGE, and confirm capsid assembly with TEM.
  - **Module D – Delivery:** evaluate how purified VLPs transfer cargo into mammalian cells.
  - **Module E – Immunogenicity:** profile APC maturation, cytokine release, and safety windows for oral delivery.
- **Recent highlight:** SDS-PAGE and TEM analysis verified that our synthetic MS2 construct yields soluble coat protein that self-assembles into ~25–30 nm VLPs, establishing the foundation for downstream RNA encapsulation experiments (see `src/mdx/project/results.mdx`).

## Tech Stack

- [React 19](https://react.dev) + [React Router 7](https://reactrouter.com/) for client-side navigation.
- [TypeScript 5](https://www.typescriptlang.org/) and [Vite 7](https://vitejs.dev/) for fast, typed development.
- [Tailwind CSS 4](https://tailwindcss.com/) with `@tailwindcss/vite`, `tailwind-merge`, and `class-variance-authority` for design tokens and utility composition.
- MDX content authored with `@mdx-js/react`, enriched by remark/rehype plugins for math (KaTeX) and syntax highlighting (Starry Night).
- Shared UI primitives powered by [Radix UI](https://www.radix-ui.com/) and [shadcn/ui](https://ui.shadcn.com/) conventions.

## Repository Layout

```text
├── index.html            # App mounting shell used by Vite
├── src/
│   ├── App.tsx           # Router, navigation, and layout wiring
│   ├── main.tsx          # Vite/React entry point
│   ├── App.css           # Global styles (largely Tailwind-driven)
│   ├── components/       # Reusable UI (navbar, footer, schematic, etc.)
│   ├── contents/         # TSX pages that pull structured data
│   ├── mdx/              # MDX-driven research narratives and reports
│   ├── lib/              # Shared logic wrappers (e.g., MDX providers)
│   └── utils/            # Helpers such as routing path mappers
├── public/               # (optional) Static assets served by Vite
├── package.json          # Scripts, metadata, dependency manifest
├── tsconfig*.json        # TypeScript configuration targets
├── vite.config.ts        # Build and MDX integration settings
└── LICENSE               # Team-wide license (CC-BY-4.0)
```

Content authors can add new wiki sections in two complementary ways:

1. **MDX pages** in `src/mdx/**` for narrative-heavy sections (Project, Wetlab, Human Practices, etc.).
2. **Typed React components** in `src/contents/**` when bespoke interactivity or data fetching is required. New pages are routed by registering them in the `Pages` array inside `src/App.tsx`.

## Getting Started

> 🛠️ Prerequisites: Node.js **18.18+ (or ≥20)** and Yarn 1 (a `yarn.lock` is provided). Check your version with `node -v`.

1. Clone and enter the repository:

   ```powershell
   git clone https://gitlab.igem.org/2025/tu-delft
   cd tu-delft
   ```

2. Install dependencies:

   ```powershell
   yarn install
   ```

3. Start the local development server:

   ```powershell
   yarn dev
   ```

   Vite will print a local URL (default `http://localhost:5173`). Hot Module Replacement is enabled for React, MDX, and Tailwind sources.
4. Build the production bundle:

   ```powershell
   yarn build
   ```

5. Preview the static build locally (uses the output of `yarn build`):

   ```powershell
   yarn preview
   ```

### Additional Scripts

- `yarn lint` – runs ESLint with the project ruleset.
- `yarn format` – applies Prettier across TypeScript, MDX, CSS, and JSON files.

## Research Content Workflow

- **Wetlab experiment reports:** update the MDX modules in `src/mdx/wetlab/` (e.g., `experiments.mdx`, `results.mdx`). Each file imports shared layout components from `@/components` for consistent styling.
- **Team and attribution pages:** live in `src/mdx/team/` and `src/contents/attributions.tsx` so that structured data (e.g., contributor cards) can stay typed.
- **Interactive elements:** complex visuals such as the home-page schematic reside in `src/components/Interactive_schematic.tsx` and can be reused inside MDX via MDX provider bindings.

Ensure any raw data, figures, or spreadsheets referenced on the wiki are mirrored in the team's official documentation repositories and linked appropriately.

## Licensing

- **Project license:** All original wiki content is released under the [Creative Commons Attribution 4.0 International (CC-BY-4.0)](LICENSE) license, matching iGEM requirements.
- **Third-party packages:**

  | Package | License | Purpose |
  | --- | --- | --- |
  | @mdx-js/react | MIT | Render MDX blocks inside React routes |
  | @mdx-js/rollup | MIT | Compile MDX during the Vite build |
  | @radix-ui/react-accordion | MIT | Accessible disclosure widgets |
  | @radix-ui/react-dropdown-menu | MIT | Accessible navigation menus |
  | @tailwindcss/vite | MIT | Tailwind CSS integration for Vite 7 |
  | class-variance-authority | Apache-2.0 | Compose variant-aware class names |
  | clsx | MIT | Conditional class name helper |
  | lucide-react | ISC | Icon system |
  | react / react-dom | MIT | Core UI framework |
  | react-router-dom | MIT | Client-side routing |
  | rehype-starry-night | MIT | Syntax highlighting for code fences |
  | remark-gfm | MIT | GitHub-flavored Markdown extensions |
  | shadcn | MIT | Component scaffolding CLI used by the design system |
  | tailwind-merge | MIT | Tailwind class deduplication |
  | tailwindcss | MIT | Utility-first styling framework |

Licenses were verified from each package’s `package.json` (see `node_modules/<package>/package.json`). Review this table whenever you upgrade dependencies or add new packages to ensure continued compliance with CC-BY redistribution.

## Compliance Checklist

- ✅ All source code for the wiki lives in this repository.
- ✅ External assets are hosted via the official iGEM CDN and video platform.
- ✅ Research pages are version-controlled through MDX/TSX files within `src/`.
- ✅ Dependency licenses are tracked to maintain compatibility with CC-BY distribution.

For the latest deliverable requirements, consult the [iGEM wiki handbook](https://competition.igem.org/deliverables/team-wiki). Contributions are welcome via pull requests; please include context in commit messages so fellow team members can trace updates back to experimental progress.
