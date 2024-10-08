import "./style.css";
import ModalNavigation from "../ModalNavigation";
import { IHeaderProps } from "../../interfaces";

const Header = ({ isOpen, onClose }: IHeaderProps) => {

  return (
    <header className="header">
      <img className="logo" src="src/assets/logo da speedx.png" />
      <h1>SEMPRE AO SEU LADO</h1>
      <h2 className="menu-hamburger" onClick={onClose}>
        ☰
      </h2>
      <ModalNavigation isOpen={isOpen} onClose={onClose}/>
    </header>
  );
};

export default Header;
