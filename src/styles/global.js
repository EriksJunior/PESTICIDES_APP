import styled from "styled-components/native";

import { Theme } from "./theme"
import { TextType } from "./types";

export const Title = styled.Text`
  color: ${props => props.$color || Theme.dark.primaryText};
  font-size: ${props => props.$fontSize ? props.$fontSize + 'px' : TextType.large + 'px'};
  font-weight: 500; 
`

export const Subtitle = styled.Text`
  color: ${props => props.$color || Theme.dark.secondaryText};
  font-size: ${props => props.$fontSize ? props.$fontSize + 'px' : TextType.low + 'px'};
  font-weight: 500; 
`
