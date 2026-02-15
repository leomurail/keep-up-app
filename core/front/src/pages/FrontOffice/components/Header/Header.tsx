import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import Button from "../Button/Button";
import { ConnectButton } from "@/components/appkit";

import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Handle hash scroll when location changes or on initial load if hash exists
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // Small delay to ensure render
      }
    } else if (location.pathname === "/") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <Link to="/" className="header-logo">
          <img src="/img/webp/logo-keepup.webp" alt="Logo" />
        </Link>

        <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
          {/* Mobile Header Row inside the menu */}
          <div className="mobile-menu-header">
            <Link to="/" className="header-logo-mobile" onClick={() => setIsMenuOpen(false)}>
              <img src="/img/webp/logo-keepup.webp" alt="Logo" />
            </Link>
            <button
              className="header-close-btn"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} color="white" />
            </button>
          </div>

          <div className="mobile-menu-links">
            <a
              className="link"
              href="/#airdrop-list-part"
              onClick={() => setIsMenuOpen(false)}
            >
              Liste des airdrops
            </a>
            <a
              className="link"
              href="/#how-it-works-part"
              onClick={() => setIsMenuOpen(false)}
            >
              Comment ça marche ?
            </a>
            <a
              className="link"
              href="/#feature-to-benefit-part"
              onClick={() => setIsMenuOpen(false)}
            >
              La solution
            </a>
            <a
              className="link"
              href="/#key-stat-part"
              onClick={() => setIsMenuOpen(false)}
            >
              Chiffres clés
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
          <ConnectButton />
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
      </div>
    </header>
  );
}
