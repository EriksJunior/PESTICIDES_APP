import { Text, View, TouchableOpacity } from "react-native";
import { s } from "./styles";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Theme } from "@/styles/theme";

export function PerticideCard({ pesticide }) {
  return (
    <View style={s.content}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={s.pdf}
      >
        <FontAwesome6 name="file-pdf" size={24} color={Theme.dark.primaryText} />
      </TouchableOpacity>

      <TouchableOpacity
        style={s.details}
        onPress={() => alert('clicou')}
      >
        <Text style={s.name}>
          {pesticide.text}
        </Text>

        <Text
          style={s.registerNumber}
        >
          Nº 1554
        </Text>
      </TouchableOpacity>
    </View>
  );
}
