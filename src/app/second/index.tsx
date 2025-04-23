import { Button } from "@/components/Button";
import { Link } from "expo-router";
import { View, Text } from "react-native";
const second = () => {
  return (
    <View>
      <Text>maya</Text>
      <Link href="second/nested-menu" push asChild>
        <Button title={"nested"} />
      </Link>
    </View>
  );
};
export default second;
