import styled from 'styled-components/macro';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.whitePrimary};
  font-weight: 500;
  padding: 8px 20px;
  min-width: 100px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  white-space: none;

  @media (hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }
`;
