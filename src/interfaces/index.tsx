export interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  export interface IHeaderProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onClose: () => void;
  }