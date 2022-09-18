import styled from 'styled-components/macro';

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormRow = styled.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }

  label {
    font-size: 1.6rem;
    font-weight: 600;
    display: block;
    margin-bottom: 8px;
  }
`;

export const ValidateMessage = styled.span`
  display: block;
  margin-bottom: 24px;
`;

export const SuccesPopup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
