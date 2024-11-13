import { View } from "react-native";
import { s } from "./styles";

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
    <View
      style={[
        s.card,
        {
          height,
          flexDirection,
          marginTop,
          paddingHorizontal,
          paddingVertical,
          gap,
        },
        justifyCenter && { justifyContent: "center" },
        alignCenter && { alignItems: "center" },
      ]}
    >
      {children}
    </View>
  );
}
