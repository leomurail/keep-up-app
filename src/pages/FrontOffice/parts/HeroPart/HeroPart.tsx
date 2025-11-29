import "./HeroParte.css";
import Button from "../../components/Button/Button";
import HeroCard from "../../components/HeroCard/HeroCard";
import RoundButton from "../../components/RoundButton/RoundButton";

export default function Header() {
  return (
    <section id="hero-part">
      <RoundButton />
      <div className="hero-content">
        <div className="hero-content-logo-title">
          <img
            className="hero-logo"
            src="/img/webp/logo-keepup.webp"
            alt="logo Keep Up"
          />
          <h1 className="hero-title">
            Ne laissez plus aucun<br></br> Airdrop vous échapper
          </h1>
        </div>
        <div className="hero-content-text-buttons">
          <div className="hero-content-text">
            <p className="hero-text-claim">
              Activez les Alertes Claim (via Telegram){" "}
            </p>
            <p className="hero-text-instal">
              Installation en 30 secondes. 100% gratuit.
            </p>
          </div>
          <div className="hero-buttons">
            <Button
              variant="primary"
              size="m"
              imgSrc="/img/webp/telegram.webp"
              imgAlt="telegram icon"
              imgPosition="right"
            >
              Activer les alertes
            </Button>
            <Button
              variant="secondary"
              size="m"
              imgSrc="/img/svg/eye.svg"
              imgAlt="eye icon"
              imgPosition="right"
            >
              Voir les airdrops
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className="hero-container-cards">
          <HeroCard
            title="Soyez informé "
            text="Accédez à la liste des Airdrops prometteurs"
          />
          <HeroCard
            title="Soyez alerté "
            text="Recevez des alertes pour Claim vos Airdrops"
          />
          <HeroCard
            title="Soyez guidé  "
            text="Optimisez votre farming grâce à un suivi clair et guidé"
          />
        </div>
      </div>
    </section>
  );
}
