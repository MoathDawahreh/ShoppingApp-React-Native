import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Image,StyleSheet,Dimensions} from 'react-native'
import ProfileScreen from './ProfileScreen'
import ShoppingItemsList from '../app/screens/ShoppingItemsList'
import { useIsFocused} from '@react-navigation/native'
import { color } from 'react-native-reanimated'

const Tab = createBottomTabNavigator();

export default class TabNav extends React.Component{

render(){


  // console.log(Dimensions.get('window'))

    return(


      // isSignedIn ? (
      //   <>
      //     <Stack.Screen name="Home" component={HomeScreen} />
      //     <Stack.Screen name="Profile" component={ProfileScreen} />
      //     <Stack.Screen name="Settings" component={SettingsScreen} />
      //   </>
      // ) : (
      //   <>
      //     <Stack.Screen name="SignIn" component={SignInScreen} />
      //     <Stack.Screen name="SignUp" component={SignUpScreen} />
      //   </>
      // )




        <Tab.Navigator
        tabBarOptions={{
        activeTintColor: "red",
        }}
          >
        <Tab.Screen name="Shope" component={ShoppingItemsList}
         options={{
          tabBarLabel: 'Explore',
          tabBarIcon: () => (
            <Image style={styles.img} source={require('./assets/shopping.png')} />
          ),
          tabBarBadge: 2,
          }}
        
        />
        <Tab.Screen name="Settings" component={ProfileScreen} 
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
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
