import { FC } from 'react';
import { Flashcard } from '../../store/types';

interface FlashcardProps {
  flashcard: Flashcard;
}

const Flashcard: FC<FlashcardProps> = ({ flashcard }) => {
  return (
    <>
      <h1>flashcard</h1>
    </>
  );
};

export default Flashcard;
