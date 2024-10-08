
import Card from "../../../components/Card";
import Header from "../../../components/Header";
import Main from "../../../components/Main";
import { IHeaderProps } from "../../../interfaces";

const Utility = ({ isOpen, setIsOpen, onClose }: IHeaderProps) => {
  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose} />
      <Main>
        <Card />
      </Main>
    </>
  );
};

export default Utility;