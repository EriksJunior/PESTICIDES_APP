import Constants from "expo-constants";
import { useLocalSearchParams } from "expo-router";
import { View, ScrollView } from "react-native";

import { Theme } from "../../styles/theme";
import { ProblemsDetails } from "../../components/Problems/components/Details";

export default function Index() {
  const statusBarHeight = Constants.statusBarHeight;
  const { id, cultureId, pesticideId } = useLocalSearchParams();

  return (
    <View
      style={{
        backgroundColor: Theme.dark.primary,
        flex: 1,
        paddingTop: statusBarHeight,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProblemsDetails
          id={id}
          cultureId={cultureId}
          pesticideId={pesticideId}
        />
      </ScrollView>
    </View>
  );
}
