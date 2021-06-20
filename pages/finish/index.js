import Bubble from "../../components/campagne/Bubble";

export default function Finish () {

    const content = {
        title: "Sorry to burst your bubble", 
        partOne: "Je zat vast in je eigen filter bubble waardoor je geen controle meer had over jouw antwoorden. Dit gebeurt in de online wereld elke dag.",
        partTwo: "Ontdek wat je zelf kan doen om terug de controle te krijgen over jouw online gedrag."
    }

    const shareUrl = `${process.env.NEXT_PUBLIC_URL}/start`;

    return (
        <Bubble url={shareUrl} input={content}/>
    )
}