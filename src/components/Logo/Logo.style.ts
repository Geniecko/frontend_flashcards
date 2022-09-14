import styled from 'styled-components/macro';

export const StyledLogo = styled.span`
  display: block;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.whitePrimary};
  font-weight: 600;
  padding: 16px;
  white-space: none;
  height: 100%;

  span {
    display: block;
    font-size: 1.4rem;
    font-weight: 400;
  }

  @media (min-width: 760px) {
    font-size: 2.2rem;
    padding: 16px 24px;
  }
`;
