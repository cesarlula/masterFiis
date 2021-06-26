import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Divider,
} from "react-native";

const WalletDetails = () => {
  return (
    <View style={styles.container}>
      <View tyle={styles.topBar}>
        <Text style={styles.title}>CARTEIRA</Text>
        <Pressable></Pressable>
      </View>
      <View style={styles.centralWidget}>
        <View style={{ height: 200, width: 200 }}>
          <Image
            style={styles.rainbowCircle}
            source={require("../../assets/examples/rainbowCircle.png")}
          ></Image>
        </View>
        <View style={styles.rightContentArea}>
          <Text style={{ fontSize: 15, color: "#3E9295" }}>TOTAL</Text>
          <Text style={{ fontSize: 15, color: "white" }}>R$ 100.00</Text>
          <View
            style={{
              marginVertical: 10,
              borderBottomColor: "#CCCCCC",
              borderBottomWidth: 1,
            }}
          />
          <Text style={{ fontSize: 12, color: "#3E9295" }}>VARIAÇÃO (DIA)</Text>
          <Text style={{ fontSize: 15, color: "white" }}>0,00%</Text>
          <View
            style={{
              marginVertical: 10,
              borderBottomColor: "#CCCCCC",
              borderBottomWidth: 1,
            }}
          />
          <Text style={{ fontSize: 12, color: "#3E9295" }}>RENTABILIDADE</Text>
          <Text style={{ fontSize: 12, color: "white" }}>0,00%</Text>
        </View>
      </View>
      <View style={styles.bottomWidget}>
        <Text style={{ fontSize: 12, color: "white" }}>PATRIMONIO | </Text>
        <Text style={{ fontSize: 12, color: "white" }}>RENTABILIDADE | </Text>
        <Text style={{ fontSize: 12, color: "white" }}>PROVENTOS | </Text>
        <Text style={{ fontSize: 12, color: "white" }}>EXTRATO</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 300,
    marginTop: 15,
    marginLeft: 15,
    backgroundColor: "#444444",
    borderRadius: 5,
  },
  topBar: { flex: 1 },
  title: {
    marginTop: 10,
    marginLeft: 15,
    fontSize: 25,
    color: "white",
  },
  centralWidget: {
    flex: 6,
    flexDirection: "row",
  },
  rainbowCircle: {
    marginTop: 15,
    marginLeft: 15,
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: "transparent",
  },
  rightContentArea: {
    marginLeft: 20,
  },
  bottomWidget: {
    marginHorizontal: 10,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
});

export default WalletDetails;
