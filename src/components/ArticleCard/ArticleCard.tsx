import { Title } from "../Title/Title";
import "./ArticleCard.css";
interface ArticleCardProps {
  urlImage: string;
  imageName: string;
  title: string;
  type: string;
  size: string;
  id: string;
  description: string;
  variant: string;
}

export const ArticleCard = ({
  urlImage,
  imageName,
  title,
  type,
  size,
  id,
  description,
  variant,
}: ArticleCardProps) => {
  return (
    <article className="article-card-container">
      <img className="article-img" src={urlImage} alt={imageName} />
      <div>
        <p className="number">{id}</p>
        <Title text={title} type={type} size={size} variant={variant} />
        <p className="description">{description}</p>
      </div>
    </article>
  );
};
