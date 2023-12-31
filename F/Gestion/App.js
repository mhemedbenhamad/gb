// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Afficher from './screens/Afficher';  
import Ajouter from './screens/Ajouter';  

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Afficher">
        <Stack.Screen name="Afficher" component={Afficher} />
        <Stack.Screen name="Ajouter" component={Ajouter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

