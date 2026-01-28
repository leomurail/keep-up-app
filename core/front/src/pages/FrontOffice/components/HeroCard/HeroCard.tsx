import "./HearoCard.css";

interface HeroCardProps {
  title: string;
  text: string;
}

export default function HeroCard({ title, text }: HeroCardProps) {
  return (
    <div className="hero-card">
      <h3 className="hero-card-title">{title}</h3>
      <p className="hero-card-text">{text}</p>
    </div>
  );
}
