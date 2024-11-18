import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: '#f8f8f8',
          borderTopWidth: 2,
          borderTopColor: '#e0e0e0',
          borderRadius: 15,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 5, // For Android shadow
          shadowColor: '#000', // For iOS shadow
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray', // Color for inactive tabs
        tabBarLabelStyle: styles.tabLabel,
        tabBarIconStyle: styles.tabIcon, // Custom styles for icons
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Registro"
        options={{
          title: 'Registro',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="clipboard" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  tabIcon: {
    marginBottom: 5, // Espaciado inferior para los íconos
  },
});
