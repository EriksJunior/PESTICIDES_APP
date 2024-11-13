import { StyleSheet } from "react-native";
import { Theme } from "../../../styles/theme";

export const s = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: Theme.dark.default,
    borderRadius: 15,
    elevation: 10,
    gap: 15,
  },
})