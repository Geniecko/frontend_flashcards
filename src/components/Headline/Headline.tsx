import { FC } from 'react';
import { StyledHeadline } from './Headline.style';

interface HeadlineProps {
  title: string;
  subtitle?: string;
}

const Headline: FC<HeadlineProps> = ({ title, subtitle }) => {
  return (
    <StyledHeadline>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </StyledHeadline>
  );
};

export default Headline;
