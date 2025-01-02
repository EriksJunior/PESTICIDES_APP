import { router } from "expo-router";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import * as C from "./styles";
import { Theme } from "../../../../styles/theme";

export function PesticideCard({ pesticide }) {
  return (
    <C.Content>
      <C.Pdf activeOpacity={0.6}>
        <FontAwesome6
          name="file-pdf"
          size={24}
          color={Theme.dark.primaryText}
        />
      </C.Pdf>

      <C.Details onPress={() => router.push(`/(pesticide)/details?id=${pesticide.id}`)}>
        <C.Name numberOfLines={1}>{pesticide.nome_comum}</C.Name>

        <C.registerNumber numberOfLines={1}>
          Nº {pesticide.registro}
        </C.registerNumber>
      </C.Details>
    </C.Content>
  );
}
