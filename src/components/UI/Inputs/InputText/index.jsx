import { useState } from "react";

import { Content, InputText, ContentIcon } from "./styles";
import { Text } from "react-native";

import { Theme } from "../../../../styles/theme";

export function InputCustom({ rightIcon, handleChange }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Content $isFocused={isFocused}>
      <InputText
        placeholderTextColor={Theme.dark.secondaryText}
        placeholder="Pesquise por nome ou Nº Registro"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={(text) => {
          handleChange && handleChange(text);
        }}
      />

      {rightIcon && (
        <ContentIcon>
          <Text>{rightIcon}</Text>
        </ContentIcon>
      )}
    </Content>
  );
}
