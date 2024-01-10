import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const HomePageScreen = () => {
  const clothCategories = [
    { id: '1', category: 'T-Shirts' },
    { id: '2', category: 'Jeans' },
    { id: '3', category: 'Dresses' },
    // Add more categories as needed
  ];

  const clothItems = [
    { id: '1', name: 'Casual T-Shirt', price: '$19.99' },
    { id: '2', name: 'Skinny Jeans', price: '$49.99' },
    { id: '3', name: 'Summer Dress', price: '$39.99' },
    // Add more cloth items as needed
  ];

  const designers = [
    { id: '1', name: 'Designer A' },
    { id: '2', name: 'Designer B' },
    { id: '3', name: 'Designer C' },
    // Add more designers as needed
  ];

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search for clothes"
        placeholderTextColor="#888"
      />

      {/* Cloth Categories */}
      <Text style={styles.sectionTitle}>Cloth Categories</Text>
      <FlatList
        data={clothCategories}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Text>{item.category}</Text>
          </View>
        )}
      />

      {/* Cloth Items */}
      <Text style={styles.sectionTitle}>Cloth Items</Text>
      <FlatList
        data={clothItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        )}
      />

      {/* Designers */}
      <Text style={styles.sectionTitle}>Designers</Text>
      <FlatList
        data={designers}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.designerItem}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};


export default HomePageScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingLeft: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  categoryItem: {
    marginRight: 12,
    padding: 8,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  itemContainer: {
    marginBottom: 12,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  designerItem: {
    marginRight: 12,
    padding: 8,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
});

