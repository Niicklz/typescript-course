import { Title } from "../Title/Title";
import "./NewsLetter.css";

interface NewsLetterProps {
  type: string;
  text: string;
  newsDescription: string;
}
export const NewsLetter = ({
  newsDescription,
  type,
  text,
}: NewsLetterProps) => {
  return (
    <article className="newsLetter-container">
      <Title type={type} text={text} size="sm" />
      <p className="newsLetter-description">{newsDescription}</p>
    </article>
  );
};
