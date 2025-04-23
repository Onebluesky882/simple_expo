import AppText from "@/components/AppText";
import { Button } from "@/components/Button";
import { Link, router } from "expo-router";
import React from "react";
import { View } from "react-native";
const index = () => {
  return (
    <View className="items-center justify-center flex-1">
      <Link href="/one" asChild>
        <Button title={"push to one"} />
      </Link>
      <Link href="/fifth/sixth" asChild>
        <Button title={"push to six"} />
      </Link>
      {/*    src/app/provers */}
      <Link href="provers/1" push asChild>
        <Button title={"provers/1"} />
      </Link>
      <Link href="provers/2" push asChild>
        <Button title={"provers/2"} />
      </Link>
      {/*  products/[category]/[id].tsx */}
      <Link href="products/shoe/1" push asChild>
        <Button title={"products/shoe/1"} />
      </Link>
    </View>
  );
};
export default index;
