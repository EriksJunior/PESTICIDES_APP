import { View } from "react-native";
import { Theme } from "../../../../styles/theme";

export function Skeleton() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 28,
        padding: 8,
        backgroundColor: Theme.dark.default,
        borderRadius: 8,
        height: 60,
      }}
    >
      <View
        style={{
          width: 42,
          height: "100%",
          backgroundColor: "#bdbdbd",
          backgroundColor: "#bdbdbd",
          borderRadius: 4,
        }}
      ></View>

      <View style={{ flex: 1, gap: 10, justifyContent: 'center', flexDirection: 'column'}}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: 'center',
          }}
        >
          <View
            style={{
              height: 7,
              width: "50%",
              backgroundColor: "#bdbdbd",
              borderRadius: 4,
            }}
          />
          
          <View
            style={{
              height: 7,
              width: 40,
              backgroundColor: "#bdbdbd",
              borderRadius: 4,
            }}
          />
        </View>
        
        <View
          style={{
            height: 7,
            width: "70%",
            backgroundColor: "#c1c1c1",
            borderRadius: 4,
            marginTop: 10,
          }}
        />
      </View>
    </View>
  );
}
