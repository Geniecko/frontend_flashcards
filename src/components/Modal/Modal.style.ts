import styled from 'styled-components/macro';

export const ModalWindow = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 16px;

  &::backdrop {
    backdrop-filter: blur(2px);
  }
`;
