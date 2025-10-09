import { useState } from "react";
import { Link } from "react-router-dom";
import MemberCard from "./MemberCard";

const pathBase = "https://static.igem.wiki/teams/5649/membersq/";
const ext = ".webp";

const LinkedICO = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M47.991 23.967V7.91c0-1.487.023-2.974 0-4.462A3.458 3.46 0 0044.455 0H3.535A3.512 3.514 0 00.007 3.717v40.908A3.5 3.503 0 003.48 48h41.014a3.29 3.292 0 001.68-.45 3.52 3.523 0 001.816-3.285l.002-20.298zM13.853 40.89q-3.202-.023-6.404 0c-.267 0-.328-.077-.326-.333V18.313c0-.265.079-.328.335-.326q3.218.022 6.437 0c.266 0 .329.079.326.335v22.213c.023.294-.09.355-.368.355zm-3.148-26.013a4.135 4.138 0 114.132-4.153 4.141 4.144 0 01-4.139 4.153zM40.91 36.291v4.275c0 .267-.076.324-.332.324q-3.22-.023-6.44 0c-.28 0-.368-.063-.366-.36q.022-5.909 0-11.817a8.555 8.561 0 00-.416-2.847 3.033 3.035 0 00-2.851-2.178 5.445 5.45 0 00-1.866.158 3.471 3.474 0 00-2.433 2.412 9.956 9.963 0 00-.43 3.224q-.022 5.515 0 11.025c0 .313-.087.378-.384.376q-3.147-.023-6.313 0c-.33 0-.387-.1-.387-.405q.023-5.53 0-11.063-.022-5.533 0-11.093c0-.279.072-.349.349-.346q3.062.022 6.124 0c.261 0 .34.07.333.333-.023.86 0 1.719 0 2.576 0 .076-.047.187.063.225.11.038.112-.072.148-.133a7.159 7.164 0 015.268-3.424 10.28 10.287 0 015.282.524 6.372 6.376 0 013.822 4.066 13.823 13.833 0 01.748 4.03c.158 3.372.048 6.747.075 10.118z" />
  </svg>
);

export function MembersGrid() {
  const [openCardId, setOpenCardId] = useState<string | null>(null);

  const handleCardToggle = (cardId: string) => {
    setOpenCardId((prev) => (prev === cardId ? null : cardId));
  };

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-wrap justify-center gap-x-3 px-8 pt-8 gap-y-10">
      <MemberCard
        firstName="Duncan"
        lastName="Whyte"
        src={`${pathBase}duncan${ext}`}
        role="Project Leader"
        isFlipped={openCardId === "duncan"}
        onToggle={() => handleCardToggle("duncan")}
        bio={
          <>
            <span>Nanobiology BSc student</span>
            <br />
            <Link
              className="external-link inline-flex items-center gap-2"
              to="https://www.linkedin.com/in/duncan-whyte-455327325"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedICO />
              Duncan Whyte
            </Link>
          </>
        }
      />
      <MemberCard
        firstName="Zofia"
        lastName="Wojciechowicz"
        src={`${pathBase}zofia${ext}`}
        role="Finance and Outreach Manager"
        isFlipped={openCardId === "zofia"}
        onToggle={() => handleCardToggle("zofia")}
        bio={
          <>
            <span>Nanobiology BSc student</span>
            <br />
            <Link
              className="external-link inline-flex items-center gap-2"
              to="https://www.linkedin.com/in/zofia-wojciechowicz-793131341"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedICO />
              Zofia Wojciechowicz
            </Link>
          </>
        }
        flipped
      />
      <MemberCard
        firstName="Tessa"
        lastName="Ernst"
        src={`${pathBase}tessa${ext}`}
        role="Human Practices Manager"
        isFlipped={openCardId === "tessa"}
        onToggle={() => handleCardToggle("tessa")}
        bio={
          <>
            <span>Nanobiology BSc student</span>
            <br />
            <Link
              className="external-link inline-flex items-center gap-2"
              to="https://www.linkedin.com/in/tessa-e-2314b2322"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedICO />
              Tessa Ernst
            </Link>
          </>
        }
      />
      <MemberCard
        firstName="Krzysztof"
        lastName="Zabłocki"
        src={`${pathBase}krzysztof${ext}`}
        role="Wet Lab Manager"
        isFlipped={openCardId === "krzysztof"}
        onToggle={() => handleCardToggle("krzysztof")}
        bio={
          <>
            <span>Nanobiology BSc student</span>
            <br />
            <Link
              className="external-link inline-flex items-center gap-2"
              to="https://www.linkedin.com/in/krzysztof-zab%C5%82ocki-58776a26b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedICO />
              Krzysztof Zabłocki
            </Link>
          </>
        }
        flipped
      />
      <MemberCard
        firstName="Viktor"
        lastName="Gilin"
        src={`${pathBase}viktor${ext}`}
        role="Dry Lab Manager"
        isFlipped={openCardId === "viktor"}
        onToggle={() => handleCardToggle("viktor")}
        bio={
          <>
            <span>Nanobiology MSc student</span>
            <br />
            <Link
              className="external-link inline-flex items-center gap-2"
              to="https://www.linkedin.com/in/viktor-gilin-630100376"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedICO />
              Viktor Gilin
            </Link>
          </>
        }
      />
      <MemberCard
        firstName="Franciszek"
        lastName="Koliński"
        src={`${pathBase}franek${ext}`}
        role="Discussion in progress.."
        isFlipped={openCardId === "franek"}
        onToggle={() => handleCardToggle("franek")}
        bio={
          <>
            <span>Nanobiology BSc student</span>
            <br />
            <Link
              className="external-link inline-flex items-center gap-2"
              to="https://www.linkedin.com/in/franciszek-kolinski-7934b8389"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedICO />
              Franciszek Koliński
            </Link>
          </>
        }
        flipped
      />
    </div>
  );
}


