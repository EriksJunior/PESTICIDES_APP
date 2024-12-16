import { View } from "react-native";
import { Subtitle, Title } from "../../../../styles/global";
import { Theme } from "../../../../styles/theme";
import { TextType } from "../../../../styles/types";

export function ProblemsDetails() {
  return (
    <View
      style={{
        flex: 1,
        flexShrink: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title $color={"#62ff5a5a"}>Algodão</Title>
        <Subtitle $color={"gray"}> Roundup Original DI </Subtitle>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Subtitle $color={"gray"}>
          Angiquinho (Aeschynomene denticulata)
        </Subtitle>
      </View>

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
          <Subtitle $color={Theme.dark.primaryText}>Calda Terrestre:</Subtitle>

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
    </View>
  );
}
