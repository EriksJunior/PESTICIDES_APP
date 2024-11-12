import { StyleSheet } from "react-native";
import { Theme } from "../../../../styles/theme";
import { TextType } from "../../../../styles/style";

export const s = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  perticideCard: {
    marginTop: 15,
    padding: 10,
    width: "100%",
    height: 130,
    backgroundColor: Theme.dark.default,
    borderRadius: 15,
    elevation: 10,
    flexDirection: "row",
    gap: 15,
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
    gap: 5
  },
  contentDownloads: {
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
  },
  downloadItem: {
    flex: 1,
    backgroundColor: Theme.dark.default,
    elevation: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  }
})