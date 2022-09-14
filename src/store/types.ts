import { Dispatch, SetStateAction } from 'react';

export interface Flashcard {
  question: string;
  answer: string;
  author: string;
  id: number;
}

export type FlashcardsData = Flashcard[] | [];

export interface User {
  login: string;
  password: string;
  id: number;
  flashcards: FlashcardsData;
}

export type UserType = User | null;

export type UsersData = User[] | null;

export interface ContextType {
  flashcards: FlashcardsData;
  setFlashcards: Dispatch<SetStateAction<FlashcardsData>>;
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
}
