import Header from "../../components/Header";
import MainHome from "../../components/MainHome";
import { IHeaderProps } from "../../interfaces";

const Home = ({ isOpen, setIsOpen, onClose }: IHeaderProps) => {
  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose} />
      <MainHome />
    </>
  );
};

export default Home;
