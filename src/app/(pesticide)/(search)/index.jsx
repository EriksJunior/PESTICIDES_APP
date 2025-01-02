import { Search } from "../../../components/Pesticides/components/Search";
import { View } from "react-native";
import Constants from "expo-constants";

export default function Index() {
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <View
      style={{
        backgroundColor: "#141414",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: statusBarHeight,
      }}
    >
      <Search />
    </View>
  );
}
