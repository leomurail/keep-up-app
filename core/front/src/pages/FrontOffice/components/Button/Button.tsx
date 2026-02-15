import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button";
  variant?: "primary" | "secondary" | "flatten";
  size?: "s" | "m" | "l";
  imgSrc?: string;
  imgAlt?: string;
  imgPosition?: "left" | "right";
}

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "m",
  imgSrc,
  imgAlt = "",
  imgPosition = "left",
}: ButtonProps) {
  const className = `btn ${variant} ${size} ${imgSrc ? "btn-with-img" : ""}`;

  return (
    <button className={className} onClick={onClick} type={type}>
      {imgSrc && imgPosition === "left" && (
        <img src={imgSrc} alt={imgAlt} className="btn-img" />
      )}
      <span>{children}</span>
      {imgSrc && imgPosition === "right" && (
        <img src={imgSrc} alt={imgAlt} className="btn-img" />
      )}
    </button>
  );
}
