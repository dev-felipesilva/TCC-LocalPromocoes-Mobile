import React, { useMemo, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, Button } from 'react-native';


const ComparisonScreen = ({ navigation, basket, setCheapestMarket, products, markets }) => {

  const marketTotals = useMemo(() => {
    if (!products || !markets) {
      return [];
    }

    return markets.map(market => {
      const total = basket.reduce((sum, productId) => {
        const product = products.find(p => p.id === productId);
        if (!product) {
          console.warn(`[Cesto Inconsistente] Produto ID ${productId} não encontrado na lista de produtos.`);
          return sum; // Pula este produto
          }
        const price = product.prices?.[market.id] || 0;
        if (price === undefined) {
          console.error(`COMPARISON ERROR: Produto ${product.name} (ID: ${productId}) não tem preço para o mercado ${market.name} (ID: ${market.id})`);
        }
        return sum + price; 
      }, 0);
      
      return { ...market, total };
    }).sort((a, b) => a.total - b.total); 
    
  }, [basket, products, markets]); 

  useEffect(() => {
    if (marketTotals.length > 0) {
      setCheapestMarket(marketTotals[0].id);
    }
  }, [marketTotals, setCheapestMarket]);

  if (basket.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.emptyText}>Sua cesta está vazia.</Text>
        <Button title="Voltar e adicionar produtos" onPress={() => navigation.goBack()} />
      </SafeAreaView>
    );
  }

  // Renderiza o card de cada mercado
  const renderMarketCard = ({ item, index }) => {
    const isCheapest = index === 0;
    
    return (
      <View style={[styles.card, isCheapest && styles.bestCard]}>
        <Text style={styles.marketName}>{item.name}</Text>
        <Text style={styles.marketAddress}>{item.address}</Text>
        <Text style={styles.totalPrice}>R$ {item.total.toFixed(2)}</Text>
        {isCheapest && <Text style={styles.bestBadge}>MELHOR OPÇÃO</Text>}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={marketTotals}
        renderItem={renderMarketCard}
        keyExtractor={item => item.id}
        ListFooterComponent={
          <Button 
            title="Ver Rota para a Melhor Opção" 
            onPress={() => navigation.navigate('Map')}
          />
        }
        ListFooterComponentStyle={{ padding: 20 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  emptyText: { textAlign: 'center', fontSize: 18, margin: 20 },
  card: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  bestCard: {
    borderColor: '#28a745', 
    backgroundColor: '#f0fff4',
  },
  marketName: { fontSize: 18, fontWeight: 'bold' },
  marketAddress: { fontSize: 14, color: 'gray', marginVertical: 5 },
  totalPrice: { fontSize: 24, fontWeight: 'bold', color: '#333', marginTop: 10 },
  bestBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#28a745',
    color: 'white',
    padding: 5,
    borderRadius: 5,
    fontSize: 10,
    fontWeight: 'bold',
  }
});

export default ComparisonScreen;