import MemberCard from "./MemberCard"

const pathBase= "https://static.igem.wiki/teams/5649/membersq/"
const ext = ".webp"

export function MembersGrid() {
  return (
<div className="w-full max-w-7xl mx-auto px-20 sm:px-20 lg:px-30 pt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
  <MemberCard firstName="Duncan" lastName="Whyte" src={pathBase+"duncan"+ext} alt="Duncan" role="Project Leader" />
  <MemberCard firstName="Zofia" lastName="Wojciechowicz" src={pathBase+"zofia"+ext} alt="Zofia" role="Finance and Outreach Manager" />
  <MemberCard firstName="Tessa" lastName="Ernst" src={pathBase+"tessa"+ext} alt="Tessa" role="Human Practices Manager" />
  <MemberCard firstName="Krzysztof" lastName="Zabłocki" src={pathBase+"krzysztof"+ext} alt="Krzysztof" role="Wet Lab Manager"/>
  <MemberCard firstName="Viktor" lastName="Gilin" src={pathBase+"viktor"+ext} alt="Viktor" role="Dry Lab Manager"/>
  <MemberCard firstName="Franciszek" lastName="Koliński" src={pathBase+"franek"+ext} alt="Franek" role="Graphical Design" />
</div>)
}
