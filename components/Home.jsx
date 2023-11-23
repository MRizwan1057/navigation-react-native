import {Text, View} from 'react-native';

export const HomeScreen = props => {
  const {name, age} = props.route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 25, marginVertical: 22}}>Home Screen</Text>
      <Text>Name : {name}</Text>
      <Text>Age : {age}</Text>
    </View>
  );
};
