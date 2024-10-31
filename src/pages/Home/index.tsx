import Header from "../../components/Header";
import Main from "../../components/Main";
import Card from "../../components/Card";
import { IHeaderProps } from "../../interfaces";

const Utility = ({ isOpen, setIsOpen, onClose }: IHeaderProps) => {
  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose} />
      <Main>
        <Card content={{
          title: "",
          description: "",
          image: ""
        }} />
      </Main>
    </>
  );
};

export default Utility;