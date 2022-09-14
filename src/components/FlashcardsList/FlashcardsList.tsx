import { FC, useContext } from 'react';
import { StoreContext } from '../../store/StoreContext';
import FlashcardItem from '../FlashcardItem/FlashcardItem';
import { List } from './FlashcardsList.style';

const FlashcardsList: FC = () => {
  const context = useContext(StoreContext);

  const flashcardList: JSX.Element[] | undefined = context?.flashcards.map((flashcard) => (
    <FlashcardItem key={flashcard.id} flashcard={flashcard} />
  ));

  return <List>{flashcardList === undefined ? <p>Not found</p> : flashcardList}</List>;
};

export default FlashcardsList;
