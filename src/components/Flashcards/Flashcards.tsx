import { FC, useContext } from 'react';
import { StoreContext } from '../../store/StoreContext';
import Flashcard from '../Flashcard/Flashcard';

const Flashcards: FC = () => {
  const context = useContext(StoreContext);

  const flashcardList: JSX.Element[] | undefined = context?.flashcards.map((flashcard) => (
    <Flashcard key={flashcard.id} flashcard={flashcard} />
  ));

  return <>{flashcardList === undefined ? <p>Not found</p> : flashcardList}</>;
};

export default Flashcards;
