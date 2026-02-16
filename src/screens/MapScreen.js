import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const ITUVERAVA_REGION = {
  latitude: -20.33,
  longitude: -47.79,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const MapScreen = ({ navigation, cheapestMarketId, markets }) => {

  const cheapestMarket = markets?.find(m => m.id === cheapestMarketId);

  const initialRegion = cheapestMarket 
    ? { ...ITUVERAVA_REGION, latitude: cheapestMarket.latitude, longitude: cheapestMarket.longitude }
    : ITUVERAVA_REGION;

  if (!cheapestMarket) {
     return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.emptyText}>Nenhuma opção selecionada.</Text>
        <Button title="Voltar e comparar" onPress={() => navigation.navigate('Comparison')} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        {markets.map(market => {
          const isCheapest = market.id === cheapestMarketId;
          return (
            <Marker
              key={market.id}
              coordinate={{ latitude: market.latitude, longitude: market.longitude }}
              title={market.name}
              description={market.address}
              pinColor={isCheapest ? 'green' : 'red'} 
            />
          );
        })}
      </MapView>
      
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Rota Mais Econômica:</Text>
        <Text style={styles.infoText}>{cheapestMarket.name}</Text>
        <Text style={styles.infoAddress}>{cheapestMarket.address}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  emptyText: { textAlign: 'center', fontSize: 18, margin: 20 },
  infoBox: {
    padding: 20,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20
  },
  infoTitle: { fontSize: 14, color: 'gray' },
  infoText: { fontSize: 18, fontWeight: 'bold' },
  infoAddress: { fontSize: 14, marginTop: 5 },
});

export default MapScreen;