import { createElement } from "react";
import "./Title.css";

interface TitleProps {
  text: string;
  variant?: string;
  type: string;
  size: string;
}

export const Title = ({
  size = "sm",
  type,
  text,
  variant = "white",
}: TitleProps) => {
  return createElement(
    type,
    { className: `title title-${variant} title-${size}` },
    text
  );
};
