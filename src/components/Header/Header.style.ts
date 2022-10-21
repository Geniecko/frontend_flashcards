import styled from 'styled-components/macro';

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.whitePrimary};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (min-width: 992px) {
    height: 75px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  padding-right: 16px;
  height: 100%;

  @media (min-width: 992px) {
    padding-right: 24px;
    align-items: center;
    gap: 0;
    flex-wrap: nowrap;
  }

  @media (min-width: 1400px) {
    padding-right: 0;
  }
`;

export const UserPanel = styled.div`
  order: 1;
  margin-left: auto;
  display: flex;
  gap: 12px;
  align-items: center;

  @media (min-width: 768px) {
    gap: 20px;
  }

  @media (min-width: 992px) {
    order: unset;
  }
`;

export const UserName = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: capitalize;
  color: ${({ theme }) => theme.primary};
  display: block;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;
