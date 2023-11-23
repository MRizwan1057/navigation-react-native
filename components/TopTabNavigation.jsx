import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login Tab" component={Login} />
        <Tab.Screen name="Register Tab" component={Register} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const Login = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};
const Register = () => {
  return (
    <View>
      <Text>Register</Text>
    </View>
  );
};

export default TopTabNavigation;
