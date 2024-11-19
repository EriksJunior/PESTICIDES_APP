import { StyleSheet } from "react-native";
import { TextType } from "../../../../styles/style";
import { Theme } from "../../../../styles/theme";


export const s = StyleSheet.create({
  content: {
    flex: 1,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: Theme.dark.default,
    borderRadius: 5,
  },
  pdf: {
    height: "100%",
    width: 50,
    borderWidth: 0.5,
    backgroundColor: "#187b1363",
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "transparent",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  details: {
    flex: 1,
    gap: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 8,
  },
  name: {
    color: Theme.dark.primaryText,
    fontWeight: '500',
    fontSize: TextType.medium,
    flex: 1
  },
  registerNumber: {
    color: Theme.dark.secondaryText,
    fontWeight: '500',
    fontSize: TextType.low,
    flexShrink: 1,
    maxWidth: 100
  }
})