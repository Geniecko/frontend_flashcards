import styled from 'styled-components/macro';

export const StyledButton = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 100;
  background-color: ${({ theme }) => theme.whiteSecondary};
  color: ${({ theme }) => theme.secondary};

  @media (min-width: 768px) {
    right: 24px;
    top: 24px;
  }
`;
