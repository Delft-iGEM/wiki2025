// src/contents/home.tsx
import { useEffect, useRef, useState } from "react";
import fullpage from "fullpage.js/dist/fullpage.js";
import "fullpage.js/dist/fullpage.css";

import { Inspirations, InspirationLink } from "../components/Inspirations";
import HamburgerMenu from "../components/hamburgermenu"; // tiny dropdown
import Pages from "../pages";

// --- images ---
const HERO_IMG =
  "https://static.igem.wiki/teams/5649/frontpagelogo/logo1.webp";
const CHICKEN_IMG =
  "https://static.igem.wiki/teams/5649/frontpagelogo/chicken-apoca-better.webp";
const CHICKEN_IMG_ALT =
  "https://static.igem.wiki/teams/5649/frontpagelogo/chicken-apoca-better-diff-colours-min.webp";
const HOME_BTN_IMG =
  "https://static.igem.wiki/teams/5649/frontpagelogo/g79.webp";

  


// Text you can edit anytime
const HERO_CAPTION = "a phage based edible vaccine";
// If you want a dramatic line under the hero later, set this; leave empty to hide
const HERO_HOOK = "";

export function Home() {
  const fpRef = useRef<any>(null);

  // SECTION 2 click-once color change (first slide)
  const [sec2Src, setSec2Src] = useState(CHICKEN_IMG);
  const [sec2Locked, setSec2Locked] = useState(false);
  const handleSec2Click = () => {
    if (sec2Locked) return;
    setSec2Src(CHICKEN_IMG_ALT);
    setSec2Locked(true);
  };

  const links: InspirationLink[] = [
    { year: 2024, teamName: "JU-Krakow", pageName: "" },
    { year: 2024, teamName: "GEMS-Taiwan", pageName: "" },
    { year: 2024, teamName: "Heidelberg", pageName: "" },
    { year: 2024, teamName: "Marburg", pageName: "" },
    { year: 2024, teamName: "Sydney-Australia", pageName: "" },
    { year: 2024, teamName: "Toulouse-INSA-UPS", pageName: "" },
    { year: 2024, teamName: "BNDS-China", pageName: "" },
    { year: 2024, teamName: "Vilnius-Lithuania", pageName: "" },
    { year: 2024, teamName: "BNUZH-China", pageName: "" },
    { year: 2024, teamName: "XMU-China", pageName: "" },
  ];

  useEffect(() => {
    // prevent double-initialization during HMR / restarts
    if ((window as any).fullpage_api) {
      try {
        (window as any).fullpage_api.destroy("all");
      } catch {}
    }

    const fp: any = new (fullpage as any)("#fullpage", {
      autoScrolling: true,
      navigation: true,
      anchors: ["hero", "chicken", "tips"],
      navigationTooltips: ["", "", ""],
      showActiveTooltip: false,
      scrollingSpeed: 800,

      // horizontal slides
      slidesNavigation: true,
      slidesNavPosition: "bottom",
      controlArrows: true,
      loopHorizontal: false,

      // Intercept: when leaving Section 2, go sideways first
      onLeave: (origin: any, _destination: any, direction: "up" | "down") => {
        const api = (window as any).fullpage_api; // use global API
        const sectionIdx = origin.index; // 0=hero, 1=chicken, 2=tips

        if (sectionIdx === 1 && direction === "down") {
          const slideIndex = api?.getActiveSlide?.()?.index ?? 0;
          if (slideIndex === 0) {
            api?.moveSlideRight();
            return false; // cancel vertical move
          }
        }

        if (sectionIdx === 1 && direction === "up") {
          const slideIndex = api?.getActiveSlide?.()?.index ?? 0;
          if (slideIndex > 0) {
            api?.moveSlideLeft();
            return false;
          }
        }

        return true;
      },
    });

    fpRef.current = fp;
    return () => fp?.destroy?.("all");
  }, []);

  return (
    <>
      {/* Tiny dropdown with site pages */}
      <HamburgerMenu pages={Pages as any} />

      {/* Top-left logo + label (label can use Montserrat via .toTopLabel) */}
      <div
        style={{
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 10060,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
        }}
      >
        <button
          aria-label="Go to first slide"
          onClick={() => (window as any).fullpage_api?.moveTo("hero")}
          style={{
            border: "none",
            background: "transparent",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <img
            src={HOME_BTN_IMG}
            alt="Home"
            style={{ height: 88, width: "auto", display: "block" }}
          />
        </button>

        <button
          onClick={() => (window as any).fullpage_api?.moveTo("hero")}
          className="toTopLabel"
          style={{
            border: "none",
            background: "transparent",
            padding: 0,
            cursor: "pointer",
            color: "#014458",
            fontSize: 16,
          }}
        >
          to the top
        </button>
      </div>

      {/* Fullpage content */}
      <div
        id="fullpage"
        style={{
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        }}
      >
        {/* SECTION 1 — sized image, centered + optional caption/hook */}
        <div
          className="section"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
          }}
        >
          <div style={{ width: "800px", maxWidth: "120vw", textAlign: "center" }}>
            <img
              src={HERO_IMG}
              alt="Hero"
              style={{ display: "block", width: "100%", height: "auto", margin: "0 auto" }}
            />
            <p className="heroCaption" style={{ marginTop: 10 }}>{HERO_CAPTION}</p>
            {HERO_HOOK && <p className="heroHook">{HERO_HOOK}</p>}
          </div>
        </div>

        {/* SECTION 2 — HORIZONTAL SLIDES */}
        <div className="section" style={{ padding: 0 }}>
          {/* Slide 1 — fullscreen image (click once to change color) */}
          <div className="slide">
            <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
              <img
                src={sec2Src}
                alt="Section 2 — Slide 1"
                onClick={handleSec2Click}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  cursor: sec2Locked ? "default" : "pointer",
                  transition: "opacity 150ms ease",
                }}
                role="button"
                aria-disabled={sec2Locked}
                loading="lazy"
              />
            </div>
          </div>

          {/* Slide 2 — replace with image/content you want */}
          <div className="slide">
            <div
              style={{
                position: "relative",
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 24,
                boxSizing: "border-box",
                background: "#0f0f0f",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <div style={{ maxWidth: 800 }}>
                <h2 style={{ marginBottom: 12 }}>What you just saw</h2>
                <p style={{ lineHeight: 1.5 }}>
                  Our edible, phage-based approach aims to protect the flock from the first bite.
                  Swipe/arrow left to see the artwork again, or scroll down to continue.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3 — Tips + Inspirations */}
        <div className="section">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-8">
                <h2>Tips for Success</h2>
                <hr />
                <ul>
                  <li><b>Define Your Project</b>: Clear goals & expected outcomes.</li>
                  <li><b>Show Progress</b>: Update with experiments and results.</li>
                  <li><b>Engage Everyone</b>: Use accessible language.</li>
                  <li><b>HP & Safety</b>: Document carefully.</li>
                  <li><b>Collaborate</b>: Highlight partnerships.</li>
                  <li><b>Have Fun</b>: Learn and build something great :)</li>
                </ul>
              </div>
              <Inspirations inspirationLinkList={links} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
