import { Text, View, TouchableOpacity } from "react-native";
import { Content } from "./styles";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export function PerticideCard({ pesticide }) {
  return (
    <Content activeOpacity={0.6}>
      <TouchableOpacity>
        <FontAwesome6 name="file-pdf" size={24} color="#b8b8b8" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
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
            paddingRight: 16,
          }}
        >
          Nº 1554
        </Text>
      </TouchableOpacity>
    </Content>
  );
}
