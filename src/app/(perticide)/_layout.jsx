import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="(search)"
        options={{ animation: "ios", headerShown: false }}
      />
      <Stack.Screen
        name="details/index"
        options={{ animation: "ios", headerShown: false }}
      />
    </Stack>
  );
}
