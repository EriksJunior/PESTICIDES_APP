import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS,
  useAnimatedStyle,
  SlideInDown,
  SlideOutDown
} from "react-native-reanimated";

import { AnimatedContainer, Container } from "./styles";

export function BottomSheet({ children, onClose }) {
  const offSet = useSharedValue(0);
  const DIMENSIONS = Dimensions.get("window");
  const SHEET_HEIGHT = DIMENSIONS.height - 100;

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
      if (offSet.value < SHEET_HEIGHT / 2) {
        offSet.value = withSpring(0);
      } else {
        offSet.value = withTiming(SHEET_HEIGHT, {}, () => {
          runOnJS(close)();
        });
      }
    });

  const translateY = useAnimatedStyle(() => ({
    transform: [{ translateY: offSet.value }],
  }));

  return (
    <Container>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <GestureDetector gesture={pan}>
          <AnimatedContainer style={[translateY]} entering={SlideInDown.springify().damping(15)} exiting={SlideOutDown}>
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
    </Container>
  );
}
