import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { EcuadorColors } from '@/constants/theme';

export const unstable_settings = {
  initialRouteName: 'splash',
};

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: EcuadorColors.navyBlue },
          headerTintColor: EcuadorColors.white,
          contentStyle: { backgroundColor: EcuadorColors.darkNavy },
        }}
      >
        <Stack.Screen name="splash" options={{ headerShown: false, animation: 'none' }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false, animation: 'fade' }} />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
