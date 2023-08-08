import { MouseEventHandler } from "react";
import "./Button.css";
interface ButtonProps {
  redirect?: boolean;
  value: string;
  size: string;
  url?: string;
  onClick?: MouseEventHandler;
}

export const Button = ({
  redirect,
  value,
  size = "sm",
  url,
  onClick,
}: ButtonProps) => {
  return (
    <>
      {redirect ? (
        <a
          className={`button-component button-component-size-${size} button-redirect`}
          href={url}
        >
          {value}
        </a>
      ) : (
        <button
          onClick={onClick}
          className={`button-component button-component-size-${size}`}
        >
          {value}
        </button>
      )}
    </>
  );
};
