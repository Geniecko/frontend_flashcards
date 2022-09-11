import { FC } from 'react';
import Header from './components/Header/Header';
import StoreProvider from './store/StoreProvider';

const App: FC = () => {
  return (
    <StoreProvider>
      <Header/>
      <h1>App</h1>
      <h2>hello</h2>

    </StoreProvider>
  );
};

export default App;
