import "../global.css";
import { Slot, Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="provers/[id]"
        options={({ route }) => ({
          title: "prove" + route.params,
          animation: "none",
        })}
      />
    </Stack>
  );
}
