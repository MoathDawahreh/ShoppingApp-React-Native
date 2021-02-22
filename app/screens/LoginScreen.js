import React,{Component} from 'react'
import {KeyboardAvoidingView ,Image} from 'react-native'
import Password from '../Password';
import LoginBtn from '../LoginBtn';
import UserName from '../UserName'

export default class LoginForm  extends Component{
    constructor(props){
        super(props)
        this.state={
            UserNameValue:"",
            PasswordValue:""
        }
    }
    
    UserNameChanged=(value)=>{
        this.setState({UserNameValue:value})
    }
    PasswordChanged=(value)=>{
        this.setState({PasswordValue:value})
    }
    render(){
        return(
            <KeyboardAvoidingView style={{flex:1,justifyContent:'center',alignItems:"center"}} behavior="padding" enabled>
            {/* <Image source={require("../assets/geek.jpg")} style={{height:300,width:300}} /> */}
                <UserName ParentUserNameChanged={this.UserNameChanged}/>
                <Password ParentPasswordChanged={this.PasswordChanged}/>
                <LoginBtn navigation={this.props.navigation} pwd={this.state.PasswordValue} UName={this.state.UserNameValue}/>
            </KeyboardAvoidingView>
            )
    }
}