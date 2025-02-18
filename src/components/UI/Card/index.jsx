import * as C from "./styles";
import { Theme } from "../../../styles/theme";
import { View, TouchableOpacity } from "react-native";

export function Card({
  children,
  height = 130,
  minHeight,
  flexDirection = "row",
  justify = "center",
  align = "normal",
  radius = 15,
  marginTop = 10,
  paddingHorizontal = 10,
  paddingVertical = 10,
  gap = 15,
  flexWrap = false,
  backgroundColor = Theme.dark.default,
  isShadow = true,
  isTouchable = false,
  onPress,
}) {
  return (
    <C.Card
      onPress={onPress && onPress}
      activeOpacity={0.6}
      as={isTouchable ? TouchableOpacity : View}
      $gap={gap}
      $backgroundColor={backgroundColor}
      $height={height}
      $radius={radius}
      $minHeight={minHeight}
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
