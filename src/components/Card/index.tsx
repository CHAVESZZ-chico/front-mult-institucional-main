import { ICardProps } from "../../interfaces";
import "./style.css";

const Card = ({ content }: ICardProps) => {
  return (
    <div className="card">
      <img
        className="img-card"
        src={content.image}
        alt={`representação ${content.title}`}
      />
      <span className="span-card">Escolta Armada</span>
      <p className="p-card">{content.description}</p>
    </div>
  );
};

export default Card;