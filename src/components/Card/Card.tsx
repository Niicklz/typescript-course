interface CardProps {
  children: React.ReactNode;
  variant?: string;
}

import "./Card.css";

export const Card = ({ children, variant = "transparent" }: CardProps) => {
  return <div className={`card-container card-${variant}`}>{children}</div>;
};
