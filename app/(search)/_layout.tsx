import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'green',
      tabBarStyle: {
        backgroundColor: '#25292e'
      }
    }}>
      <Tabs.Screen name="index" options={{
        title: 'Agrotóxicos',
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <MaterialCommunityIcons name={focused ? 'leaf-circle' : 'leaf-circle-outline'} color={color} size={30} />
        )
      }} />

      <Tabs.Screen name="about" options={{
        title: 'Atualizações',
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <FontAwesome6 name={focused ? 'book-open' : 'book'} color={color} size={24} />
        ),
      }} />
    </Tabs>
  );
}
