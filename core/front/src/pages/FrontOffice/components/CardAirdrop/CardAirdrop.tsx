import "./CardAirdrop.css";
import Button from "../Button/Button";

interface CardAirdropProps {
  title: string;
  text: string;
  statu: string;
  imgSrc: string;
}
export default function CardAirdrop({
  title,
  text,
  statu,
  imgSrc,
}: CardAirdropProps) {
  return (
    <div className="card-airdrop">
      <div className="img-statu">
        <img src={imgSrc} alt={title} />
        <p className="statu">{statu}</p>
      </div>
      <div className="card-airdrop-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
      </div>
      <div className="card-cta">
        <Button variant="primary" size="m">
          Voir plus
        </Button>
      </div>
    </div>
  );
}
