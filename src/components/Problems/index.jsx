import { router } from "expo-router";
import { TouchableOpacity, View, Text } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import * as P from "./styles";
import { Theme } from "../../styles/theme";

export function Problems({ problem, pesticideId, cultureId }) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() =>
        router.push(
          `/problems?id=${problem.id}&pesticideId=${pesticideId}&cultureId=${cultureId}`
        )
      }
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Theme.dark.primary,
        padding: 10,
        borderRadius: 10,
        gap: 10,
        elevation: 10,
        width: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
          marginRight: 10,
        }}
      >
        <P.CommonName numberOfLines={1} $color={Theme.dark.darkGreen}>
          {problem?.nome_comum}
        </P.CommonName>

        <P.ScientificName
          numberOfLines={1}
          style={{ flexShrink: 1, marginLeft: 5 }}
        >
          ({problem?.nome_cientifico})
        </P.ScientificName>
      </View>

      <View>
        <SimpleLineIcons name="arrow-right" size={15} color="gray" />
      </View>
    </TouchableOpacity>
  );
}
