import { Button } from "@/components/Button";
import { router } from "expo-router";
import { View, Text } from "react-native";
const nestTwo = () => {
  return (
    <View>
      <Text>nested menu</Text>
      <Button title="back" onPress={() => router.back()} />
    </View>
  );
};
export default nestTwo;
