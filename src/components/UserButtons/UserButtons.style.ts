import styled from 'styled-components/macro';

export const UserButton = styled.div`
  display: flex;
  gap: 16px;
  position: absolute;
  right: 16px;
  top: 16px;

  @media (min-width: 768px) {
    right: 24px;
    top: 24px;
  }

  button{
    background-color: ${({theme }) => theme.whiteSecondary};
    color: ${({theme }) => theme.secondary};;
  }
`;