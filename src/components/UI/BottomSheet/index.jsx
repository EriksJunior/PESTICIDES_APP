import { Text, TouchableOpacity, View } from "react-native";
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS,
  useAnimatedStyle,
} from "react-native-reanimated";

import { AnimatedContainer } from "./styles";

export function BottomSheet({ children, onClose }) {
  const offSet = useSharedValue(0);
  const SHEET_HEIGHT = 220;

  const close = () => {
    offSet.value = 0;

    onClose();
  };

  const pan = Gesture.Pan()
    .onChange((e) => {
      const offSetVertial = e.changeY + offSet.value;
      const clamp = Math.max(-20, offSetVertial);

      offSet.value = offSetVertial > 0 ? offSetVertial : withSpring(clamp);
    })
    .onFinalize(() => {
      if (offSet.value < SHEET_HEIGHT / 3) {
        offSet.value = withSpring(0);
      } else {
        offSet.value = withTiming(SHEET_HEIGHT, {}, () => {
          runOnJS(close)();
        });
      }
    })
    .shouldCancelWhenOutside(true);

  const translateY = useAnimatedStyle(() => ({
    transform: [{ translateY: offSet.value }],
  }));

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={pan}>
        <AnimatedContainer style={[translateY]}>
          <MaterialCommunityIcons
            name="drag-horizontal-variant"
            color="#62ff5a5a"
            size={24}
            style={{ marginTop: 10, alignSelf: "center" }}
          />
          <Text
            style={{
              color: "#FFF",
              fontSize: 18,
              fontWeight: "bold",
              margin: 24,
            }}
          >
            OPAAA
          </Text>
        </AnimatedContainer>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}
