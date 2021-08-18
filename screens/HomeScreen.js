import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, Modal,ScrollView,KeyboardAvoidingView, FlatList, Touchable } from 'react-native';

export default class HomeScreen extends Component {
  constructor(){
    super()
    this.state={
      username : '',
      password: '',
      isVisible : false,
      firstName : "",
      lastName : "",
      mobileNumber:"",
      address : "",
      confirmPassword : ""
    }
  }
  renderItem = ({item, i}) => {
    console.log(item.item_name)
    return(
        <FlatList 
        key={i}
        title={item.item_name}
        subtitle={item.item_description}
        titleStyle={{color: 'black', fontWeight: 'bold'}}
        rightElement={
            <TouchableOpacity style={styles.button}> 
                <Text style={{color: '#ffff'}}>Exchange</Text>
            </TouchableOpacity>
        }
        bottomDivider
        />
    )
  }

  render(){
    return(
      <View style={styles.container}>
        <FlatList 
        keyExtractor={(item, index)=> index.toString()}
        data={this.state.allRequests}
        renderItem={this.renderItem}/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffe0b2'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:60,
    fontWeight:'300',
    color : '#ff9800'
  },
  loginBox:{
    width: 300,
    height: 35,
    borderBottomWidth: 1.5,
    borderColor:'#ffab91',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:30,
    marginTop:400
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ffff",
    elevation:10
  },
  buttonContainer:{
    flex:1,
  },
  modalContainer:{
    flex:1,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ffff",
    marginRight:30,
    marginLeft : 30,
    marginTop:80,
    marginBottom:80,
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  },
  registerButton:{
    width:200,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderRadius:10,
    marginTop:30
  },
  registerButtonText:{
    color:'#ff5722',
    fontSize:15,
    fontWeight:'bold'
  },
  cancelButton:{
    width:200,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    marginTop:5,
  },
})
