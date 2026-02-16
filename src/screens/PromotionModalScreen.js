import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PromotionModalScreen = ({ modalMarket }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Promoções</Text>
      {modalMarket ? (
        <Text>Promoções ativas para: {modalMarket.name}</Text>
      ) : (
        <Text>Selecione um mercado para ver as promoções.</Text>
      )}
    </View>
  );
};
