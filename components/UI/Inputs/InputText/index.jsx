import { useState } from "react";
import { Text, View } from "react-native";
import { Content, Input } from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export function InputCustom({ showSearch = false }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Content $focused={isFocused}>
      <Input
        placeholderTextColor={'#6a6262'}
        placeholder="Pesquise por nome ou Nº Registro"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {showSearch &&
        <View style={{ height: 35, width: 35, justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            <MaterialCommunityIcons name={'leaf'} color="#187b13" size={24} />
          </Text>
        </View>
      }
    </Content>
  )
}