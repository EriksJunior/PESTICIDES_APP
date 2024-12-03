import styled from "styled-components/native";

import { TextType } from "../../../../styles/types";
import { Theme } from "../../../../styles/theme";

export const Content = styled.View`
  flex: 1;
  height: 60px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background-color: ${Theme.dark.default};
  border-radius: 5px;
`

export const Pdf = styled.TouchableOpacity`
  height: 100%;
  width: 50px;
  border-width: 0.5px;
  background-color: #187b1363;
  border-style: solid;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`

export const Details = styled.TouchableOpacity`
  flex: 1;
  gap: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 8px;
`

export const Name = styled.Text`
  flex: 1;
  color: ${Theme.dark.primaryText};
  font-weight: 500;
  font-size: ${TextType.medium + 'px'};
`

export const registerNumber = styled.Text`
  max-width: 100px;
  flex-shrink: 1;
  color: ${Theme.dark.secondaryText};
  font-weight: 500;
  font-size: ${TextType.low + 'px'};
`