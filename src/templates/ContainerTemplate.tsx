import { FC, ReactNode } from 'react';
import styled from 'styled-components/macro';

interface ContainerTemplateProps {
  children: ReactNode;
  secondary?: boolean;
}

const ContainerTemplate: FC<ContainerTemplateProps> = ({ children, secondary }) => (
  <StyledContainerTemplate secondary={secondary}>
    <Wrapper>{children}</Wrapper>
  </StyledContainerTemplate>
);

const StyledContainerTemplate = styled.div<ContainerTemplateProps>`
  width: 100%;
  padding: 36px 16px;
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.whiteSecondary : theme.whitePrimary};

  @media (min-width: 768px) {
    padding: 48px 24px;
  }
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export default ContainerTemplate;
