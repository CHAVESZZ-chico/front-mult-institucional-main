
import { SetStateAction, useEffect, useState } from "react";
import Header from "../../../components/Header";
import { IHeaderProps } from "../../../interfaces";
import Main from "../../../components/Main";
import Card from "../../../components/Card";
import { UtilityService } from "../../../helpers/Api/Services/UtlityService";

const utilityService = new UtilityService();

const Utility = ({ isOpen, setIsOpen, onClose }: IHeaderProps) => {
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    utilityService.getAll().then((response: { data: SetStateAction<never[]>; }) => {
      setCards(response.data);
    });
  });
  
  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose} />
      <Main>
        {cards.map((element) => {
          return <Card content={element} />;
        })}
      </Main>
    </>
  );
};

export default Utility;