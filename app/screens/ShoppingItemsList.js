import React from 'react'
import {View,Text,FlatList} from 'react-native'
import ShoppingItem from '../ShoppingItem';

const dataSource=[
{
 key:'1',
 Name:"Dress Blue",
 Description:"Fancy nice looking Dress ",
 PhotoURL:"https://cdn.cichic.com/media/catalog/product/1/0/10107506070-1.jpg"
},
{
    key:'2',
    Name:"shoes",
    Description:"Fancy nice looking shoes ",
    PhotoURL:"https://content.moss.co.uk/images/extralarge/965337715_03.jpg?xs-inline"
   },
   {
    key:'3',
    Name:"hat",
    Description:"Fancy nice looking hat ",
    PhotoURL:"https://i.pinimg.com/originals/ab/0e/7b/ab0e7ba7e61acd9481a38dbea082bf9f.jpg"
   },
   {
    key:'4',
    Name:"Jacket",
    Description:"Fancy nice looking Jacket",
    PhotoURL:"https://www.jcrew.com/s7-img-facade/B1552_GR7173"
   },


]
export default class ShoppingItemsList extends React.Component{

render(){

    return(

        

        <FlatList 
       

        data={dataSource}
        renderItem={({item}) =>(
             <ShoppingItem navigation={this.props.navigation} Item={item} />
          )} 
        />
    )
}

}