import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const Container = styled.View`
  border-width: 1px;
  border-radius: 5px;
  padding: 16px;
  margin: 8px 0;
  overflow: hidden;
  background-color: ${props => props.$isOpen ? 'rgb(245, 247, 250)' : 'white'};
  border-color: ${props => props.$isOpen ? 'lightgray' : 'transparent'};
`

export const AnimatedContainer = Animated.createAnimatedComponent(Container);