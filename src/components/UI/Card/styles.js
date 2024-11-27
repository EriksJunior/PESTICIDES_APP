import styled from "styled-components/native";

export const Card = styled.View`
  flex: 1;
  gap: ${props => props.$gap + 'px'};
  background-color: ${props => props.$backgroundColor};
  border-radius: 15px;
  elevation: 10;
  height: ${props => props.$height + 'px'};
  flex-direction: ${props => props.$flexDirection};
  justify-content: ${props => props.$justify};
  align-items: ${props => props.$align};
  margin-top: ${props => props.$marginTop + 'px'};

  ${(props) => props.$paddingHorizontal && `
    padding-left: ${props.$paddingHorizontal}px;
    padding-right: ${props.$paddingHorizontal}px;
  `}

  ${(props) => props.$paddingVertical && `
    padding-top: ${props.$paddingVertical}px;
    padding-bottom: ${props.$paddingVertical}px;
  `}
`