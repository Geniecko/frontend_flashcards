import styled from 'styled-components/macro';

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.whitePrimary};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 16px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

export const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding-right: 16px;
  height: 100%;

  @media (min-width: 768px) {
    padding-right: 24px;
  }

  @media (min-width: 1400px) {
    padding-right: 0;
  }
`;

export const UserPanel = styled.div`
  margin-left: auto;
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const UserName = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  display: block;
`;
