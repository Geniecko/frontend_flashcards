import { FC, useState } from 'react';
import { Flashcard } from '../../store/types';
import DeleteButton from '../UserButtons/DeleteButton';
import { Author, Card, Answer, Question, Hint, CardFront, CardBack } from './FlashcardItem.style';

interface FlashcardItemProps {
  flashcard: Flashcard;
  isUserCard?: boolean;
}

const FlashcardItem: FC<FlashcardItemProps> = ({ flashcard, isUserCard }) => {
  const [isReversed, setIsReversed] = useState(false);

  const handleClick = () => {
    setIsReversed((prevValue) => !prevValue);
  };

  const userDeleteButton = isUserCard && <DeleteButton id={flashcard.id} />;

  return (
    <>
      <Card>
        <CardFront isReversed={isReversed} onClick={handleClick}>
          <Hint isReversed={isReversed}>Przód</Hint>
          <Question>{flashcard.question}</Question>
          <Author isReversed={isReversed}>{flashcard.author}</Author>
          {userDeleteButton}
        </CardFront>
        <CardBack isReversed={isReversed} onClick={handleClick}>
          <Hint isReversed={isReversed}>Tył</Hint>
          <Answer>{flashcard.answer}</Answer>
          <Author isReversed={isReversed}>{flashcard.author}</Author>
          {userDeleteButton}
        </CardBack>
      </Card>
    </>
  );
};

export default FlashcardItem;
