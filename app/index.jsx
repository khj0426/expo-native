import { Link, router } from "expo-router";

import React from "react";

import { Text, View, Pressable } from "react-native";

export default function Index() {
  return (
    <View>
      <Text className="text-red-200 text-5xl font-bold">dsagsdi</Text>
      <Link href={"/users/1"}>이동하기</Link>
      <Pressable onPress={() => router.push("/users/2")}>
        <Text>Go to user2</Text>
      </Pressable>
    </View>
  );
}
