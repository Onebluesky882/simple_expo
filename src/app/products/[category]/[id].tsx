import { Stack } from "expo-router";
import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";
import { View, Text } from "react-native";
const product = () => {
  const param = useLocalSearchParams();
  return (
    <View>
      <Text>product :{JSON.stringify(param, null, null)}</Text>
    </View>
  );
};
export default product;
