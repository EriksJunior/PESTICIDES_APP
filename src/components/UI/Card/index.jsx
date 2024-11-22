import { View } from "react-native";

import * as C from "./styles";
import { Theme } from "../../../styles/theme";

export function Card({
  children,
  height = 130,
  flexDirection = "row",
  justifyCenter = false,
  alignCenter = false,
  marginTop = 10,
  paddingHorizontal = 10,
  paddingVertical = 10,
  gap = 15,
}) {
  return (
    <C.Card
      $gap={gap}
      $backgroundColor={Theme.dark.default}
      $height={height}
      $flexDirection={flexDirection}
      $justifyCenter={justifyCenter}
      $alignCenter={alignCenter}
      $marginTop={marginTop}
      $paddingHorizontal={paddingHorizontal}
      $paddingVertical={paddingVertical}
    >
      {children}
    </C.Card>
  );
}
