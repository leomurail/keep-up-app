import "./Title.css";

interface TitleProps {
  children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return <h1>{children}</h1>;
}
