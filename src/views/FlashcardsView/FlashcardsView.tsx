import { FC } from 'react';
import FlashcardsList from '../../components/FlashcardsList/FlashcardsList';
import Headline from '../../components/Headline/Headline';
import ContainerTemplate from '../../templates/ContainerTemplate';

const FlashcardsView: FC = () => {
  return (
    <>
      <ContainerTemplate secondary>
        <Headline title='All flashcards' subtitle='Here are all the flashcards of our users' />
      </ContainerTemplate>
      <ContainerTemplate>
        <FlashcardsList />
      </ContainerTemplate>
    </>
  );
};

export default FlashcardsView;
