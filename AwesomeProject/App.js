import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import Test from './components/Test';


export default function App() {
  return (
    <View>

      <View style={tailwind('py-4 items-center bg-gray-200')}>
        <Text>Recherche d'infirmiers proches</Text>
      </View>
      
      <Test name="" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
