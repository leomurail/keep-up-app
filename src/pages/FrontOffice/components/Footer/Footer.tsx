import "./Footer.css";
import Button from "../Button/Button";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-rs">
        <img
          className="logo-footer"
          src="/img/webp/logo-keepup.webp"
          alt="Logo KeepUp"
        />
        <div className="footer-rs-container">
          <img
            className="footer-img-rs"
            src="img/webp/twitter.webp"
            alt="logo twitter"
          />
          <img
            className="footer-img-rs"
            src="img/webp/discord.webp"
            alt="logo discord"
          />
          <img
            className="footer-img-rs"
            src="img/webp/telegram.webp"
            alt="logo telegram"
          />
        </div>
      </div>
      <nav className="footer-nav">
        <h2 className="footer-nav-title">Explorer Keep Up</h2>
        <a className="footer-nav-link" href="#hero">
          Liste des airdrops
        </a>
        <a className="footer-nav-link" href="#features">
          La solution
        </a>
        <a className="footer-nav-link" href="#pricing">
          Chiffres clés
        </a>
        <a className="footer-nav-link" href="#contact">
          Les fonctionnalités
        </a>
        <a className="footer-nav-link" href="#contact">
          Comment ça marche ?
        </a>
      </nav>

      <nav className="footer-nav">
        <h2 className="footer-nav-title">A propos</h2>
        <a className="footer-nav-link" href="#hero">
          Mentions légales
        </a>
        <a className="footer-nav-link" href="#features">
          Politique de confidentialité
        </a>
      </nav>

      <div className="footer-container-cta">
        <h2 className="footer-container-title">Connect ton Telegram</h2>
        <div className="footer-cta">
          <Button
            variant="primary"
            size="s"
            imgSrc="/img/webp/telegram.webp"
            imgAlt="telegram icon"
            imgPosition="right"
          >
            Bot
          </Button>
          <Button
            variant="secondary"
            size="s"
            imgSrc="/img/svg/eye.svg"
            imgAlt="eye icon"
            imgPosition="right"
          >
            Airdrops
          </Button>
        </div>
      </div>
    </footer>
  );
}
