import styled, { css } from 'styled-components/native';

export const ContainerButton = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.PRIMARY_COLOR};
  `}
`;
