import styled from 'styled-components/macro';

interface CardProps {
  isReversed: boolean;
}

export const Card = styled.div`
  min-height: 300px;
  position: relative;
  cursor: pointer;
`;

export const CardFront = styled.div<CardProps>`
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: ${({ isReversed }) =>
    isReversed ? 'perspective(1000px) rotateY(-180deg)' : 'perspective(1000px) rotateY(0deg)'};
  transition: 1s;
  background-color: ${({ theme }) => theme.primary};

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

export const CardBack = styled.div<CardProps>`
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: ${({ isReversed }) =>
    isReversed ? 'perspective(1000px) rotateY(0deg)' : 'perspective(1000px) rotateY(180deg)'};
  transition: 1s;
  background-color: ${({ theme }) => theme.whiteSecondary};

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

export const Question = styled.p`
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: 600;
  color: ${({ theme }) => theme.whitePrimary};
`;

export const Answer = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.secondary};
`;

export const Author = styled.span<CardProps>`
  position: absolute;
  text-transform: capitalize;
  font-size: 1.6rem;
  color: ${({ theme, isReversed }) => (isReversed ? theme.secondary : theme.whiteSecondary)};
  right: 16px;
  bottom: 16px;
  transition: color 1s ease-in-out;

  @media (min-width: 768px) {
    right: 24px;
    bottom: 24px;
  }
`;

export const Hint = styled.span<CardProps>`
  position: absolute;
  font-size: 1.6rem;
  color: ${({ theme, isReversed }) => (isReversed ? theme.secondary : theme.whiteSecondary)};
  left: 16px;
  top: 16px;
  font-weight: 600;
  transition: color 1s ease-in-out;

  @media (min-width: 768px) {
    left: 24px;
    top: 24px;
  }
`;
