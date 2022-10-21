import { FC, useContext } from 'react';
import Headline from '../../components/Headline/Headline';
import LatestFlashcards from '../../components/LatestFlashcards/LatestFlashcards';
import RandomFlashcards from '../../components/RandomFlashcards/RandomFlashcards';
import { StoreContext } from '../../store/StoreContext';
import ContainerTemplate from '../../templates/ContainerTemplate';

const pageTitles = {
  latest: {
    title: 'Najnowsze fiszki',
    subtitle: 'Tutaj znajdziesz najnowsze fiszki naszych użytkowników.',
  },
  random: {
    title: 'Losowe fiszki',
    subtitle:
      'Tutaj znajdziesz losowe fiszki naszych użytkowników.',
  },
};

const Home: FC = () => {
  const context = useContext(StoreContext);

  return (
    <>
      <ContainerTemplate secondary>
        <Headline title={pageTitles.latest.title} subtitle={pageTitles.latest.subtitle} />
      </ContainerTemplate>
      <ContainerTemplate secondary>
        {context !== null ? <LatestFlashcards flashcards={context.flashcards} /> : 'Nie znaleziono'}
      </ContainerTemplate>
      <ContainerTemplate>
        <Headline title={pageTitles.random.title} subtitle={pageTitles.random.subtitle} />
      </ContainerTemplate>
      <ContainerTemplate>
        {context !== null ? <RandomFlashcards flashcards={context.flashcards} /> : 'Nie znaleziono'}
      </ContainerTemplate>
    </>
  );
};

export default Home;
