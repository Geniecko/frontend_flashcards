import { FC, useState } from 'react';
import { Flashcard } from '../../store/types';
import { Author, Card, Answer, Question, Hint, CardFront, CardBack } from './FlashcardItem.style';

interface FlashcardItemProps {
  flashcard: Flashcard;
}

const FlashcardItem: FC<FlashcardItemProps> = ({ flashcard }) => {
  const [isReversed, setIsReversed] = useState(false);

  const handleClick = () => {
    setIsReversed((prevValue) => !prevValue);
  };

  return (
    <Card onClick={handleClick}>
      <CardFront isReversed={isReversed}>
        <Hint isReversed={isReversed}>Question</Hint>
        <Question>{flashcard.question}</Question>
        <Author isReversed={isReversed}>{flashcard.author}</Author>
      </CardFront>
      <CardBack isReversed={isReversed}>
        <Hint isReversed={isReversed}>Answer</Hint>
        <Answer>{flashcard.answer}</Answer>
        <Author isReversed={isReversed}>{flashcard.author}</Author>
      </CardBack>
    </Card>
  );
};

export default FlashcardItem;
