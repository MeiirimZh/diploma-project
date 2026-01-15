import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import NotesScreen from "./screens/NotesScreen";
import CardsScreen from "./screens/CardsScreen";
import TestsScreen from "./screens/TestsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const iconMap = {
              Notes: focused ? 'document' : 'document-outline',
              Cards: focused ? 'albums' : 'albums-outline',
              Tests: focused ? 'clipboard' : 'clipboard-outline'
            } as const;

            const iconName = iconMap[route.name as keyof typeof iconMap];

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'hsla(210, 100%, 50%, 1.0)',
          tabBarInactiveTintColor: 'hsla(0, 0%, 50%, 1.0)'
        })}
      >
        <Tab.Screen name="Notes" component={ NotesScreen } options={ {title: 'Заметки'} } />
        <Tab.Screen name="Cards" component={ CardsScreen } options={ {title: 'Карточки'} } />
        <Tab.Screen name="Tests" component={ TestsScreen } options={ {title: 'Тесты'} } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}