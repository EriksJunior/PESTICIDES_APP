import Constants from "expo-constants";
import { View, ScrollView } from "react-native";

import { Theme } from "../../styles/theme";
import { ProblemsDetails } from "../../components/Problems/components/Details";

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProblemsDetails />
      </ScrollView>
    </View>
  );
}
