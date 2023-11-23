import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './Login';
import {HomeScreen} from './Home';
import {Header} from './Header';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const handleBtn = () => {
    console.warn('BTN Pressed');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTintColor: 'yellow',
          headerTitleStyle: {
            fontSize: 25,
          },
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTitle: () => <Button title="Left" onPress={handleBtn} />,
            headerRight: () => <Header />,
            title: 'Login User',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: 'yellow',
            headerTitleStyle: {
              fontSize: 25,
            },
          }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
