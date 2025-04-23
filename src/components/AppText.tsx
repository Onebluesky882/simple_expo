import { Text, Pressable } from "react-native";

const AppText = ({ children }: React.PropsWithChildren) => {
  return (
    <Pressable className="bg-blue-400 p-4 rounded">
      <Text className="text-white text-center">{children}</Text>
    </Pressable>
  );
};
export default AppText;
