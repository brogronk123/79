import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, Modal,ScrollView,KeyboardAvoidingView } from 'react-native';
import db from '../config';

export default class ExchangeScreen extends Component {
  constructor(){
    super()
    this.state={
      username: '',
      name : '',
      description: '',
    }
  }

  addItem = (name, description) =>{
      db.collection('exchange_requests').add({
          username: this.state.username,
          item_name: name,
          item_description: description,
      })
      this.setState({
          name: '',
          description: ''
      })
    }


  render(){
    return(
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Text style={{color:'#ff5722', fontSize:18, fontWeight:'bold',marginLeft:55}}>USERNAME</Text>
          <View style={{alignItems:'center'}}>
            <TextInput
            style={styles.loginBox}
            placeholder = {"Enter Item Name"}
            onChangeText={(text)=>{
              this.setState({
                name: text
              })
            }}
            />
          </View>
          <Text style={{color:'#ff5722', fontSize:18, fontWeight:'bold',marginLeft:55}}>PASSWORD</Text>
          <View style={{alignItems:'center'}}>
            <TextInput
              style={[styles.loginBox,{marginTop: 450}]}
              placeholder = {"Enter Item Description"}
              onChangeText={(text)=>{
                this.setState({
                  description: text
                })
              }}
            />
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity
              style={[styles.button,{marginBottom:30, marginTop: 500}]}
              onPress = {()=>{this.addItem(this.state.name, this.state.description)}}
              >
              <Text style={{color:'#ff5722', fontSize:18, fontWeight:'bold'}}>Add Item</Text>
            </TouchableOpacity>
          </View>
        </View>
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
