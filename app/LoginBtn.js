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
             
            console.log("users", this.state.FData)

    
             if ( Object.keys(users.data).find(key => users.data[key].first_name == this.props.UName && users.data[key].id == this.props.pwd )  ) {



                console.log("MAtcheeeed!",this.state.UName)

                this.props.navigation.navigate("TabNav")

             }else{
                 console.log("oops wrong password or whatever!")
             }    
             
    
          return users.data;

        } catch (error) {
          console.error(error);
        }
      };
    


    //  Login = async () => {


    //     try {

    //         const requestOptions = {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify( {
    //                 "name" : "eeerrrrrtt",
    //                 "pwd" : "32323"
    //                })
    //         };

    //         console.log(requestOptions)


        
    
    //         const response = await fetch('https://localhost:4000/add-user',requestOptions)
            
    //         const data = await response.json();
    //         return data
   


 
    //     } catch (error) {
    //       console.error(error);
    //       throw error;

    //     }
    //   };

    
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