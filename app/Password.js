import React,{Component} from 'react'
import {TextInput,Dimensions} from 'react-native'


const width=Dimensions.get('window').width
const height = Dimensions.get('window').height
export default class Password  extends Component{

    render(){

        return(
            <TextInput
            secureTextEntry={true}
            style={{fontSize:16,height:0.1*height,width:0.9*width,borderBottomColor:"grey",borderBottomWidth:1}}
            placeholder="Password"
            onChangeText={this.props.ParentPasswordChanged}
            ></TextInput>
            )
    }
}