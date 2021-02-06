

import React from 'react';
import { View, Text } from 'react-native';




function ProfileScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Text>Friends: </Text>
      <Text>{route.params.names[0]}</Text>
      <Text>{route.params.names[1]}</Text>
      <Text>{route.params.names[2]}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
  
  export default ProfileScreen;