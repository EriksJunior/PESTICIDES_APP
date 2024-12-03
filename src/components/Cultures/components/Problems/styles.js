import styled from "styled-components/native";
import { TextType } from "../../../../styles/types";
import { Theme } from "../../../../styles/theme";


export const ScientificName = styled.Text`
  font-size: ${TextType.low + 'px'};
  color: ${Theme.dark.secondaryText};
  font-weight: 500;
`

export const CommonName = styled.Text`
  font-size: ${TextType.medium + 'px'};
  color: ${Theme.dark.lightGreen};
  font-weight: 500;
`