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

export type UsersData = User[] | null;

export interface ContextType{
  articles: ArticlesData;
  setArticles: Dispatch<SetStateAction<ArticlesData>>;
  users: UsersData;
  setUsers: Dispatch<SetStateAction<UsersData>>
}