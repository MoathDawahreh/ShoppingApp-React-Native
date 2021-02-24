import React,{Component} from 'react'
 import {TouchableOpacity,Dimensions,Text} from 'react-native'
 import * as SecureStore from 'expo-secure-store';

const width=Dimensions.get('window').width
const height = Dimensions.get('window').height



async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    alert("🔐 Here's your value 🔐 \n" + result);
  } else {
    alert('No values stored under that key.');
  }
}


export default class LoginBtn  extends Component{
    constructor(props){
        super(props)

    this.state = {

    }
    }

    // save = async  (key, value) => {
    //   await SecureStore.setItemAsync(key, value);
    // }

    // getValueFor = async (key)=> {
    //   let result = await SecureStore.getItemAsync(key);
    //   if (result) {
    //     console.log("🔐 Here's your value 🔐 \n" + result);
    //   } else {
    //     console.log('No values stored under that key.');
    //   }
    // }
    
    


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

              save(this.props.UName,this.props.pwd) ;



              console.log("MAtcheeeed!",this.state.FData)

              getValueFor(this.props.UName)

                this.props.navigation.navigate("TabNav")

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
            style={{ width:0.9*width,height:0.1*height,backgroundColor:"#761d8c",flexDirection:'row',justifyContent:'center',alignItems:'center'}}
            onPress={this.Login}>
            <Text style={{color:"white",fontWeight:'600',fontSize:18,}}>logIn</Text>
            </TouchableOpacity>
            )
    }
}
