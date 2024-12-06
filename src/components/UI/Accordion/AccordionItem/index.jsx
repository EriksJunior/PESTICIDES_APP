import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { AnimatedContainer } from "./styles";

export function AccordionItem({ item, isOpen, onPress }) {
  const containerHeight = useSharedValue(0);
  const contentHeight = useSharedValue(0);
  const iconRotation = useSharedValue("0deg");

  const layoutContainer = (e) => {
    if (containerHeight.value === 0) {
      containerHeight.value = e.nativeEvent.layout.height + 32 + 2;
    }
  };

  const layoutContent = (e) => {
    contentHeight.value = e.nativeEvent.layout.height;
  };

  const containerStyle = useAnimatedStyle(() => {
    let height;

    if (containerHeight.value > 0 && contentHeight.value > 0) {
      height = withSpring(
        containerHeight.value + (isOpen ? contentHeight.value : 0),
        { damping: 15 }
      );
      iconRotation.value = withSpring(`${isOpen ? 180 : 0}deg`, {
        damping: 15,
      });
    }

    return { height };
  }, [isOpen, containerHeight, contentHeight]);

  return (
    <AnimatedContainer $isOpen={isOpen} style={[containerStyle]}>
      <Pressable
        onPress={onPress}
        onLayout={layoutContainer}
        style={({ pressed }) => [
          { flexDirection: "row", opacity: pressed ? 0.6 : 1 },
        ]}
      >
        <Text numberOfLines={1}>{item?.nome_comum}</Text>

        <Animated.View style={{ transform: [{ rotate: iconRotation }] }}>
          <Ionicons name="chevron-down" size={20} color={"gray"} />
        </Animated.View>
      </Pressable>

      <View
        style={{ position: "absolute", paddingTop: 16 }}
        onLayout={layoutContent}
      >
        <Text style={{ color: "red" }}>
          sdlkjfh jsjjhklfdsjkhhjk hjkfshjkdhfj hksdhkj
        </Text>
      </View>
    </AnimatedContainer>
  );
}
