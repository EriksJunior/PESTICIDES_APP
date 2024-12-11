import styled from "styled-components/native";
import Animated from "react-native-reanimated";

import { Theme } from "../../../styles/theme";
import { Dimensions } from "react-native";

const DIMENSIONS = Dimensions.get('window')

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`

const Content = styled.View`
  width: ${DIMENSIONS.width + 'px'};
  height: ${(DIMENSIONS.height - 100) + 'px'} ;
  background-color: ${Theme.dark.default};
  position: absolute;
  bottom: -80px;
`

export const AnimatedContainer = Animated.createAnimatedComponent(Content);