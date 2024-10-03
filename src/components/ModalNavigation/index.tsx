import { Link } from "react-router-dom";
import "./style.css";
import { IModalProps } from "../../interfaces";

const ModalNavigation = ({ isOpen, onClose }: IModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span onClick={onClose}>❌</span>
        <ul className="navigation-list">
          <li className="option-navigation">
            <Link to="/utility" onClick={onClose}>Serviços</Link>
          </li>
          <li className="option-navigation">
            <Link to="/" onClick={onClose}>Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ModalNavigation;