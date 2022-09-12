import styled from 'styled-components/macro';

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-left: 48px;
`;

export const NavigationLink = styled.a`
  color: ${({theme}) => theme.secondary};
  transition: .2s ease-in-out;
  font-weight: 600;


  &.active{
    color: ${({theme}) => theme.primary};
  }

  &:hover{
    color: ${({theme}) => theme.gray};
  }
`;