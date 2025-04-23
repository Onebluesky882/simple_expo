import React from "react";
import "../global.css";
import { Tabs } from "expo-router";
import { Entypo } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      backBehavior="order"
      screenOptions={{
        tabBarActiveTintColor: "pink",
        tabBarBadgeStyle: { color: "white", backgroundColor: "tomato" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="one"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarBadge: 6,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="second"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
