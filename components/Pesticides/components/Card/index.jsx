import { Text, View, TouchableOpacity } from "react-native";
import { Content } from "./styles";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export function PerticideCard({ pesticide, idx, lastIdx }) {
  return (
    <Content activeOpacity={0.6}>
      <TouchableOpacity
        style={{
          height: "100%",
          width: 50,
          borderWidth: 0.5,
          backgroundColor: "#187b1363",
          borderStyle: "solid",
          alignItems: "center",
          justifyContent: "center",
          borderColor: 'transparent',
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
        }}
      >
        <FontAwesome6 name="file-pdf" size={24} color="#b8b8b8" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 16,
          paddingBottom: 16,
          paddingLeft: 16,
          paddingRight: 8,
        }}
      >
        <Text style={{ color: "#b8b8b8", fontWeight: 500, fontSize: 16 }}>
          {pesticide.text}
        </Text>

        <Text
          style={{
            color: "gray",
            fontWeight: 500,
            fontSize: 11,
          }}
        >
          Nº 1554
        </Text>
      </TouchableOpacity>
    </Content>
  );
}
