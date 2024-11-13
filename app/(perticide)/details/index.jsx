import Constants from "expo-constants";
import { View } from "react-native";

import { Theme } from "../../../styles/theme";
import { Details } from "../../../components/Pesticides/components/Details";

export default function Index() {
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <View
      style={{
        backgroundColor: Theme.dark.primary,
        flex: 1,
        paddingTop: statusBarHeight,
      }}
    >
      <Details />
    </View>
  );
}
