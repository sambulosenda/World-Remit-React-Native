import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import HomeTabNavigator from './HomeTapNavigator';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'Destination Search'}
          component={Home}
          options={{title: 'Search your destination'}}
        />

        <Stack.Screen
          name={'Guests'}
          component={Home}
          options={{title: 'How many people?'}}
        />

        <Stack.Screen
          name={'Post'}
          component={Home}
          options={{title: 'Accommodation'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;