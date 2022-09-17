import { FC, MouseEvent, useContext } from 'react';
import { StoreContext } from '../../store/StoreContext';
import { Button } from '../Button/Button.style';
import { StyledButton } from './DeleteButton.style';

interface DeleteButtonProps {
  id: number;
}

const DeleteButton: FC<DeleteButtonProps> = ({ id }) => {
  const context = useContext(StoreContext);

  const removeCard = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;

    context?.setFlashcards((prev) =>
      prev.filter((flashcard) => flashcard.id !== Number(target.dataset.card)),
    );
  };

  return (
    <StyledButton as={Button} small onClick={removeCard} data-card={id}>
      Usuń
    </StyledButton>
  );
};

export default DeleteButton;
