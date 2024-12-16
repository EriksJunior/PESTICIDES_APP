import { Dimensions, View } from "react-native";
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
  SlideOutDown,
} from "react-native-reanimated";

import { AnimatedContainer, Container } from "./styles";

export function BottomSheet({ children, onClose, isOpen = false }) {
  const offSet = useSharedValue(0);
  const DIMENSIONS = Dimensions.get("window");
  const SHEET_HEIGHT = DIMENSIONS.height - 100;

  const close = () => {
    offSet.value = 0;

    onClose();
  };

  const pan = Gesture.Pan()
    .enabled(isOpen)
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
    isOpen && (
      <Container>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <AnimatedContainer
            style={[translateY]}
            entering={SlideInDown.springify().damping(15)}
            exiting={SlideOutDown}
          >
            <GestureDetector gesture={pan}>
              <View
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 35,
                }}
              >
                <MaterialCommunityIcons
                  name="drag-horizontal-variant"
                  color="#62ff5a5a"
                  size={24}
                />
              </View>
            </GestureDetector>

            {children}
          </AnimatedContainer>
        </GestureHandlerRootView>
      </Container>
    )
  );
}
