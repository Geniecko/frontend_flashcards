import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import StoreProvider from './store/StoreProvider';
import MainTemplate from './templates/MainTemplate';
import PrivateRoutes from './utils/PrivateRoutes';
import { ROUTES } from './utils/RoutesConstants';
import AddFlashcardView from './views/AddFlashcardView/AddFlashcardView';
import FlashcardsView from './views/FlashcardsView/FlashcardsView';
import HomeView from './views/HomeView/HomeView';
import MyFlashcardsView from './views/MyFlashcardsView/MyFlashcardsView';
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
            <Route path={`${ROUTES.FLASHCARDS}`} element={<FlashcardsView />} />
            <Route element={<PrivateRoutes />}>
              <Route path={`${ROUTES.MY_FLASHCARDS}`} element={<MyFlashcardsView />} />
              <Route path={`${ROUTES.ADD_FLASHCARD}`} element={<AddFlashcardView />} />
            </Route>
            <Route path='*' element={<NoMatchView />} />
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </MainTemplate>
  );
};

export default App;
