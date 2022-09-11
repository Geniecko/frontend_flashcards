import { FC, useContext } from 'react';
import { StoreContext } from '../../store/StoreContext';
import ArticleItem from '../Article/ArticleItem';

const Articles: FC = () => {
  const context = useContext(StoreContext);

  const articlesList: JSX.Element[] | undefined = context?.articles.map((article) => (
    <ArticleItem key={article.id} article={article} />
  ));

  return <>{articlesList === undefined ? <p>Not found</p> : articlesList}</>;
};

export default Articles;
