import AppText from "@/components/AppText";
import { Link } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
const index = () => {
  return (
    <View className="items-center justify-center flex-1">
      <Link href={{ pathname: "/two", params: { name: "wansing" } }} push>
        <Text> push to two</Text>
      </Link>
    </View>
  );
};
export default index;
