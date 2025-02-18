import styled from "styled-components/native";

import { Theme } from "../../../../styles/theme";
import { TextType } from "../../../../styles/types";

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom-width: 0.5px;
  border-bottom-color: #3f3f3f;
  border-bottom-style: solid; 
`

export const GoBack = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
`

export const ProviderImage = styled.View`
  width: 100px;
  height: 100%;
  border-width: 1px;
  border-color: ${Theme.dark.darkGreen};
  border-style: solid;
  border-radius: 10px;  
`

export const PerticideDetails = styled.View`
  position: relative;
  flex: 1;
  justify-content: center;
`

export const RegisterNumber = styled.Text`
  text-align: right;
  font-size: ${TextType.low + 'px'};
  color: ${Theme.dark.secondaryText};
  position: absolute;
  font-weight: 500;
  top: 0;
  right: 0;
`

export const ProviderName = styled.Text`
  font-size: ${TextType.medium + 'px'};
  color: ${Theme.dark.secondaryText};
  font-weight: 500;
`

export const LastReview = styled.Text`
  font-size: 9px;
  color: ${Theme.dark.secondaryText};
  font-weight: 500;
  text-align: right;
  margin-top: 5px;
`

export const Container = styled.View`
  flex: 1;
  gap: 30px;
`

export const Content = styled.View`
  flex: 1;
  margin-top: ${props => props.$marginTop + 'px' || 0};
`

export const ContentDownloads = styled.View`
  margin-top: 10px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;
`