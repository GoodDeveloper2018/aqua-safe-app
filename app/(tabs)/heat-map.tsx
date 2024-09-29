// heat-map.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './index'; // Import the RootStackParamList type

// Define the props type for the HeatMapScreen component
type HeatMapScreenProps = NativeStackScreenProps<RootStackParamList, 'HeatMap'>;

const HeatMapScreen = ({ navigation }: HeatMapScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Global Water Heatmap Screen</Text>
      
      {/* Button to navigate back to Home screen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Go Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HeatMapScreen;
