import styled from "styled-components/native";
import { Theme } from "../../../../styles/theme";

export const Container = styled.View`
  flex: 1;
  flex-shrink: 1;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  gap: 10px;
`

export const Img = styled.ImageBackground`
  width: 100%;
  height: 350px;
  elevation: 5;
  border-radius: 25px;
  margin-bottom: 10px;
  position: relative;
`

export const HeaderImage = styled.View`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  position: absolute;
  top: 10px;
  flex-direction: row;
  justify-content: space-between;
  color: ${Theme.dark.primaryText};
`

export const FooterImage = styled.View`
  flex: 1;
  justify-content: flex-end;
  border-radius: 25px;
  padding: 20px;
`

export const ContentFooterImage = styled.View`
  width: 100%;
  justify-content: space-between;
  gap: 5px;
  background-color: #00000092;
  padding: 10px;
  border-radius: 15px;
`

export const ActionItem = styled.TouchableOpacity`
  background-color: #00000092;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`

export const InfoContainer = styled.View`
  margin-top: 5px;
  gap: 10px;
`