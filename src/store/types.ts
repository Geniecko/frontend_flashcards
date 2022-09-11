import { Dispatch, SetStateAction } from 'react';

export interface Article {
  name: string;
  id: number;
}

export type ArticlesData = Article[] | [];

export interface User {
  name: string;
  id: number;
}

export type UserType = User | null

export type UsersData = User[] | null;

export interface ContextType{
  articles: ArticlesData;
  setArticles: Dispatch<SetStateAction<ArticlesData>>;
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>
}