import styled from 'styled-components/macro';

export const ModalWindow = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 16px;
  background-color: ${({theme}) => theme.whitePrimary};
  border: none;
  border-radius: 8px ;
  width: 90%;

  &::backdrop {
    backdrop-filter: blur(2px);
    background-color: rgba(0,0,0,0.5);
  }

  @media (min-width: 576px){
    max-width: 600px;
    padding: 24px;
  }
`;
