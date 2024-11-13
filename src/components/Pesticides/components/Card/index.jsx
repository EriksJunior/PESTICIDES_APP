import { router } from 'expo-router';
import { Text, View, TouchableOpacity } from "react-native";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { Theme } from "../../../../styles/theme";
import { s } from "./styles";

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
        onPress={() => router.push('/(perticide)/details')}
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
