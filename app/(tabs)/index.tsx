// index.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import HeatMapScreen from './heat-map'; // Import your heatmap screen

// Define and export the type for your navigation stack
export type RootStackParamList = {
  Home: undefined; // No params for Home screen
  HeatMap: undefined; // No params for HeatMap screen
};

// Create a type for the HomeScreen's props
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  // Get the safe area insets
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" />

      {/* Donate Button positioned at the top-right corner */}
      <TouchableOpacity
        style={[
          styles.donateButton,
          {
            top: insets.top + 10, // Respect the top inset
            right: 20, // Adjust left to move it away from the right edge
          },
        ]}
      >
        <Text style={styles.donateButtonText}>Donate!</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>AquaSafe</Text>
        <Text style={styles.subtitle}>Track Water Contamination Globally</Text>

        {/* Button to navigate to HeatMap screen */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('HeatMap')} // Properly typed navigation
        >
          <Text style={styles.buttonText}>View Global Water Heatmap</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Learn About Water Contamination</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>How to Filter Contaminated Water</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>About AquaSafe</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

// Creating the tab navigator
const Tab = createBottomTabNavigator<RootStackParamList>(); // Use the defined type

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Tab.Screen name="HeatMap" component={HeatMapScreen} options={{ title: 'Global Water Heatmap' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 32,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  donateButton: {
    position: 'absolute',
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  donateButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
});
