import { StyleSheet } from "react-native";
import { Theme } from "../../../../styles/theme";
import { TextType } from "../../../../styles/style";

export const s = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#3f3f3f',
    borderBottomStyle: 'solid',
  },
  goBack: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: Theme.dark.primaryText,
    fontSize: TextType.large,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: TextType.low,
    color: Theme.dark.secondaryText,
    fontWeight: "500",
  },
  providerImage: {
    width: 100,
    height: "100%",
    borderWidth: 1,
    borderColor: Theme.dark.darkGreen,
    borderStyle: "solid",
    borderRadius: 10,
  },
  perticideDetails: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
  },
  registerNumber: {
    textAlign: "right",
    fontSize: TextType.low,
    color: Theme.dark.secondaryText,
    position: "absolute",
    fontWeight: "500",
    top: 0,
    right: 0,
  },
  providerName: {
    fontSize: TextType.medium,
    color: Theme.dark.secondaryText,
    fontWeight: "500",
  },
  lastReview: {
    color: Theme.dark.secondaryText,
    fontSize: 9,
    fontWeight: "500",
    textAlign: "right",
    marginTop: 5,
  },
  content: {
    marginTop: 40,
  },
  contentDownloads: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
  },
})