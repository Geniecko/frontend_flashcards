import { FC } from 'react';
import { Article } from '../../store/types';

interface ArticleProps {
  article: Article;
}

const ArticleItem: FC<ArticleProps> = ({ article }) => {
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.author}</p>
    </>
  );
};

export default ArticleItem;
