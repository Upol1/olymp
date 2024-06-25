// src/products/ProductDetail.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Detail = ({ product }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>Price: ${product.price.toFixed(2)}</Text>
      {/* Добавьте здесь другие детали продукта по необходимости */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: "green",
  },
});

export default Detail;
