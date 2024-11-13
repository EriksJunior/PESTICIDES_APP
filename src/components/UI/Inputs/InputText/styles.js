import { StyleSheet } from "react-native";
import { Theme } from "../../../../styles/theme"
import { TextType } from "../../../../styles/style";


export const s = StyleSheet.create({
  content: {
    flex: 1,
    borderRadius: 5,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
  },
  focused: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: Theme.dark.lightGreen,
  },
  notFocused: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: Theme.dark.secondaryText,
  },
  input: {
    flex: 1,
    fontSize: TextType.large,
    color: Theme.dark.inputColor,
  },
  contentIcon: {
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  }
})