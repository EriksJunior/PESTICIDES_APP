import { Stack } from "expo-router";

export default function RootLayout() { 
  return (
    <Stack>
      <Stack.Screen
        name="(perticide)"
        options={{ animation: "ios", headerShown: false }}
      />
      <Stack.Screen
        name="+not-found"
        options={{ animation: "ios", headerShown: false }}
      />
    </Stack>
  );
}
