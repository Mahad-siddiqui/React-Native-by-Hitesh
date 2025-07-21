import React from "react";

import { SafeAreaView, Text, View } from "react-native";
import FlateCards from "./FlateCards";

const AppPro = () => {
  return (
    <SafeAreaView>
      <View>
        <FlateCards />
        <Text>App Pro</Text>
      </View>
    </SafeAreaView>
  );
};

export default AppPro;