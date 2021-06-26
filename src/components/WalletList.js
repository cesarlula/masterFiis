import React from "react";
import { View, Text, StyleSheet } from "react-native";
import WalletDetails from "./WalletDetails";

const WalletList = ({ results }) => {
  return (
    <View style={styles.container}>
      <WalletDetails></WalletDetails>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});

export default WalletList;
