import styled from 'styled-components/macro';

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  order: 3;
  width: 100%;
  padding-left: 16px;
  padding-bottom: 16px;

  @media (min-width: 992px) {
    width: auto;
    flex-wrap: nowrap;
    justify-content: flex-start;
    margin-left: 48px;
    gap: 24px;
    order: unset;
    padding: 0;
  }
`;

export const NavigationLink = styled.a`
  color: ${({ theme }) => theme.secondary};
  transition: 0.2s ease-in-out;
  font-weight: 600;
  font-size: 1.4rem;

  @media (min-width: 576px) {
    font-size: 1.6rem;
  }

  &.active {
    color: ${({ theme }) => theme.primary};
  }

  &:hover {
    color: ${({ theme }) => theme.gray};
  }
`;
