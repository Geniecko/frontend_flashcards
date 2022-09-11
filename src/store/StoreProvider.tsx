import { FC, useEffect, useState } from 'react';
import { StoreContext } from './StoreContext';
import { ArticlesData, UserType } from './types';

interface StoreProviderProps {
  children: React.ReactNode;
}

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const [articles, setArticles] = useState<ArticlesData>([]);
  const [user, setUser] = useState<UserType>(null);

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
        user,
        setUser,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
