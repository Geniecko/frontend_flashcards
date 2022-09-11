import { FC } from 'react';
import StoreProvider from './store/StoreProvider';

const App: FC = () => {
  return (
    <StoreProvider>
      <h1>App</h1>
      <h2>hello</h2>

    </StoreProvider>
  );
};

export default App;
