import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

export const LoginScreen = props => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 25, marginVertical: 22}}>Login Screen</Text>
      <TextInput
        placeholder="Enter Name"
        onChangeText={text => {
          setName(text);
        }}
        style={{
          borderBottomWidth: 2,
          width: 100,
          fontSize: 20,
          color: 'black',
        }}
      />
      <TextInput
        placeholder="Enter Age"
        onChangeText={text => {
          setAge(text);
        }}
        style={{
          borderBottomWidth: 2,
          width: 100,
          fontSize: 20,
          marginBottom: 11,
          color: 'black',
        }}
      />
      <Button
        title="Go to Home"
        onPress={() => {
          props.navigation.navigate('Home', {name, age});
        }}
      />
    </View>
  );
};
