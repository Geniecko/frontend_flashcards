import { FC, useEffect, useState } from 'react';
import { FlashcardsData } from '../../store/types';
import FlashcardsList from '../FlashcardsList/FlashcardsList';

interface RandomFlashcardsProps {
  flashcards: FlashcardsData;
}

const RandomFlashcards: FC<RandomFlashcardsProps> = ({ flashcards }) => {
  const [randomFlashcards, setRandomFlashcards] = useState<FlashcardsData | []>([]);

  const generateIndex = (length: number, numberOfFlashcards: number): number[] => {
    const allIndex = [];
    const randomIndex = [];

    for (let i = 0; i < length; i++) {
      allIndex.push(i);
    }

    for (let i = 0; i < numberOfFlashcards; i++) {
      const index = Math.floor(Math.random() * allIndex.length);
      randomIndex.push(allIndex[index]);
      allIndex.splice(index, 1);
    }

    return randomIndex;
  };

  const getRandomFlashcards = () => {
    let numberOfFlashcards = 4;
    const randomFlashcardsArray = [];

    if (flashcards.length > 0) {
      if (flashcards.length < numberOfFlashcards) numberOfFlashcards = flashcards.length;

      const randomIndex = generateIndex(flashcards.length, numberOfFlashcards);

      for (const index of randomIndex) {
        randomFlashcardsArray.push(flashcards[index]);
      }

      setRandomFlashcards(randomFlashcardsArray);
    }
  };

  useEffect(() => {
    getRandomFlashcards();
  }, [flashcards]);

  return <> {randomFlashcards.length > 0 && <FlashcardsList flashcards={randomFlashcards} />} </>;
};

export default RandomFlashcards;
