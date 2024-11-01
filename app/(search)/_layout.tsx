import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function TabLayout() {
  return (
    <Tabs
      sceneContainerStyle={{
        backgroundColor: "#25292e"
      }}
      screenOptions={{
        tabBarActiveTintColor: '#187b13',
        tabBarInactiveTintColor: '#565656',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#25292e',
          borderTopColor: '#3f3f3f'
        }
      }}>
      <Tabs.Screen name="index" options={{
        title: 'Agrotóxicos',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name={'leaf-circle'} color={color} size={size + 10} />
        )
      }} />

      <Tabs.Screen name="about" options={{
        title: 'Atualizações',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome6 name={'book'} color={color} size={size} />
        ),
      }} />
    </Tabs>
  );
}
