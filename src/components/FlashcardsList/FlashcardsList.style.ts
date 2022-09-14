import styled from 'styled-components/macro';

export const List = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    gap: 24px;
    grid-template-columns: repeat(2, 1fr);
  }
`;
