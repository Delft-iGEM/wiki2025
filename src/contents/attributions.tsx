import { Content, Header } from "@/components";

import { useEffect } from "react";


 export default function Attributions() {
    const teamID = import.meta.env.VITE_TEAM_ID;

    useEffect(() => {
        function listenToIframeHeight(e: MessageEvent) {
            if (e.origin === "https://teams.igem.org") {
                const { type, data } = JSON.parse(e.data);
                if (type === "igem-attribution-form") {
                    const element = document.getElementById("igem-attribution-form");
                    if (element) {
                        element.style.height = `${data + 100}px`;
                    }
                }
            }
        }
        window.addEventListener("message", listenToIframeHeight);
        return () => {
            window.removeEventListener("message", listenToIframeHeight);
        };
    }, []);
    return (
        <>
            <Header>
                <h1>attributions</h1>
                <p>all the amazing people that contributed to our project</p>
            </Header>
            <Content items="center">
                <iframe
                    title="igem-attribution-form"
                    style={{ width: "100%" }}
                    id="igem-attribution-form"
                    src={`https://teams.igem.org/wiki/${teamID}/attributions`}
                />
            </Content>
        </>);
}