import React from "react";
import "./style.css";

const Card: React.FC = () => {
  return (
    <div className="card">
      <img
        className="img-card"
        src="src\\assets\\escolta.png"
        alt="representação escolta armada"
      />
      <span className="span-card">Escolta Armada</span>
      <p className="p-card">
        Serviço de escolta armada para seu evento ou empresa
      </p>
    </div>
  );
};

export default Card;