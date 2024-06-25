// src/products/ProductList.js
import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import ProductItem from "../components/ProductItem";

const ProductList = ({ products }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default ProductList;
