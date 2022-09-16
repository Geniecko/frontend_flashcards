import { FC, MouseEvent, useContext } from 'react';
import { StoreContext } from '../../store/StoreContext';
import { Button } from '../Button/Button.style';
import { UserButton } from './UserButtons.style';

interface UsetButtonsProps{
  id:number;
}

const UserButtons: FC<UsetButtonsProps> = ({id}) => {
  const context = useContext(StoreContext);

  const removeCard = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;

    context?.setFlashcards((prev) =>
      prev.filter((flashcard) => flashcard.id !== Number(target.dataset.card)),
    );
  };

  return (
    <UserButton>
      <Button small>Edytuj</Button>
      <Button small onClick={removeCard} data-card={id}>
        Usuń
      </Button>
    </UserButton>
  );
};

export default UserButtons;
