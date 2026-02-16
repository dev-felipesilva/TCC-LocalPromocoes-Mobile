import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { collection, getDocs } from "firebase/firestore";
import { db } from './src/services/firebase.js';


const MarketItem = ({ market, onSelectMarket, onOpenPromotions }) => {
  return (
    <View style={styles.marketCard}>
      
      <View style={styles.marketInfo}>
        <Text style={styles.marketName}>{market.name}</Text>
        <Text style={styles.marketAddress}>{market.address}</Text>
        <Text style={styles.marketPromos}>
          ★ {market.rating} | {market.promotions.length} Promoções
        </Text>
      </View>
      

      <Button
        title="VER PROMOÇÕES"
        color="#4CAF50" 
        onPress={() => onOpenPromotions(market.id)}
      />

      <TouchableOpacity 
        style={styles.selectButton}
        onPress={() => onSelectMarket(market.id)}
      >
        <Text style={styles.selectText}>Comparar Preços</Text>
      </TouchableOpacity>
    </View>
  );
};


const MarketListScreen = ({ navigation, onSelectMarket, onOpenPromotions }) => {

  const renderItem = ({ item }) => (
    <MarketItem 
      market={item}
      onSelectMarket={onSelectMarket}
      onOpenPromotions={onOpenPromotions}
    />
  );
  
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Mercados ({mockMarkets.length} encontrados)</Text>
      <FlatList
        data={mockMarkets} 
        renderItem={renderItem} 
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <Button
            title="Visualizar no Mapa"
            onPress={() => navigation.navigate('Mapa')}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 5,
  },
  marketCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  marketInfo: {
    marginBottom: 10,
  },
  marketName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF', 
  },
  marketAddress: {
    fontSize: 14,
    color: '#666',
  },
  marketPromos: {
    fontSize: 14,
    color: '#FFD700', 
    marginTop: 5,
  },
  selectButton: {
    marginTop: 10,
    padding: 5,
    alignSelf: 'flex-start',
  },
  selectText: {
    color: '#007BFF',
    textDecorationLine: 'underline',
    fontSize: 12,
  }
});

export default MarketListScreen;