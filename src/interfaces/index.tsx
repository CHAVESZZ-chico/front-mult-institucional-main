export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface IHeaderProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
}

export interface ICardProps {
  content: {
    title: string;
    description: string;
    image: string;
  };
}