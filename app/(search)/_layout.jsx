import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#187b13",
        tabBarInactiveTintColor: "#565656",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#141414",
          borderTopColor: "#3f3f3f",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Agrotóxicos",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name={"search1"} color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "Atualizações",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name={"book"} color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
