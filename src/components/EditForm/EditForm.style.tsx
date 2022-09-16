import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  margin-top: 24px;
  width: 100%;
`;

export const Row = styled.div`
  margin-bottom: 8px;

  span {
    display: block;
    margin-top: 8px;
  }

  label {
    margin-bottom: 8px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledButton = styled.button`
  border-radius: 8px;

  &.cancel {
    margin-left: auto;
  }
`;
