import React,{Component} from 'react'
import {TextInput,Dimensions} from 'react-native'

const width=Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class UserName  extends Component{

shouldComponentUpdate(nextProps, nextState){
    return false; 
}
    render(){
        return(
            <TextInput
            style={{fontSize:16,height:0.1*height,width:0.9*width,borderBottomColor:"grey",borderBottomWidth:1,backgroundColor:this.props.BKcolor}}
            placeholder="User Name"
            onChangeText={this.props.ParentUserNameChanged}
            ></TextInput>
            )
    }
}