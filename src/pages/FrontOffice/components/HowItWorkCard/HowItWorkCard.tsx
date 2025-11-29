import "./HowItWorkCard.css";

interface HowItWorkPartProps {
  number: number;
  text: string;
}
export default function CardAirdrop({ number, text }: HowItWorkPartProps) {
  return (
    <div className="container-how-it-work">
      <div className="number-part-how-it-work">
        <p className="number-part-how-it-work-number">{number}</p>
      </div>
      <h3 className="how-it-work-part-text">{text}</h3>
    </div>
  );
}
