import styled from 'styled-components/macro';

export const StyledLogo = styled.span`
  display: block;
  font-size: 2.2rem;
  color: ${({theme}) => theme.primary};
  font-weight: 600;

  @media (min-width: 760px){
    font-size: 2.4rem;
  }
`;
