import { useState } from "react";
import MemberCard from "./MemberCard"

const pathBase= "https://static.igem.wiki/teams/5649/membersq/"
const ext = ".webp"

export function MembersGrid() {
  const [openCardId, setOpenCardId] = useState<string | null>(null);

  const handleCardToggle = (cardId: string) => {
    setOpenCardId((prev) => (prev === cardId ? null : cardId));
  };

  return (
<div className="mx-auto flex w-full max-w-7xl flex-wrap justify-center gap-x-3 px-8 pt-8 gap-y-10">
  <MemberCard firstName="Duncan" lastName="Whyte" src={pathBase+"duncan"+ext} alt="Duncan" role="Project Leader" isFlipped={openCardId === "duncan"} onToggle={() => handleCardToggle("duncan")} bio={
    <>
    <div className="flex items-center gap-2">
      <ScotlandFlag className="w-5 h-3" />
      <NetherlandsFlag className="w-5 h-3" />
      <span>Nanobiology BSc student</span>
      Bing bang bee, something about me
    </div>
    <br />
    </>
  } />
  <MemberCard firstName="Zofia" lastName="Wojciechowicz" src={pathBase+"zofia"+ext} alt="Zofia" role="Finance and Outreach Manager" isFlipped={openCardId === "zofia"} onToggle={() => handleCardToggle("zofia")} bio={
    <>
    <div className="flex items-center gap-2">
      <PolandFlag className="w-5 h-3" />
      <span>Nanobiology BSc student</span>
    </div>
    </>
  } flipped />
  <MemberCard firstName="Tessa" lastName="Ernst" src={pathBase+"tessa"+ext} alt="Tessa" role="Human Practices Manager" isFlipped={openCardId === "tessa"} onToggle={() => handleCardToggle("tessa")} bio={
    <>
    <div className="flex items-center gap-2">
      <GermanyFlag className="w-5 h-3" />
      <span>Nanobiology BSc student</span>
    </div>
    </>
  } />
  <MemberCard firstName="Krzysztof" lastName="Zabłocki" src={pathBase+"krzysztof"+ext} alt="Krzysztof" role="Wet Lab Manager" isFlipped={openCardId === "krzysztof"} onToggle={() => handleCardToggle("krzysztof")} bio={
    <>
    <div className="flex items-center gap-2">
      <PolandFlag className="w-5 h-3" />
      <span>Nanobiology BSc student</span>
    </div>
    </>
  } flipped />
  <MemberCard firstName="Viktor" lastName="Gilin" src={pathBase+"viktor"+ext} alt="Viktor" role="Dry Lab Manager" isFlipped={openCardId === "viktor"} onToggle={() => handleCardToggle("viktor")} bio={
    <>
    <div className="flex items-center gap-2">
      <BulgariaFlag className="w-5 h-3" />
      <span>Nanobiology BSc student</span>
    </div>
    </>
  } />
  <MemberCard firstName="Franciszek" lastName="Koliński" src={pathBase+"franek"+ext} alt="Franek" role=" Wiki and Graphic Design Manager" isFlipped={openCardId === "franek"} onToggle={() => handleCardToggle("franek")} bio={
    <>
    <div className="flex items-center gap-2">
      <PolandFlag className="w-5 h-3" />
      <span>Nanobiology BSc student</span>
    </div>
    </>
  } flipped />
</div>)
}



// Flag SVG Components
function ScotlandFlag({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="40" fill="#0065BD"/>
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="white" strokeWidth="6"/>
    </svg>
  )
}

function NetherlandsFlag({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="13.33" fill="#AE1C28"/>
      <rect width="60" height="13.33" y="13.33" fill="white"/>
      <rect width="60" height="13.33" y="26.67" fill="#21468B"/>
    </svg>
  )
}

function PolandFlag({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="20" fill="white"/>
      <rect width="60" height="20" y="20" fill="#DC143C"/>
    </svg>
  )
}

function GermanyFlag({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="13.33" fill="#000000"/>
      <rect width="60" height="13.33" y="13.33" fill="#DD0000"/>
      <rect width="60" height="13.33" y="26.67" fill="#FFCE00"/>
    </svg>
  )
}

function BulgariaFlag({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="13.33" fill="white"/>
      <rect width="60" height="13.33" y="13.33" fill="#00966E"/>
      <rect width="60" height="13.33" y="26.67" fill="#D62612"/>
    </svg>
  )
}
