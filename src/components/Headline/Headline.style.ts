import styled from 'styled-components/macro';

export const StyledHeadline = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
    font-size: 2.8rem;
  }

  p {
    margin-top: 12px;
    margin-bottom: 0;
    max-width: 600px;
    font-weight: 400;
  }
`;
