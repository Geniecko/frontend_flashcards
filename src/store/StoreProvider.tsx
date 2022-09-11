import { FC, useEffect, useState } from 'react';
import { StoreContext } from './StoreContext';
import { ArticlesData, UsersData } from './types';

interface StoreProviderProps {
  children: React.ReactNode;
}

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const [articles, setArticles] = useState<ArticlesData>([]);
  const [users, setUsers] = useState<UsersData>(null);

  const getArticles = async () => {
    const response = await fetch('data/articles.json');

    const articles = await response.json();
    if (articles.length > 0) {
      setArticles(articles);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        articles,
        setArticles,
        users,
        setUsers,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
