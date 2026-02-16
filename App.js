import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { collection, getDocs } from "firebase/firestore";
import { db } from './src/services/firebase.js';
import ProductSearchScreen from './src/screens/ProductSearchScreen.js'; 
import ComparisonScreen from './src/screens/ComparisonScreen.js';
import MapScreen from './src/screens/MapScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  const [products, setProducts] = useState(null);
  const [markets, setMarkets] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  const [comparisonBasket, setComparisonBasket] = useState([]);
  const [cheapestMarketId, setCheapestMarketId] = useState(null);

useEffect(() => {
    const fetchData = async () => {

      console.log("===================================");
      console.log("INICIANDO BUSCA NO FIREBASE...");
      console.log("===================================");
      
      try {
        const productsCol = collection(db, "products");
        const productSnapshot = await getDocs(productsCol);
        const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        console.log(`BUSCA 'products' CONCLUÍDA: ${productList.length} produtos encontrados.`);
        
        setProducts(productList);

        const marketsCol = collection(db, "markets");
        const marketSnapshot = await getDocs(marketsCol);
        const marketList = marketSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        console.log(`BUSCA 'markets' CONCLUÍDA: ${marketList.length} mercados encontrados.`);

        setMarkets(marketList);

      } catch (error) {
        console.error("Erro ao buscar dados do Firebase:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleProductInBasket = (productId) => {
    setComparisonBasket((currentBasket) =>
      currentBasket.includes(productId)
        ? currentBasket.filter((id) => id !== productId) 
        : [...currentBasket, productId] 
    );
  };

  if (isLoading) { 
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text>Carregando dados...</Text>
      </View>
    );
  }

  if (!products || !markets) {
     return (
      <View style={styles.loadingContainer}>
        <Text>Falha ao carregar dados. Verifique o Banco de Dados.</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductSearch">

        <Stack.Screen name="ProductSearch" options={{ title: 'Montar Cesta de Compras' }}>
          {(props) => (
            <ProductSearchScreen
              {...props}
              basket={comparisonBasket}
              toggleProduct={toggleProductInBasket}
              products={products}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Comparison" options={{ title: 'Comparar Preços' }}>
           {(props) => (
            <ComparisonScreen
              {...props}
              basket={comparisonBasket}
              setCheapestMarket={setCheapestMarketId}
              products={products}
              markets={markets}
            />
          )}
        </Stack.Screen>
        
        <Stack.Screen name="Map" options={{ title: 'Rota Mais Econômica' }}>
           {(props) => (
            <MapScreen
              {...props}
              cheapestMarketId={cheapestMarketId}
              markets={markets}
            />
          )}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  }
});