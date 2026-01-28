import "./RoundButton.css";

interface RoundButtonProps {
  icon?: string;
  alt?: string;
  onClick?: () => void;
}

export default function RoundButton({
  icon = "/img/svg/arrow-down.svg",
  alt = "Bouton",
  onClick,
}: RoundButtonProps) {
  return (
    <button className="round-btn" onClick={onClick}>
      <img src={icon} alt={alt} />
    </button>
  );
}
