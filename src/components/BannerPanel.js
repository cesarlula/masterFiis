import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const BannerPanel = () => {
  return (
    <View>
      <Image
        source={require("../../assets/examples/bannerExample.png")}
        style={styles.image}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
  },
});

export default BannerPanel;
