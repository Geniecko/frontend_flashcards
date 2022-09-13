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
`;

export const Row = styled.div`
  margin-bottom: 24px;

  label{
    margin-bottom: 8px;
  }

  &:last-child{
    margin-bottom: 0;
  }
`;

export const StyledButton = styled.button`
  border-radius: 8px;
  margin-right: 8px;
`;