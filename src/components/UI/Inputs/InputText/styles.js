import styled from "styled-components/native";

import { Theme } from "../../../../styles/theme"
import { TextType } from "../../../../styles/style";

export const Content = styled.View`
  flex: 1;
  border-radius: 5px;
  padding: 5px;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;

  ${(props) => props.$isFocused ?
    `
      border-width: 2px;
      border-style: solid;
      borderColor: ${Theme.dark.lightGreen}
    `
    :
    `
      border-width: 2px;
      border-style: solid;
      borderColor: ${Theme.dark.secondaryText}
    `
  }
`

export const InputText = styled.TextInput`
  flex: 1;
  font-size: ${TextType.large + 'px'};
  color: ${Theme.dark.inputColor};
`

export const ContentIcon = styled.View`
  height: 35px;
  width: 35px;
  justify-content: center;
  align-items: center;
`