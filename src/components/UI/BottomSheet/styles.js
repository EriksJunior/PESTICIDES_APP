import styled from "styled-components/native";
import Animated from "react-native-reanimated";

import { Theme } from "../../../styles/theme";
import { Dimensions } from "react-native";

const DIMENSIONS = Dimensions.get('window')

const Container = styled.View`
  width: ${DIMENSIONS.width + 'px'};
  height: ${(DIMENSIONS.height - 100) + 'px'} ;
  background-color: ${Theme.dark.default};
  position: absolute;
  bottom: -50px;
`

export const AnimatedContainer = Animated.createAnimatedComponent(Container);