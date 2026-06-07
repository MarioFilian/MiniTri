import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { EcuadorColors } from '@/constants/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: EcuadorColors.gold,
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.45)',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: EcuadorColors.navyBlue,
          borderTopColor: EcuadorColors.gold,
          borderTopWidth: 0.5,
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          letterSpacing: 0.5,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, focused }) => (
            <Text style={{ fontSize: focused ? 26 : 22, opacity: focused ? 1 : 0.7 }}>
              ⚽
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Información',
          tabBarIcon: ({ color, focused }) => (
            <Text style={{ fontSize: focused ? 26 : 22, opacity: focused ? 1 : 0.7 }}>
              📋
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}
