import { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { s } from "./styles";
import { Theme } from "../../../../styles/theme";

export function InputCustom({ rightIcon }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[s.content, isFocused ? s.focused : s.notFocused]}>
      <TextInput
        style={s.input}
        placeholderTextColor={Theme.dark.secondaryText}
        placeholder="Pesquise por nome ou Nº Registro"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {rightIcon && (
        <View style={s.contentIcon}>
          <Text>{rightIcon}</Text>
        </View>
      )}
    </View>
  );
}
