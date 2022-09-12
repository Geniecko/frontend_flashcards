import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import StoreProvider from './store/StoreProvider';
import MainTemplate from './templates/MainTemplate';
import PrivateRoutes from './utils/PrivateRoutes';
import { ROUTES } from './utils/RoutesConstants';
import AddArticleView from './views/AddArticleView/AddArticleView';
import ArticlesView from './views/ArticlesView/ArticlesView';
import HomeView from './views/HomeView/HomeView';
import MyArticlesView from './views/MyArticlesView/MyArticlesView';
import NoMatchView from './views/NoMatchView/NoMatchView';

const App: FC = () => {
  return (
    <MainTemplate>
      <StoreProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<HomeView />} />
            <Route path={`${ROUTES.HOME}`} element={<HomeView />} />
            <Route path={`${ROUTES.ARTICLES}`} element={<ArticlesView />} />
            <Route element={<PrivateRoutes />}>
              <Route path={`${ROUTES.MY_ARTICLES}`} element={<MyArticlesView />} />
              <Route path={`${ROUTES.ADD_ARTICLE}`} element={<AddArticleView />} />
            </Route>
            <Route path='*' element={<NoMatchView />} />
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </MainTemplate>
  );
};

export default App;
