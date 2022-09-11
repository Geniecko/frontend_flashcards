import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import StoreProvider from './store/StoreProvider';
import MainTemplate from './templates/MainTemplate';
import PrivateRoutes from './utils/PrivateRoutes';
import { ROUTES } from './utils/RoutesConstants';
import AddArticle from './views/AddArticle/AddArticle';
import Home from './views/Home/Home';
import MyArticles from './views/MyArticles/MyArticles';
import NoMatch from './views/NoMatch.tsx/NoMatch';

const App: FC = () => {
  return (
    <MainTemplate>
      <StoreProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path={`${ROUTES.HOME}`} element={<Home />} />
            <Route element={<PrivateRoutes />}>
              <Route path={`${ROUTES.MY_ARTICLE}`} element={<MyArticles />} />
              <Route path={`${ROUTES.ADD_ARTICLE}`} element={<AddArticle />} />
            </Route>
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </MainTemplate>
  );
};

export default App;
