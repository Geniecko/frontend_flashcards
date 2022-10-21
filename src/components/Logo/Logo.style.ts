import styled from 'styled-components/macro';

export const StyledLogo = styled.span`
  display: block;
  font-size: 1.8rem;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.whitePrimary};
  font-weight: 600;
  padding: 16px;
  white-space: none;
  height: 100%;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  span {
    display: block;
    font-size: 1.3rem;
    font-weight: 400;

    @media (min-width: 768px) {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 760px) {
    font-size: 2.2rem;
    padding: 16px 24px;
  }
`;
