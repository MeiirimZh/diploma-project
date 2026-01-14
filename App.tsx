import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NotesScreen from "./screens/NotesScreen";
import CardsScreen from "./screens/CardsScreen";
import TestsScreen from "./screens/TestsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Notes" component={ NotesScreen } options={ {title: 'Заметки'} } />
        <Tab.Screen name="Cards" component={ CardsScreen } options={ {title: 'Карточки'} } />
        <Tab.Screen name="Tests" component={ TestsScreen } options={ {title: 'Тесты'} } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}