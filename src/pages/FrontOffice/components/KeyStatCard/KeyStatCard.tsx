import "./KeyStatCard.css";

export default function KeyStatCard() {
  return (
    <div className="key-stat">
      <div className="key-stat-part">
        <h3 className="key-stat-title">+3 h/jour</h3>
        <p className="key-stat-text">passées à chercher des opportunités.</p>
      </div>
      <div className="key-stat-separateur"></div>
      <div className="key-stat-part">
        <h3 className="key-stat-title">65 %</h3>
        <p className="key-stat-text">
          des farmers Web3 ont déjà manqué un claim d’airdrop.
        </p>
      </div>
      <div className="key-stat-separateur"></div>
      <div className="key-stat-part">
        <h3 className="key-stat-title">1 user/ 2</h3>
        <p className="key-stat-text">a déjà cliqué sur un faux lien.</p>
      </div>
    </div>
  );
}
