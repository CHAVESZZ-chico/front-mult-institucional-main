import Header from "../../components/Header";
import MainHome from "../../components/MainHome";
import { IHeaderProps } from "../../interfaces";

const Home = ({ isOpen, setIsOpen, onClose }: IHeaderProps) => {
  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose} />
      <MainHome isOpen={false} setIsOpen={function (): void {
        throw new Error("Function not implemented.");
      } } onClose={function (): void {
        throw new Error("Function not implemented.");
      } } />
    </>
  );
};

export default Home;