import React,{Component} from 'react'
 import {TouchableOpacity,Dimensions,Text} from 'react-native'
const width=Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class LoginBtn  extends Component{
    constructor(props){
        super(props)

    this.state = {

    }
    }


    log = () =>{
      this.props.navigation.navigate("TabNav")

    }

     Login = async () => {
        try {


        
    
            let response = await fetch('https://reqres.in/api/users?page=2')
            
            let users = await response.json()
            this.setState({FData: users})
             
            // console.log("users", this.state.FData)

    
             if ( Object.keys(users.data).find(key => users.data[key].first_name == this.props.UName && users.data[key].id == this.props.pwd )  ) {


                console.log("MAtcheeeed!",this.state.UName)

                this.props.navigation.navigate("TabNav")
Li
             }else{
                 console.log("oops wrong password or whatever!")
             }    
             
    
          return users.data;

        } catch (error) {
          console.error(error);
        }

        
      };
   
    
    render(){
        return(
            <TouchableOpacity 
            style={{ width:0.9*width,height:0.1*height,backgroundColor:"black",flexDirection:'row',justifyContent:'center',alignItems:'center'}}
            onPress={this.log}>
            <Text style={{color:"white",fontWeight:'600',fontSize:18,}}>logIn</Text>
            </TouchableOpacity>
            )
    }
}