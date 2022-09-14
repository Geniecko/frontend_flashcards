import { FC, useEffect, useState } from 'react';
import { StoreContext } from './StoreContext';
import { FlashcardsData, UserType } from './types';

interface StoreProviderProps {
  children: React.ReactNode;
}

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const [flashcards, setFlashcards] = useState<FlashcardsData>([]);
  const [user, setUser] = useState<UserType>(null);

  const getFlashcards = async () => {
    const response = await fetch('data/flashcards.json');

    const flashcards = await response.json();
    if (flashcards.length > 0) {
      setFlashcards(flashcards);
    }
  };

  useEffect(() => {
    getFlashcards();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        flashcards,
        setFlashcards,
        user,
        setUser,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
