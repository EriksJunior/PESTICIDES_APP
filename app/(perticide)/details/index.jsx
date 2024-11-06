import { View, TouchableOpacity, Text } from "react-native";
import { Theme } from "../../../styles/theme";
import { TextType } from "../../../styles/style";
import Constants from "expo-constants";

import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

export default function Details() {
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <View
      style={{
        backgroundColor: Theme.dark.primary,
        flex: 1,
        paddingTop: statusBarHeight,
      }}
    >
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 10,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SimpleLineIcons name="arrow-left" size={15} color="white" />
        </TouchableOpacity>

        <Text
          style={{
            color: Theme.dark.primaryText,
            fontSize: TextType.title,
            fontWeight: "500",
          }}
        >
          Detalhes
        </Text>
      </View>

      <View
        style={{
          padding: 20,
          width: "100%",
        }}
      >
        <View
          style={{
            padding: 10,
            width: "100%",
            height: 100,
            backgroundColor: Theme.dark.default,
            borderRadius: 15,
            elevation: 10,
          }}
        ></View>
      </View>
    </View>
  );
}
