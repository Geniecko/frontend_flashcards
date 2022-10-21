import styled from 'styled-components/macro';

interface ButtonProps {
  small?: boolean;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.whitePrimary};
  font-weight: 500;
  padding: ${({ small }) => (small ? '6px 12px' : ' 8px 20px')};
  min-width: ${({ small }) => (small ? 'unset' : ' 100px')};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  white-space: nowrap;
  font-size: ${({ small }) => small ? '1.2rem' : '1.4rem'};

  @media (min-width: 576px) {
    font-size: ${({ small }) => small ? '1.4rem' : '1.6rem'};
  }

  @media (hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }
`;
