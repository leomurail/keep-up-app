import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./Header.css";
import Button from "../Button/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header-logo">
        <img src="/img/webp/logo-keepup.webp" alt="Logo" />
      </div>

      <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
        {/* Mobile Header Row inside the menu */}
        <div className="mobile-menu-header">
          <div className="header-logo-mobile">
            <img src="/img/webp/logo-keepup.webp" alt="Logo" />
          </div>
          <button
            className="header-close-btn"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} color="white" />
          </button>
        </div>

        <div className="mobile-menu-links">
          <a className="link" href="#hero" onClick={() => setIsMenuOpen(false)}>
            Liste des airdrops
          </a>
          <a className="link" href="#features" onClick={() => setIsMenuOpen(false)}>
            La solution
          </a>
          <a className="link" href="#pricing" onClick={() => setIsMenuOpen(false)}>
            Chiffres clés
          </a>
          <a className="link" href="#contact" onClick={() => setIsMenuOpen(false)}>
            Les fonctionnalités
          </a>
          <a className="link" href="#contact" onClick={() => setIsMenuOpen(false)}>
            Comment ça marche ?
          </a>
        </div>

        <div className="mobile-menu-footer">
          <div className="mobile-menu-cta-section">
            <h3 className="mobile-menu-subtitle">Connect ton Telegram</h3>
            <div className="mobile-menu-buttons">
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

          <div className="mobile-menu-socials">
            <h3 className="mobile-menu-subtitle social-media">Réseaux sociaux</h3>
            <div className="mobile-social-icons">
              <img src="/img/webp/twitter.webp" alt="Twitter" />
              <img src="/img/webp/discord.webp" alt="Discord" />
              <img src="/img/webp/telegram.webp" alt="Telegram" />
            </div>
          </div>
        </div>
      </nav>

      <div className="header-cta">
        <Button variant="secondary" size="s">
          Rester informé
        </Button>
      </div>

      <button
        className="header-burger"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={28} />
      </button>
    </header>
  );
}
