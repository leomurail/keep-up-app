import "./Wrapper.css";
import type { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return <div className="wrapper">{children}</div>;
}
