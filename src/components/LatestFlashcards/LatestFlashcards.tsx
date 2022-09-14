import { FC, useEffect, useState } from 'react';
import { FlashcardsData } from '../../store/types';
import FlashcardsList from '../FlashcardsList/FlashcardsList';

interface LatestFlashcardsProps {
  flashcards: FlashcardsData;
}

const LatestFlashcards: FC<LatestFlashcardsProps> = ({ flashcards }) => {
  const [latestFlashcards, setLatestFlashcards] = useState<FlashcardsData>([]);

  const getLatestFlashcards = () => {
    const latestFlashcardsArray = [];
    let numberOfFlushcards = 4;
    let index = flashcards.length - 1;

    if (flashcards.length > 0) {
      if (flashcards.length < numberOfFlushcards) numberOfFlushcards = flashcards.length;

      for (let i = 0; i < numberOfFlushcards; i++) {
        latestFlashcardsArray.push(flashcards[index]);
        index = index - 1;
      }

      setLatestFlashcards(latestFlashcardsArray);
    }
  };

  useEffect(() => {
    if (flashcards.length > 0) {
      getLatestFlashcards();
    }
  }, [flashcards]);

  return <>{latestFlashcards.length > 0 && <FlashcardsList flashcards={latestFlashcards} />}</>;
};

export default LatestFlashcards;
