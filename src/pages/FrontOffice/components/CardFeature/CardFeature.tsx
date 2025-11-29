import "./CardFeature.css";
import Button from "../Button/Button";

interface CardFeatureProps {
  title: string;
  text: React.ReactNode;
  imgSrc: string;
  textButton: string;
}
export default function CardFeature({
  title,
  text,
  imgSrc,
  textButton,
}: CardFeatureProps) {
  return (
    <div className="card-feature">
      <img src={imgSrc} alt={title} />
      <h3 className="card-feature-title">{title}</h3>
      <p className="card-feature-text">{text}</p>
      <Button variant="primary" size="m">
        {textButton}
      </Button>
    </div>
  );
}
