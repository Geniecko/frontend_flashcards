import { FC } from 'react';
import { FlashcardsData } from '../../store/types';
import FlashcardItem from '../FlashcardItem/FlashcardItem';
import { List } from './FlashcardsList.style';

interface FlashcardsListProps {
  flashcards: FlashcardsData;
}

const FlashcardsList: FC<FlashcardsListProps> = ({ flashcards }) => {
  const flashcardList: JSX.Element[] = flashcards.map((flashcard) => (
    <FlashcardItem key={flashcard.id} flashcard={flashcard} />
  ));

  return <List>{flashcardList === undefined ? <p>Brak kart</p> : flashcardList}</List>;
};

export default FlashcardsList;
