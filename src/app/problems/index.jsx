import Constants from "expo-constants";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, ScrollView } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import { ProblemsDetails } from "../../components/Problems/components/Details";

import { Theme } from "../../styles/theme";
import { ActionItem, Header, Title } from "../../styles/global";

export default function Index() {
  const statusBarHeight = Constants.statusBarHeight;
  const { id, cultureId, pesticideId } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View
      style={{
        backgroundColor: Theme.dark.primary,
        flex: 1,
        paddingTop: statusBarHeight,
      }}
    >
      <Header>
        <ActionItem activeOpacity={0.6} onPress={() => router.back()}>
          <SimpleLineIcons name="arrow-left" size={15} color="white" />
        </ActionItem>

        <Title>Problemas</Title>
      </Header>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: 18, paddingBottom: 50 }}
      >
        <ProblemsDetails
          id={id}
          cultureId={cultureId}
          pesticideId={pesticideId}
        />
      </ScrollView>
    </View>
  );
}
