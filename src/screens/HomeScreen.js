import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BannerPanel from "../components/BannerPanel";
import WalletList from "../components/WalletList";

const HomeScreen = () => {
  // Query the API to get information for the user
  // For now we are just hardcoding
  const results = { total: 500.0, variacao: 10, rentabilidade: 10 };

  return (
    <View style={styles.container}>
      <BannerPanel></BannerPanel>
      <WalletList results={results}></WalletList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222",
  },
});

export default HomeScreen;
