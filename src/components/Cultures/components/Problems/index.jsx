import { TouchableOpacity, View, Text } from "react-native";
import { Subtitle } from "../../../../styles/global";

import * as P from "./styles";
import { Theme } from "../../../../styles/theme";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FindProblemsDetails } from "../../../../services/ProblemsService";

export function Problems({ problem, pesticideId, cultureId }) {
  const findProblemsDetails = async () => {
    const problemsDetails = await FindProblemsDetails(
      cultureId,
      pesticideId,
      problem.id
    );

    console.log(problemsDetails)
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={findProblemsDetails}
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

      {/* <View
        style={{
          flexDirection: "row",
          gap: 15,
          flex: 1,
          flexShrink: 1,
        }}
      >
        <View style={{ gap: 5 }}>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
            }}
          >
            <Subtitle $color={Theme.dark.primaryText}>Dose:</Subtitle>

            <Subtitle style={{ marginTop: 1.3 }}>2 á 3 L p.c/ha</Subtitle>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
            }}
          >
            <Subtitle $color={Theme.dark.primaryText}>
              Calda Terrestre:
            </Subtitle>

            <Subtitle style={{ marginTop: 1.3 }}>120 L de calda/ha</Subtitle>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
            }}
          >
            <Subtitle $color={Theme.dark.primaryText}>Calda Aérea:</Subtitle>

            <Subtitle style={{ marginTop: 1.3 }}>
              20 á 40 L calda/ha (aéreo)
            </Subtitle>
          </View>
        </View>
      </View> */}
    </TouchableOpacity>
  );
}
