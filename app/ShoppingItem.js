import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'


export default class ShoppingItem extends React.Component{

 
render(){

    return(  
        <TouchableOpacity 
        style={{flex:1}}
        // onPress={this.onPressFunctionNewSyntax}
        // onPress={this.onPressFun} 
        onPress={()=>{
            this.props.navigation.navigate("ItemDetails")
        }}
         >
        <View style={{borderBottomColor:"gray",borderBottomWidth:1,padding:5,flex:1,flexDirection:'row'}}>
        <Image source={{uri: this.props.Item.PhotoURL}} style={{height:100,width:100}} />
       <View style ={{padding:5 }} >
        <Text style={{fontSize:18,fontWeight:'600'}}>{this.props.Item.Name}</Text>
        <Text  style={{fontSize:16,fontWeight:'400'}}>{this.props.Item.Description}</Text>
        </View>
        </View>
        </TouchableOpacity>
        )
}

}