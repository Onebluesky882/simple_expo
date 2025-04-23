import { Button } from "@/components/Button";
import { Link } from "expo-router";
import { View, Text } from "react-native";
const nest = () => {
  return (
    <View>
      <Text>nested menu</Text>
      <Link href="second/nested-menu2" push asChild>
        <Button title={"nestTwo"} />
      </Link>
    </View>
  );
};
export default nest;
