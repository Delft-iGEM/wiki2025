import { useState } from "react";
import { Link } from "react-router-dom";
import MemberCard from "./MemberCard";

const pathBase = "https://static.igem.wiki/teams/5649/membersq/";
const ext = ".webp";

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
              className="external-link"
              to="https://www.linkedin.com/in/duncan-whyte-455327325"
              target="_blank"
              rel="noopener noreferrer"
            >
              Duncan Whyte - LinkedIn profile
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
              className="external-link"
              to="https://www.linkedin.com/in/zofia-wojciechowicz-793131341"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zofia Wojciechowicz - LinkedIn profile
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
              className="external-link"
              to="https://www.linkedin.com/in/tessa-e-2314b2322"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tessa Ernst - LinkedIn profile
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
              className="external-link"
              to="https://www.linkedin.com/in/krzysztof-zab%C5%82ocki-58776a26b"
              target="_blank"
              rel="noopener noreferrer"
            >
              Krzysztof Zabłocki - LinkedIn profile
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
              className="external-link"
              to="https://www.linkedin.com/in/viktor-gilin-630100376"
              target="_blank"
              rel="noopener noreferrer"
            >
              Viktor Gilin - LinkedIn profile
            </Link>
          </>
        }
      />
      <MemberCard
        firstName="Franciszek"
        lastName="Koliński"
        src={`${pathBase}franek${ext}`}
        role="Graphic design and wiki coding"
        isFlipped={openCardId === "franek"}
        onToggle={() => handleCardToggle("franek")}
        bio={
          <>
            <span>Nanobiology BSc student</span>
            <br />
            <Link
              className="external-link"
              to="https://www.linkedin.com/in/franciszek-kolinski-7934b8389"
              target="_blank"
              rel="noopener noreferrer"
            >
              Franciszek Koliński - LinkedIn profile
            </Link>
          </>
        }
        flipped
      />
    </div>
  );
}


