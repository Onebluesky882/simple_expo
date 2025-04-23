import AppText from "@/components/AppText";
import { Link, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
const two = () => {
  const param = useLocalSearchParams<{ name: string }>();
  return (
    <View className="items-center justify-center flex-1">
      {param && <AppText> {param.name}</AppText>}
      <Link href={"/three"} push>
        <Text>push to three </Text>
      </Link>
    </View>
  );
};
export default two;
