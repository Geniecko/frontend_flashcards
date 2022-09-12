import { FC } from 'react';
import Headline from '../../components/Headline/Headline';
import ContainerTemplate from '../../templates/ContainerTemplate';

const pageTitles = {
  latest: {
    title: 'The latest articles',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500',
  },
  random: {
    title: 'Random Articles',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500',
  },
};

const Home: FC = () => {
  return (
    <>
      <ContainerTemplate>
        <Headline title={pageTitles.latest.title} subtitle={pageTitles.latest.subtitle} />
      </ContainerTemplate>
      <ContainerTemplate secondary>
        <Headline title={pageTitles.latest.title} subtitle={pageTitles.latest.subtitle} />
      </ContainerTemplate>
    </>
  );
};

export default Home;
