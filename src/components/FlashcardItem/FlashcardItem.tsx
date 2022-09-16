import { FC, useState } from 'react';
import { Flashcard } from '../../store/types';
import EditForm from '../EditForm/EditForm';

import UserButtons from '../UserButtons/UserButtons';
import { Author, Card, Answer, Question, Hint, CardFront, CardBack } from './FlashcardItem.style';

interface FlashcardItemProps {
  flashcard: Flashcard;
  isUserCard?: boolean;
}

const FlashcardItem: FC<FlashcardItemProps> = ({ flashcard, isUserCard }) => {
  const [isReversed, setIsReversed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClose = () => setIsModalOpen(false);

  const handleClick = () => {
    setIsReversed((prevValue) => !prevValue);
  };

  const userButtons = isUserCard && (
    <UserButtons id={flashcard.id} openModal={() => setIsModalOpen(true)} />
  );

  return (
    <>
      <Card>
        <CardFront isReversed={isReversed} onClick={handleClick}>
          <Hint isReversed={isReversed}>Przód</Hint>
          <Question>{flashcard.question}</Question>
          <Author isReversed={isReversed}>{flashcard.author}</Author>
          {userButtons}
        </CardFront>
        <CardBack isReversed={isReversed} onClick={handleClick}>
          <Hint isReversed={isReversed}>Tył</Hint>
          <Answer>{flashcard.answer}</Answer>
          <Author isReversed={isReversed}>{flashcard.author}</Author>
          {userButtons}
        </CardBack>
      </Card>
      {isUserCard && (
        <EditForm isModalOpen={isModalOpen} handleOnClose={handleOnClose} id={flashcard.id} />
      )}
    </>
  );
};

export default FlashcardItem;
