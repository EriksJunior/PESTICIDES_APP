import { View } from "react-native";

import * as C from "./styles";
import { Theme } from "../../../styles/theme";

export function Card({
  children,
  height = 130,
  flexDirection = "row",
  justify = "center",
  align = "normal",
  marginTop = 10,
  paddingHorizontal = 10,
  paddingVertical = 10,
  gap = 15,
  flexWrap = false,
  backgroundColor = Theme.dark.default,
  isShadow = true,
}) {
  return (
    <C.Card
      $gap={gap}
      $backgroundColor={backgroundColor}
      $height={height}
      $flexDirection={flexDirection}
      $justify={justify}
      $align={align}
      $marginTop={marginTop}
      $paddingHorizontal={paddingHorizontal}
      $paddingVertical={paddingVertical}
      $flexWrap={flexWrap}
      $isShadow={isShadow}
    >
      {children}
    </C.Card>
  );
}
