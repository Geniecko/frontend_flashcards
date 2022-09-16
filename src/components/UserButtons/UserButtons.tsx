import { FC, MouseEvent, useContext } from 'react';
import { StoreContext } from '../../store/StoreContext';
import { Button } from '../Button/Button.style';
import { UserButton } from './UserButtons.style';

interface UsetButtonsProps {
  id: number;
  openModal: () => void;
}

const UserButtons: FC<UsetButtonsProps> = ({ id, openModal }) => {
  const context = useContext(StoreContext);

  const removeCard = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;

    context?.setFlashcards((prev) =>
      prev.filter((flashcard) => flashcard.id !== Number(target.dataset.card)),
    );
  };

  const editCard = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    openModal();
  };

  return (
    <UserButton>
      <Button small onClick={editCard} data-card={id}>
        Edytuj
      </Button>
      <Button small onClick={removeCard} data-card={id}>
        Usuń
      </Button>
    </UserButton>
  );
};

export default UserButtons;
