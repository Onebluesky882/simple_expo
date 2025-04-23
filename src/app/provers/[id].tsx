import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
const mockData = [
  { id: "1", prover: "Alice", source: "https://example.com/a" },
  { id: "2", prover: "Bob", source: "https://example.com/b" },
  { id: "3", prover: "Charlie", source: "https://example.com/c" },
  { id: "4", prover: "Diana", source: "https://example.com/d" },
  { id: "5", prover: "Ethan", source: "https://example.com/e" },
  { id: "6", prover: "Fiona", source: "https://example.com/f" },
  { id: "7", prover: "George", source: "https://example.com/g" },
  { id: "8", prover: "Hannah", source: "https://example.com/h" },
  { id: "9", prover: "Isaac", source: "https://example.com/i" },
  { id: "10", prover: "Julia", source: "https://example.com/j" },
];
const provers = () => {
  const param = useLocalSearchParams<{ id: string }>();
  const data = mockData.find((item) => (item.id === param.id ? item : null));

  if (!data) {
    return (
      <View className="flex-1 justify-center">
        <Text>not found</Text>
      </View>
    );
  }
  return (
    <View className="flex-1 justify-center">
      <Stack.Screen options={{ title: data.prover }} />
      <Text>{data.prover}</Text>
      <Text>{data.source}</Text>
    </View>
  );
};
export default provers;
