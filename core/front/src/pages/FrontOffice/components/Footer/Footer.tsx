import { Link } from "react-router";
import "./Footer.css";
import Button from "../Button/Button";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo-rs">
          <Link to="/">
            <img
              className="logo-footer"
              src="/img/webp/logo-keepup.webp"
              alt="Logo KeepUp"
            />
          </Link>
          <div className="footer-rs-container">
            <img
              className="footer-img-rs"
              src="/img/webp/twitter.webp"
              alt="logo twitter"
            />
            <img
              className="footer-img-rs"
              src="/img/webp/discord.webp"
              alt="logo discord"
            />
            <img
              className="footer-img-rs"
              src="/img/webp/telegram.webp"
              alt="logo telegram"
            />
          </div>
        </div>
        <nav className="footer-nav">
          <h2 className="footer-nav-title">Explorer Keep Up</h2>
          <a className="footer-nav-link" href="/#airdrop-list-part">
            Liste des airdrops
          </a>
          <a className="footer-nav-link" href="/#feature-to-benefit-part">
            La solution
          </a>
          <a className="footer-nav-link" href="/#key-stat-part">
            Chiffres clés
          </a>
          <a className="footer-nav-link" href="/#feature-to-benefit-part">
            Les fonctionnalités
          </a>
          <a className="footer-nav-link" href="/#how-it-works-part">
            Comment ça marche ?
          </a>
        </nav>

        <nav className="footer-nav">
          <h2 className="footer-nav-title">A propos</h2>
          <Link className="footer-nav-link" to="/legal-notice">
            Mentions légales
          </Link>
          <Link className="footer-nav-link" to="/privacy-policy">
            Politique de confidentialité
          </Link>
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
      </div>
    </footer>
  );
}
