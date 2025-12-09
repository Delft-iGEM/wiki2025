import { Content, Header } from "@/components";
import { Link } from "react-router-dom";

export default function Awards() {
    return (
        <>
            <Header>
                <h1>awards</h1>
                <p>celebrating our achievements at the grand jamboree</p>
            </Header>
            <Content items="center">
                <div className="w-full max-w-4xl mx-auto space-y-8 px-4">
                    {/* Gold Medal Section */}
                    <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-4 border-yellow-400 rounded-2xl p-8 shadow-xl">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <img src="https://static.igem.org/websites/competition/2024/icons/medals/medal-gold-flat.svg" alt="Gold Medal" className="w-32 h-32" />
                            <h2 className="text-4xl font-bold text-amber-800">Gold Medal</h2>
                            <p className="text-xl text-amber-700 max-w-2xl">
                                We are proud to announce we have been awarded a Gold Medal 
                                at the iGEM 2025 Grand Jamboree, achieving excellence in all three specialisations!
                            </p>
                        </div>
                    </div>

                    {/* Achievement Details */}
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-8 pb-4 shadow-lg">
                        
                        <div className="prose max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-4">
                                This achievement represents months of work from our entire team. We won a gold medal and were deemed to have demonstrated excellence in not just one, but all three of our special awards (<Link to="/model" style={{textDecoration: "underline"}}>modelling</Link>, <Link to="/human-practices" style={{textDecoration: "underline"}}>human practices</Link>, and <Link to="/parts" style={{textDecoration: "underline"}}>composite part</Link>)!
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                We were the smallest team in the competition, and this accomplishment is a celebration of and testament to our dedication and hard work.
                                We are grateful to our supervisors, stakeholders, sponsors, and everyone who supported us.
                            </p>
                        </div>
                    </div>
                </div>
            </Content>
        </>
    );
}
