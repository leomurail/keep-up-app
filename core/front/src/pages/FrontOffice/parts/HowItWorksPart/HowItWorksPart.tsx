import "./HowItWorksPart.css";
import Button from "../../components/Button/Button";
import HowItWorkCard from "../../components/HowItWorkCard/HowItWorkCard";

export default function HowItWorksPart() {
  return (
    <section id="how-it-works-part">
      <h2>Comment ça marche ?</h2>
      <div className="how-it-works-step">
        <HowItWorkCard text="Connecte ton Telegram" number={1} />
        <HowItWorkCard text="Sélectionne tes airdrops" number={2} />
        <HowItWorkCard text="Reçois les notifs" number={3} />
        <HowItWorkCard text="Récupère tes Airdrops" number={4} />
      </div>
      <Button variant="primary" size="m">
        Commencer
      </Button>
    </section>
  );
}
