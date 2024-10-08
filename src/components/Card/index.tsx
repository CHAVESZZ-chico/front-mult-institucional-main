import React from "react";
import "./style.css";

const Card: React.FC = () => {
  return (
    <div className="card">
      <img
        className="img-card"
        src="src\\assets\\logo da speedx.png"
        alt="representação escolta armada"
      />
      <span className="span-card">Speedx Log </span>
      <p className="p-card">
      A visão da SpeedX Log Transportadora é ser reconhecida como a principal referência em soluções logísticas no Brasil, destacando-se pela excelência no atendimento e pela inovação contínua em seus serviços. A empresa almeja liderar o mercado, oferecendo não apenas transporte de cargas, mas também experiências excepcionais para seus clientes. A SpeedX Log busca expandir sua presença no setor, investindo em tecnologia e práticas sustentáveis que promovam a eficiência operacional e reduzam o impacto ambiental. A visão da empresa também envolve a criação de um ambiente de trabalho inspirador para seus colaboradores, valorizando o desenvolvimento profissional e a colaboração em equipe. Em resumo, a visão da SpeedX Log Transportadora é ser sinônimo de qualidade e confiança na logística, contribuindo para o sucesso dos negócios de seus clientes e para um futuro mais sustentável.
      </p>
    </div>
  );
};

export default Card;