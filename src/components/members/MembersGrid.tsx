import MemberCard from "./MemberCard"

const pathBase= "https://static.igem.wiki/teams/5649/membersq/"
const ext = ".webp"

export function MembersGrid() {
  return (
<div className=" pt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
  <MemberCard name="Duncan" src={pathBase+"duncan"+ext} alt="Duncan" />
  <MemberCard name="Zofia" src={pathBase+"zofia"+ext} alt="Zofia" />
  <MemberCard name="Tessa" src={pathBase+"tessa"+ext} alt="Tessa" />
  <MemberCard name="Krzysztof" src={pathBase+"krzysztof"+ext} alt="Krzysztof" />
  <MemberCard name="Viktor" src={pathBase+"viktor"+ext} alt="Viktor" />
  <MemberCard name="Franek" src={pathBase+"franek"+ext} alt="Franek" />
</div>)
}
