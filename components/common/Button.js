import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ onPress, children }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    flex: 1,
    borderWidth: 3,
    borderColor: "mediumpurple",
    backgroundColor: "rebeccapurple",
    borderRadius: 25,
    marginTop: 5,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 5,
  },
});

export { Button };
