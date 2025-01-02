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

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  border-bottom-width: 0.5px;
  border-bottom-color: #3f3f3f;
  border-bottom-style: solid; 
  height: 55px;
`

export const ActionItem = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: flex-start;
`
