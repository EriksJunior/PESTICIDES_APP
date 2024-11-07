import { router } from "expo-router";
import { SimpleLineIcons } from "@expo/vector-icons";
import { View, TouchableOpacity, Text } from "react-native";

import { Theme } from "../../../../styles/theme";
import { TextType } from "../../../../styles/style";

export function Details() {
  return (
    <>
      <View
        style={{
          height: 60,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => router.navigate("/(search)")}
          style={{
            width: 20,
            height: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SimpleLineIcons name="arrow-left" size={15} color="white" />
        </TouchableOpacity>

        <Text
          style={{
            color: Theme.dark.primaryText,
            fontSize: TextType.large,
            fontWeight: "500",
          }}
        >
          Detalhes
        </Text>
      </View>

      <View
        style={{
          marginTop: 15,
          padding: 10,
          width: "100%",
          height: 130,
          backgroundColor: Theme.dark.default,
          borderRadius: 15,
          elevation: 10,
          flexDirection: "row",
          gap: 15,
        }}
      >
        <View
          style={{
            width: 100,
            height: "100%",
            borderWidth: 1,
            borderColor: Theme.dark.darkGreen,
            borderStyle: "solid",
            borderRadius: 10,
          }}
        ></View>

        <View
          style={{
            position: "relative",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "right",
              fontSize: TextType.low,
              color: Theme.dark.secondaryText,
              position: "absolute",
              fontWeight: "500",
              top: 0,
              right: 0,
            }}
          >
            Nº 15533
          </Text>

          <View style={{ gap: 5 }}>
            <Text
              style={{
                fontSize: TextType.large,
                color: Theme.dark.primaryText,
                fontWeight: "500",
              }}
            >
              Roundup WG
            </Text>
            <Text
              style={{
                fontSize: TextType.medium,
                color: Theme.dark.secondaryText,
                fontWeight: "500",
              }}
            >
              Fabricante teste bla bla
            </Text>
          </View>
        </View>
      </View>

      <Text
        style={{
          color: Theme.dark.secondaryText,
          fontSize: 9,
          fontWeight: "500",
          textAlign: "right",
          marginTop: 10
        }}
      >
        Revizado em 06/11/2024
      </Text>
    </>
  );
}
