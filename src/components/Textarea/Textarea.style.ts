import styled from 'styled-components/macro';

export const Textarea = styled.textarea`
  background-color: ${({ theme }) => theme.whitePrimary};
  border: 2px solid ${({ theme }) => theme.primary};
  padding: 8px 12px;
  font-size: 1.6rem;
  font-weight: 400;
  width: 100%;
  min-height: 150px;
`;
