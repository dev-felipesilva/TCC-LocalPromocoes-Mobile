import React, { useState, useMemo } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, Button } from 'react-native';

const ProductSearchScreen = ({ navigation, basket, toggleProduct, products }) => {
  const [searchText, setSearchText] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchText) {
      return products;
    }
    return products.filter(p => 
      p.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, products]);

  const renderItem = ({ item }) => {
    const isInBasket = basket.includes(item.id);
    return (
      <View style={styles.productItem}>
        <Text style={styles.productName}>{item.name}</Text>
        <TouchableOpacity 
          style={[styles.addButton, isInBasket && styles.addButtonInBasket]}
          onPress={() => toggleProduct(item.id)}
        >
          <Text style={styles.addButtonText}>{isInBasket ? '✓' : '+'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar produto (ex: Arroz, Leite...)"
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum produto encontrado.</Text>}
      />
      
      <View style={styles.footer}>
        <Button
          title={`Comparar Preços (${basket.length} itens)`}
          disabled={basket.length === 0}
          onPress={() => navigation.navigate('Comparison')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  searchBar: {
    padding: 15,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  productName: { fontSize: 16 },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonInBasket: {
    backgroundColor: '#28a745', 
  },
  addButtonText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  footer: { padding: 20, borderTopWidth: 1, borderColor: '#ddd', backgroundColor: 'white', marginBottom: 20},
  emptyText: { textAlign: 'center', marginTop: 20, color: 'gray' }
});

export default ProductSearchScreen;