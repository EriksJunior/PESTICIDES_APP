import { useEffect } from "react";
import { Stack } from "expo-router";
import * as NavigationBar from "expo-navigation-bar";
import { GlobalProvider } from "../context";

import { Theme } from "../styles/theme";

export default function RootLayout() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync(Theme.dark.primary);
  }, []);

  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen
          name="(perticide)"
          options={{ animation: "ios", headerShown: false }}
        />
        <Stack.Screen
          name="problems/index"
          options={{ animation: "ios", headerShown: false }}
        />
        <Stack.Screen
          name="+not-found"
          options={{ animation: "ios", headerShown: false }}
        />
      </Stack>
    </GlobalProvider>
  );
}
