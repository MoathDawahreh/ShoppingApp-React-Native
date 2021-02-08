import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image,StyleSheet,Dimensions} from 'react-native'
import ProfileScreen from './ProfileScreen'
import ShoppingItemsList from '../app/screens/ShoppingItemsList'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useIsFocused} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default class TabNav extends React.Component{



render(){


  // console.log(Dimensions.get('window'))

    return(

      
        <Tab.Navigator >
        <Tab.Screen name="Shope" component={ShoppingItemsList}
         options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Image style={styles.img} source={require('./assets/shopping.png')} />
          ),
          tabBarBadge: 2,
          }}
        
        />
        <Tab.Screen name="Settings" component={ProfileScreen} 
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Image style={styles.img} source={require('./assets/profile.png')} />
            ),
            }} />
      </Tab.Navigator>


      
    )
}

}


const styles = StyleSheet.create({
  img: {
    height:25,
    width:25

  }

})
