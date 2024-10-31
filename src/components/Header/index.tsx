import "./style.css";
import { IHeaderProps } from "../../interfaces";
import ModalNavigation from "../ModalNavigation";

const Header = ({ isOpen, onClose }: IHeaderProps) => {

  return (
    <header className="header">
      <img className="logo" src="src/assets/logo.jpg" />
      <h2 className="menu-hamburger" onClick={onClose}>
        ☰
      </h2>
      <ModalNavigation isOpen={isOpen} onClose={onClose}/>
    </header>
  );
};

export default Header;
