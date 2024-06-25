// src/products/AddProduct.js
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const AddProduct = ({ onAddProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAddProduct = () => {
    // Реализация добавления продукта
    const newProduct = {
      id: Math.random().toString(),
      name,
      price: parseFloat(price),
    };
    onAddProduct(newProduct);
    setName("");
    setPrice("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Product name"
      />
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Price"
        keyboardType="numeric"
      />
      <Button onPress={handleAddProduct} title="Add Product" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddProduct;
