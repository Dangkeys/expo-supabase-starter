import React from "react";
import { Tabs } from "expo-router";

import { useColorScheme } from "@/lib/useColorScheme";
import { colors } from "@/constants/colors";
import { FontAwesome } from '@expo/vector-icons';

export default function TabsLayout() {
	const { colorScheme } = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor:
						colorScheme === "dark"
							? colors.dark.background
							: colors.light.background,
				},
				tabBarActiveTintColor:
					colorScheme === "dark"
						? colors.dark.foreground
						: colors.light.foreground,
				tabBarShowLabel: false,
			}}
		>
			<Tabs.Screen 
				name="index" 
				options={{ 
					title: "Home", 
					tabBarIcon: ({ color }) => (
						<FontAwesome name="home" size={24} color={color} />
					)
				}} 
			/>
			<Tabs.Screen 
				name="settings" 
				options={{ 
					title: "Settings",
					tabBarIcon: ({ color }) => (
						<FontAwesome name="gear" size={24} color={color} />
					)
				}} 
			/>
		</Tabs>
	);
}
